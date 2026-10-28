import { createClient } from "@supabase/supabase-js";
import { menuCategories } from "../data/menu";
import { galleryImages } from "../data/gallery";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  console.error("Please set them in .env or run with: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npm run seed");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log("Starting Supabase database seed...");

  // 1. Seed Menu Categories
  console.log(`Seeding ${menuCategories.length} menu categories...`);
  const categoryMap = new Map<string, string>(); // slug -> category_id

  for (let i = 0; i < menuCategories.length; i++) {
    const cat = menuCategories[i];
    const { data, error } = await supabase
      .from("menu_categories")
      .upsert(
        {
          slug: cat.slug,
          name: cat.title,
          sort_order: i,
          is_visible: true,
        },
        { onConflict: "slug" }
      )
      .select("id, slug")
      .single();

    if (error) {
      console.error(`Failed to seed category '${cat.title}':`, error.message);
      continue;
    }

    if (data) {
      categoryMap.set(data.slug, data.id);
    }
  }

  // 2. Seed Menu Items
  let totalDishes = 0;
  for (let cIdx = 0; cIdx < menuCategories.length; cIdx++) {
    const cat = menuCategories[cIdx];
    const categoryId = categoryMap.get(cat.slug);

    if (!categoryId) {
      console.warn(`Skipping dishes for category '${cat.title}', no ID found.`);
      continue;
    }

    // Flatten dishes across all sections in the category
    let dishOrder = 0;
    const itemsToInsert = [];

    for (const section of cat.sections) {
      for (const dish of section.dishes) {
        itemsToInsert.push({
          category_id: categoryId,
          name: dish.name,
          description: dish.description || null,
          type: dish.type || null,
          image_url: dish.image || null,
          is_popular: Boolean(dish.isPopular),
          is_visible: true,
          sort_order: dishOrder++,
        });
      }
    }

    if (itemsToInsert.length > 0) {
      const { error: itemsError } = await supabase
        .from("menu_items")
        .insert(itemsToInsert);

      if (itemsError) {
        console.error(`Error inserting dishes for ${cat.title}:`, itemsError.message);
      } else {
        totalDishes += itemsToInsert.length;
        console.log(`✓ Inserted ${itemsToInsert.length} dishes for '${cat.title}'`);
      }
    }
  }

  // 3. Seed Gallery Images
  console.log(`Seeding ${galleryImages.length} gallery images...`);
  const galleryRows = galleryImages.map((img, idx) => ({
    image_url: img.src,
    alt_text: img.alt || "",
    caption: img.title || "",
    category: img.category || null,
    is_visible: true,
    sort_order: idx,
  }));

  const { error: galleryError } = await supabase
    .from("gallery_images")
    .insert(galleryRows);

  if (galleryError) {
    console.error("Error inserting gallery images:", galleryError.message);
  } else {
    console.log(`✓ Inserted ${galleryRows.length} gallery images.`);
  }

  console.log("\n==========================================");
  console.log("Supabase seeding completed!");
  console.log(`Categories: ${categoryMap.size}`);
  console.log(`Dishes: ${totalDishes}`);
  console.log(`Gallery photos: ${galleryImages.length}`);
  console.log("==========================================");
}

seed().catch((err) => {
  console.error("Unexpected seed error:", err);
  process.exit(1);
});

