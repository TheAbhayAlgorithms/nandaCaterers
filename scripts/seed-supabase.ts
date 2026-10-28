import { loadEnvConfig } from "@next/env";
import { createClient } from "@supabase/supabase-js";
import { menuCategories } from "../data/menu";
import { galleryImages } from "../data/gallery";
import { getSoupDemoDescription } from "../data/siteContent";

// Load environment variables from .env.local, .env, etc.
loadEnvConfig(process.cwd());

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
let serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

// Handle accidental duplicate 's' if copied with prefix typo
if (serviceRoleKey && serviceRoleKey.startsWith("ssb_")) {
  serviceRoleKey = serviceRoleKey.replace(/^ssb_/, "sb_");
}

if (!supabaseUrl) {
  console.error("[FATAL] Missing NEXT_PUBLIC_SUPABASE_URL environment variable.");
  process.exit(1);
}

if (!serviceRoleKey) {
  console.error("[FATAL] Missing SUPABASE_SERVICE_ROLE_KEY environment variable.");
  console.error("The seed script requires the service role key to bypass RLS policies.");
  console.error("Never run seed with the client-side publishable key.");
  process.exit(1);
}

// Server-side client with disabled session persistence and auto-refresh
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

interface PostgrestErrorPayload {
  message?: string;
  code?: string;
  details?: string;
  hint?: string;
}

function assertNoError(operation: string, error: PostgrestErrorPayload | null) {
  if (error) {
    console.error(`\n[DATABASE ERROR] Operation failed: ${operation}`);
    console.error(`Message: ${error.message || "No error message provided"}`);
    if (error.code) console.error(`Code:    ${error.code}`);
    if (error.details) console.error(`Details: ${error.details}`);
    if (error.hint) console.error(`Hint:    ${error.hint}`);
    process.exit(1);
  }
}

