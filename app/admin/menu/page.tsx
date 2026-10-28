import React from "react";
import { MenuManager } from "@/components/admin/MenuManager";
import { getAdminCategories, getAdminDishes } from "../actions";
import { menuCategories } from "@/data/menu";

export default async function AdminMenuPage() {
  let categories: any[] = [];
  let dishes: any[] = [];

  try {
    categories = await getAdminCategories();
    dishes = await getAdminDishes();
  } catch (err) {
    console.warn("Could not load menu items from Supabase, rendering empty state or fallback:", err);
  }

  // If database has no categories yet, provide default fallback structure from data/menu.ts
  if (categories.length === 0) {
    categories = menuCategories.map((c, i) => ({
      id: c.slug,
      slug: c.slug,
      name: c.title,
      sort_order: i,
      is_visible: true,
    }));
  }

  return (
    <div className="space-y-6">
      <MenuManager initialCategories={categories} initialDishes={dishes} />
    </div>
  );
}

