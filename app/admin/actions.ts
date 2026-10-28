"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Ensure current user is authenticated
async function requireAuth() {
  const supabase = await createClient();
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized: Please sign in as an admin.");
  }

  return { supabase, user };
}

// ============================================================================
// AUTH ACTIONS
// ============================================================================

export async function loginAdminAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, error: "Please enter both email and password." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { success: false, error: "Supabase connection is not configured." };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  redirect("/admin");
}

export async function logoutAdminAction() {
  const supabase = await createClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  redirect("/admin/login");
}

// ============================================================================
// DASHBOARD METRICS
// ============================================================================

export async function getDashboardStats() {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) return { totalDishes: 0, popularDishes: 0, totalPhotos: 0, totalCategories: 0 };

  const [{ count: dishesCount }, { count: popularCount }, { count: photosCount }, { count: catsCount }] =
    await Promise.all([
      supabase.from("menu_items").select("*", { count: "exact", head: true }),
      supabase.from("menu_items").select("*", { count: "exact", head: true }).eq("is_popular", true),
      supabase.from("gallery_images").select("*", { count: "exact", head: true }),
      supabase.from("menu_categories").select("*", { count: "exact", head: true }),
    ]);

  return {
    totalDishes: dishesCount || 0,
    popularDishes: popularCount || 0,
    totalPhotos: photosCount || 0,
    totalCategories: catsCount || 0,
  };
}

// ============================================================================
// CATEGORY ACTIONS
// ============================================================================

export async function getAdminCategories() {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("menu_categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(error.message);
  return data || [];
}

export async function addCategoryAction(name: string, slug?: string) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const finalSlug = slug?.trim() || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // Get max sort_order
  const { data: lastItem } = await supabase
    .from("menu_categories")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .single();

  const nextOrder = (lastItem?.sort_order ?? -1) + 1;

  const { data, error } = await supabase
    .from("menu_categories")
    .insert({
      name: name.trim(),
      slug: finalSlug,
      sort_order: nextOrder,
      is_visible: true,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return data;
}

export async function updateCategoryAction(id: string, updates: { name?: string; slug?: string; is_visible?: boolean; sort_order?: number }) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("menu_categories")
    .update(updates)
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return { success: true };
}

export async function deleteCategoryAction(id: string) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("menu_categories")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return { success: true };
}

// ============================================================================
// DISH ACTIONS
// ============================================================================

export async function getAdminDishes(categoryId?: string) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) return [];

  let query = supabase
    .from("menu_items")
    .select("*, menu_categories(name, slug)")
    .order("sort_order", { ascending: true });

  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data || [];
}

export async function addDishAction(payload: {
  category_id: string;
  name: string;
  description?: string;
  type?: "veg" | "non-veg" | null;
  image_url?: string | null;
  is_popular?: boolean;
}) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { data: lastItem } = await supabase
    .from("menu_items")
    .select("sort_order")
    .eq("category_id", payload.category_id)
    .order("sort_order", { ascending: false })
    .limit(1)
    .single();

  const nextOrder = (lastItem?.sort_order ?? -1) + 1;

  const { data, error } = await supabase
    .from("menu_items")
    .insert({
      category_id: payload.category_id,
      name: payload.name.trim(),
      description: payload.description?.trim() || null,
      type: payload.type || null,
      image_url: payload.image_url || null,
      is_popular: Boolean(payload.is_popular),
      is_visible: true,
      sort_order: nextOrder,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return data;
}

export async function updateDishAction(
  id: string,
  updates: {
    category_id?: string;
    name?: string;
    description?: string | null;
    type?: "veg" | "non-veg" | null;
    image_url?: string | null;
    is_popular?: boolean;
    is_visible?: boolean;
    sort_order?: number;
  }
) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("menu_items")
    .update(updates)
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return { success: true };
}

export async function toggleDishPopularAction(id: string, is_popular: boolean) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("menu_items")
    .update({ is_popular })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return { success: true };
}

export async function toggleDishVisibilityAction(id: string, is_visible: boolean) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("menu_items")
    .update({ is_visible })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return { success: true };
}

export async function deleteDishAction(id: string) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("menu_items")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/menu");
  revalidatePath("/");
  return { success: true };
}

// ============================================================================
// GALLERY ACTIONS
// ============================================================================

export async function getAdminGalleryImages() {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(error.message);
  return data || [];
}

export async function addGalleryImageAction(payload: {
  image_url: string;
  alt_text?: string;
  caption?: string;
  category?: string | null;
}) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { data: lastImg } = await supabase
    .from("gallery_images")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .single();

  const nextOrder = (lastImg?.sort_order ?? -1) + 1;

  const { data, error } = await supabase
    .from("gallery_images")
    .insert({
      image_url: payload.image_url,
      alt_text: payload.alt_text?.trim() || "",
      caption: payload.caption?.trim() || "",
      category: payload.category || null,
      is_visible: true,
      sort_order: nextOrder,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  revalidatePath("/gallery");
  revalidatePath("/");
  return data;
}

export async function updateGalleryImageAction(
  id: string,
  updates: {
    alt_text?: string;
    caption?: string;
    category?: string | null;
    is_visible?: boolean;
    sort_order?: number;
  }
) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { error } = await supabase
    .from("gallery_images")
    .update(updates)
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/gallery");
  revalidatePath("/");
  return { success: true };
}

export async function deleteGalleryImageAction(id: string, imageUrl?: string) {
  await requireAuth();
  const supabase = await createClient();
  if (!supabase) throw new Error("Supabase not configured");

  // If image URL is in storage bucket, attempt to delete from storage
  if (imageUrl && imageUrl.includes("/storage/v1/object/public/gallery/")) {
    const filename = imageUrl.split("/").pop();
    if (filename) {
      await supabase.storage.from("gallery").remove([filename]);
    }
  }

  const { error } = await supabase
    .from("gallery_images")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/gallery");
  revalidatePath("/");
  return { success: true };
}

