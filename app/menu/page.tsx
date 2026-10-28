import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CuisineHub } from "@/components/menu/CuisineHub";
import { getPublicMenuCategories } from "@/lib/supabase/data";

export const metadata: Metadata = {
  title: "Food Menus | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Explore Nanda Caterers master catering repertoire. 8 comprehensive categories with 635+ dishes including Beverages, Soups, Starters, Live Counters, Salads, Main Course, Sweets, and Artisanal Ice Creams.",
};

export default async function MenuHubPage() {
  const categories = await getPublicMenuCategories();

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Compact Hero with breadcrumbs and torn bottom edge */}
      <PageHero
        title="Our Food Menu"
        breadcrumb="Menu"
        imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Segmented Control & Cuisine Cards */}
      <CuisineHub categories={categories} />
    </div>
  );
}
