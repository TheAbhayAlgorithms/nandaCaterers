import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CuisineHub } from "@/components/menu/CuisineHub";

export const metadata: Metadata = {
  title: "Food Menus | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Explore Nanda Caterers culinary repertoire. 13 authentic pure vegetarian categories featuring Gujarati, Punjabi, South Indian, sweets, Chinese, Italian, Continental, and Thai.",
};

export default function MenuHubPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      {/* Compact Hero with breadcrumbs and torn bottom edge */}
      <PageHero
        title="Our Food Menu"
        breadcrumb="Menu"
        badge="100% Pure Vegetarian"
        imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Segmented Control & Cuisine Cards */}
      <CuisineHub />
    </div>
  );
}
