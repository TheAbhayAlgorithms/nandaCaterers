import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menuCategories, getMenuCategory } from "@/data/menu";
import { CategoryTabs } from "@/components/menu/CategoryTabs";
import { CategoryView } from "@/components/menu/CategoryView";
import { VegBadge } from "@/components/menu/VegBadge";
import { MandalaWatermark } from "@/components/ui/MandalaWatermark";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return menuCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getMenuCategory(slug);

  if (!category) {
    return {
      title: "Menu Category Not Found | Nanda Caterers",
    };
  }

  return {
    title: `${category.title} Food Menu`,
    description: `${category.tagline} - Browse our authentic 100% pure vegetarian ${category.title} catering menu by Nanda Caterers Mumbai.`,
    openGraph: {
      title: `${category.title} Menu | Nanda Caterers Mumbai`,
      description: category.tagline,
      images: [{ url: category.image, width: 1200, height: 630, alt: `${category.title} Menu` }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getMenuCategory(slug);

  if (!category) {
    notFound();
  }

  const totalDishes = category.sections.reduce((acc, s) => acc + s.dishes.length, 0);

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Category Hero Banner with Dark Overlay and Category Image */}
      <section className="relative overflow-hidden bg-maroon-dark text-cream pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-maroon-dark/80 to-maroon/60" />
        </div>

        <MandalaWatermark
          size={500}
          opacity={0.05}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="relative max-w-4xl mx-auto px-4 z-10 space-y-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-cream/70">
              <li>
                <Link href="/" className="hover:text-turmeric transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-turmeric">/</li>
              <li>
                <Link href="/menu" className="hover:text-turmeric transition-colors">
                  Menu
                </Link>
              </li>
              <li className="text-turmeric">/</li>
              <li className="text-turmeric font-semibold">{category.title}</li>
            </ol>
          </nav>

          {/* 100% Vegetarian Badge */}
          <div className="flex items-center justify-center gap-3">
            <VegBadge />
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold">
              {totalDishes} Total Dishes
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            {category.title} Menu
          </h1>

          <OrnamentalDivider theme="white" className="my-2" />

          <p className="text-base sm:text-lg text-cream/85 max-w-2xl mx-auto leading-relaxed">
            {category.tagline}
          </p>
        </div>
      </section>

      {/* Sticky Category Tabs across all 13 cuisines */}
      <CategoryTabs activeSlug={category.slug} />

      {/* Category Dishes, Live Search & Actions */}
      <CategoryView category={category} />
    </div>
  );
}
