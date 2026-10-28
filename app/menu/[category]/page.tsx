₹2 import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { menuCategories, getMenuCategory } from "@/data/menu";
import { CategoryHero } from "@/components/menu/CategoryHero";
import { CategoryView } from "@/components/menu/CategoryView";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return menuCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getMenuCategory(slug);

  if (!category) {
    return {
      title: "Menu Category Not Found | Nanda Caterers – Wedding Caterers in Mumbai",
    };
  }

  return {
    title: `${category.title} Food Menu | Nanda Caterers – Wedding Caterers in Mumbai`,
    description: `${category.tagline} Authentic ${category.title} catering menu by Nanda Caterers Mumbai.`,
    openGraph: {
      title: `${category.title} Menu | Nanda Caterers Mumbai`,
      description: category.tagline,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: `${category.title} Menu - Nanda Caterers`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getMenuCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen">
      {/* Compact hero with photo, dish count, and All Cuisines dropdown */}
      <CategoryHero category={category} />

      {/* Sub-section tabs, Search input, paginated dish grid, category switcher, and CTA strip */}
      <CategoryView category={category} />
    </main>
  );
}
