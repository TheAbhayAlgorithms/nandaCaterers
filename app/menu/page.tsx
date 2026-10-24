import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Utensils } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { menuCategories } from "@/data/menu";
import { VegBadge } from "@/components/menu/VegBadge";

export const metadata: Metadata = {
  title: "Food Menus | 100% Pure Veg Cuisines",
  description:
    "Explore Nanda Caterers full culinary repertoire. 13 authentic categories featuring North Indian, Gujarati, South Indian, sweets, Chinese, Italian, Continental, and Thai.",
};

export default function MenuHubPage() {
  const indianCategories = menuCategories.filter((c) => c.group === "Indian");
  const globalCategories = menuCategories.filter((c) => c.group === "International");

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Hero */}
      <PageHero
        title="Our Food Menu"
        eyebrow="100% Pure Vegetarian Banquets"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Menu" },
        ]}
        subtitle="Browse over 500 hand-crafted delicacies across 13 diverse culinary traditions. Click any category to explore dishes and build your custom quotation."
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Top Veg Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-ivory border border-turmeric/30 shadow-sm">
          <div className="flex items-center gap-3">
            <VegBadge />
            <p className="text-xs sm:text-sm text-charcoal/75">
              Every dish is strictly 100% vegetarian, prepared in segregated, hygiene-certified kitchens.
            </p>
          </div>
          <Link
            href="/contact#quote-form"
            className="text-xs font-bold text-maroon hover:text-saffron uppercase tracking-wider underline shrink-0"
          >
            Custom Menu Consultation →
          </Link>
        </div>

        {/* Group 1: Indian Food (8 cards) */}
        <section className="space-y-8">
          <div className="border-b border-charcoal/10 pb-4 flex items-center justify-between">
            <div>
              <span className="font-accent text-2xl text-saffron font-semibold block">
                Heritage & Tradition
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-maroon mt-1">
                Indian Food
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60 bg-cream px-3 py-1 rounded-full border border-charcoal/10">
              8 Categories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {indianCategories.map((category) => {
              const dishCount = category.sections.reduce((acc, s) => acc + s.dishes.length, 0);

              return (
                <Link
                  key={category.slug}
                  href={`/menu/${category.slug}`}
                  className="group relative rounded-3xl overflow-hidden bg-ivory border border-charcoal/10 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-white text-xs font-semibold">
                      {dishCount} Dishes
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-maroon group-hover:text-saffron transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 mt-1 line-clamp-2 leading-relaxed">
                        {category.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-charcoal/5 mt-4 flex items-center justify-between text-xs font-semibold text-saffron group-hover:text-maroon transition-colors">
                      <span>View Full Menu</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Group 2: Global Cuisines (5 cards) */}
        <section className="space-y-8">
          <div className="border-b border-charcoal/10 pb-4 flex items-center justify-between">
            <div>
              <span className="font-accent text-2xl text-saffron font-semibold block">
                Contemporary International
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-maroon mt-1">
                Global Cuisines
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60 bg-cream px-3 py-1 rounded-full border border-charcoal/10">
              5 Categories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {globalCategories.map((category) => {
              const dishCount = category.sections.reduce((acc, s) => acc + s.dishes.length, 0);

              return (
                <Link
                  key={category.slug}
                  href={`/menu/${category.slug}`}
                  className="group relative rounded-3xl overflow-hidden bg-ivory border border-charcoal/10 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-white text-xs font-semibold">
                      {dishCount} Dishes
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-maroon group-hover:text-saffron transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 mt-1 line-clamp-2 leading-relaxed">
                        {category.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-charcoal/5 mt-4 flex items-center justify-between text-xs font-semibold text-saffron group-hover:text-maroon transition-colors">
                      <span>View Full Menu</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