async function runSeed() {
  console.log("==========================================");
  console.log("NANDA CATERERS - SUPABASE SEED SCRIPT");
  console.log("==========================================");

  // 1. Analyze and extract all source data before touching the database
  const sourceCategoryCount = menuCategories.length;

  interface PreparedDish {
    categorySlug: string;
    name: string;
    description: string | null;
    type: "veg" | "non-veg" | null;
    image_url: string | null;
    is_popular: boolean;
    is_visible: boolean;
    sort_order: number;
  }

  const allPreparedDishes: PreparedDish[] = [];
  let sourcePopularCount = 0;

  for (const cat of menuCategories) {
    let dishOrder = 0;
    for (const section of cat.sections) {
      for (const dish of section.dishes) {
        const isPopular = Boolean(dish.isPopular);
        if (isPopular) {
          sourcePopularCount++;
        }

        const description =
          dish.description || getSoupDemoDescription(dish.name) || null;

        allPreparedDishes.push({
          categorySlug: cat.slug,
          name: dish.name.trim(),
          description,
          type: dish.type || null,
          image_url: dish.image || null,
          is_popular: isPopular,
          is_visible: true,
          sort_order: dishOrder++,
        });
      }
    }
  }

  const sourceDishCount = allPreparedDishes.length;

  // Deduplicate gallery images by image URL so each unique photo is inserted once
  const uniqueGalleryItems: typeof galleryImages = [];
  const seenGalleryUrls = new Set<string>();

  for (const img of galleryImages) {
    const trimmedUrl = img.src.trim();
    if (!seenGalleryUrls.has(trimmedUrl)) {
      seenGalleryUrls.add(trimmedUrl);
      uniqueGalleryItems.push({
        ...img,
        src: trimmedUrl,
      });
    }
  }

  const sourceGalleryCount = uniqueGalleryItems.length;

  // Print counts BEFORE inserting per requirement 1
  console.log("\n[SOURCE DATA DISCOVERED]");
  console.log(`- Categories to seed:     ${sourceCategoryCount}`);
  for (const c of menuCategories) {
    console.log(`    • ${c.title} (${c.slug})`);
  }
  console.log(`- Total dishes to seed:   ${sourceDishCount}`);
  console.log(`- Popular dishes:         ${sourcePopularCount}`);
  console.log(`- Unique gallery images:  ${sourceGalleryCount}`);
  console.log("==========================================\n");

  // 2. Insert / Upsert Menu Categories (stable key: slug)
  console.log("Phase 1: Seeding menu categories...");
  const categoryMap = new Map<string, string>(); // slug -> category_id UUID

  for (let idx = 0; idx < menuCategories.length; idx++) {
    const cat = menuCategories[idx];
    const { data, error } = await supabase
      .from("menu_categories")
      .upsert(
        {
          slug: cat.slug,
          name: cat.title,
          sort_order: idx,
          is_visible: true,
        },
        { onConflict: "slug" }
      )
      .select("id, slug")
      .single();

    assertNoError(`Upsert category '${cat.title}' (${cat.slug})`, error);

    if (!data || !data.id) {
      console.error(`[FATAL] Category '${cat.title}' returned empty record after upsert.`);
      process.exit(1);
    }

    categoryMap.set(data.slug, data.id);
  }
  console.log(`✓ Successfully seeded ${categoryMap.size} categories.`);

  // 3. Insert / Upsert Menu Items (stable key: category_id + name)
  console.log("\nPhase 2: Seeding menu dishes...");

  // Fetch all existing menu items to guarantee idempotency without creating duplicates
  const { data: existingItems, error: fetchItemsError } = await supabase
    .from("menu_items")
    .select("id, category_id, name");

  assertNoError("Fetch existing menu items for idempotency", fetchItemsError);

  const existingDishIdMap = new Map<string, string>(); // `${category_id}:::${name.toLowerCase()}` -> UUID
  if (existingItems) {
    for (const item of existingItems) {
      const key = `${item.category_id}:::${item.name.trim().toLowerCase()}`;
      existingDishIdMap.set(key, item.id);
    }
  }

  interface DishRow {
    id?: string;
    category_id: string;
    name: string;
    description: string | null;
    type: "veg" | "non-veg" | null;
    image_url: string | null;
    is_popular: boolean;
    is_visible: boolean;
    sort_order: number;
  }

  const dishesToUpsert: DishRow[] = [];

  for (const item of allPreparedDishes) {
    const categoryId = categoryMap.get(item.categorySlug);
    if (!categoryId) {
      console.error(`[FATAL] No category ID found for slug '${item.categorySlug}'`);
      process.exit(1);
    }

    const key = `${categoryId}:::${item.name.toLowerCase()}`;
    const existingId = existingDishIdMap.get(key);

    const row: DishRow = {
      category_id: categoryId,
      name: item.name,
      description: item.description,
      type: item.type,
      image_url: item.image_url,
      is_popular: item.is_popular,
      is_visible: item.is_visible,
      sort_order: item.sort_order,
    };

    if (existingId) {
      row.id = existingId;
    }

    dishesToUpsert.push(row);
  }

  // Chunk batches (100 items per request) to prevent payload overruns
  const BATCH_SIZE = 100;
  let dishesProcessed = 0;

  for (let i = 0; i < dishesToUpsert.length; i += BATCH_SIZE) {
    const chunk = dishesToUpsert.slice(i, i + BATCH_SIZE);
    const { error: batchError } = await supabase
      .from("menu_items")
      .upsert(chunk, { onConflict: "id" });

    assertNoError(`Upserting dishes batch [${i + 1} - ${i + chunk.length}]`, batchError);
    dishesProcessed += chunk.length;
    process.stdout.write(`  Processed ${dishesProcessed}/${dishesToUpsert.length} dishes...\r`);
  }
  console.log(`\n✓ Successfully processed ${dishesProcessed} menu dishes.`);

  // 4. Insert / Upsert Gallery Photos (stable key: image_url)
  console.log("\nPhase 3: Seeding gallery photos...");

  const { data: existingGallery, error: fetchGalleryError } = await supabase
    .from("gallery_images")
    .select("id, image_url");

  assertNoError("Fetch existing gallery images for idempotency", fetchGalleryError);

  const existingGalleryMap = new Map<string, string>(); // image_url -> UUID
  if (existingGallery) {
    for (const g of existingGallery) {
      existingGalleryMap.set(g.image_url.trim(), g.id);
    }
  }

  interface GalleryRow {
    id?: string;
    image_url: string;
    alt_text: string;
    caption: string;
    category: string | null;
    is_visible: boolean;
    sort_order: number;
  }

  const galleryRowsToUpsert: GalleryRow[] = [];

  for (let idx = 0; idx < uniqueGalleryItems.length; idx++) {
    const img = uniqueGalleryItems[idx];
    const existingId = existingGalleryMap.get(img.src);

    const row: GalleryRow = {
      image_url: img.src,
      alt_text: img.alt || "",
      caption: img.title || "",
      category: img.category || null,
      is_visible: true,
      sort_order: idx,
    };

    if (existingId) {
      row.id = existingId;
    }

    galleryRowsToUpsert.push(row);
  }

  const { error: galleryUpsertError } = await supabase
    .from("gallery_images")
    .upsert(galleryRowsToUpsert, { onConflict: "id" });

  assertNoError("Upserting unique gallery images", galleryUpsertError);
  console.log(`✓ Successfully processed ${galleryRowsToUpsert.length} gallery images.`);

  // 5. Query the database and verify REAL counts against source data
  console.log("\nPhase 4: Verifying database counts...");

  const { count: realCatCount, error: countCatErr } = await supabase
    .from("menu_categories")
    .select("*", { count: "exact", head: true });
  assertNoError("Query database category count", countCatErr);

  const { count: realDishCount, error: countDishErr } = await supabase
    .from("menu_items")
    .select("*", { count: "exact", head: true });
  assertNoError("Query database dish count", countDishErr);

  const { count: realPopularCount, error: countPopErr } = await supabase
    .from("menu_items")
    .select("*", { count: "exact", head: true })
    .eq("is_popular", true);
  assertNoError("Query database popular dish count", countPopErr);

  const { count: realGalleryCount, error: countGalErr } = await supabase
    .from("gallery_images")
    .select("*", { count: "exact", head: true });
  assertNoError("Query database gallery count", countGalErr);

  console.log("\n==========================================");
  console.log("DATABASE VERIFICATION AUDIT");
  console.log("==========================================");
  console.log(
    `Categories:     Source = ${sourceCategoryCount.toString().padEnd(4)} | Database = ${String(realCatCount).padEnd(4)} | Match: ${realCatCount === sourceCategoryCount ? "PASS" : "FAIL"}`
  );
  console.log(
    `Dishes:         Source = ${sourceDishCount.toString().padEnd(4)} | Database = ${String(realDishCount).padEnd(4)} | Match: ${realDishCount === sourceDishCount ? "PASS" : "FAIL"}`
  );
  console.log(
    `Popular dishes: Source = ${sourcePopularCount.toString().padEnd(4)} | Database = ${String(realPopularCount).padEnd(4)} | Match: ${realPopularCount === sourcePopularCount ? "PASS" : "FAIL"}`
  );
  console.log(
    `Gallery images: Source = ${sourceGalleryCount.toString().padEnd(4)} | Database = ${String(realGalleryCount).padEnd(4)} | Match: ${realGalleryCount === sourceGalleryCount ? "PASS" : "FAIL"}`
  );
  console.log("==========================================");

  let hasDiscrepancy = false;

  if (realCatCount !== sourceCategoryCount) {
    console.error(`[COUNT MISMATCH] Expected ${sourceCategoryCount} categories, found ${realCatCount} in database.`);
    hasDiscrepancy = true;
  }

  if (realDishCount !== sourceDishCount) {
    console.error(`[COUNT MISMATCH] Expected ${sourceDishCount} dishes, found ${realDishCount} in database.`);
    hasDiscrepancy = true;
  }

  if (realPopularCount !== sourcePopularCount) {
    console.error(`[COUNT MISMATCH] Expected ${sourcePopularCount} popular dishes, found ${realPopularCount} in database.`);
    hasDiscrepancy = true;
  }

  if (realGalleryCount !== sourceGalleryCount) {
    console.error(`[COUNT MISMATCH] Expected ${sourceGalleryCount} unique gallery images, found ${realGalleryCount} in database.`);
    hasDiscrepancy = true;
  }

  if (hasDiscrepancy) {
    console.error("\n[FATAL] Seeding aborted with count discrepancies.");
    process.exit(1);
  }

  console.log("\n✓ All database counts match source data with 100% precision!");
  console.log("✓ Seeding completed successfully.");
}

runSeed().catch((unexpectedError) => {
  console.error("[FATAL] Unexpected error during seed execution:", unexpectedError);
  process.exit(1);
});
