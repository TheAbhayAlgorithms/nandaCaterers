"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Utensils, Sparkles, Flame, ShieldCheck } from "lucide-react";
import { MenuCategory, menuCategories, Dish } from "@/data/menu";
import { DishItem } from "./DishItem";
import { MenuSearch } from "./MenuSearch";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { Button } from "@/components/ui/Button";

interface CategoryViewProps {
  category: MenuCategory;
}

type FilterTag = "all" | "jain" | "live" | "popular";

export function CategoryView({ category }: CategoryViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterTag>("all");

  // Prev / Next category navigation
  const currentIndex = menuCategories.findIndex((c) => c.slug === category.slug);
  const prevCategory =
    currentIndex > 0 ? menuCategories[currentIndex - 1] : menuCategories[menuCategories.length - 1];
  const nextCategory =
    currentIndex < menuCategories.length - 1 ? menuCategories[currentIndex + 1] : menuCategories[0];

  // Filter sections by search query and dietary tags
  const filteredSections = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return category.sections
      .map((sec) => {
        const matchingDishes = sec.dishes.filter((dish: Dish) => {
          // Dietary tag filter
          if (activeFilter === "jain" && !dish.isJainAvailable) return false;
          if (activeFilter === "live" && !dish.isLiveCounter) return false;
          if (activeFilter === "popular" && !dish.isPopular) return false;

          // Search query filter
          if (!query) return true;
          const searchSpace = `${dish.name} ${dish.description || ""}`.toLowerCase();
          return searchSpace.includes(query);
        });

        return {
          ...sec,
          dishes: matchingDishes,
        };
      })
      .filter((sec) => sec.dishes.length > 0);
  }, [category.sections, searchQuery, activeFilter]);

  const totalFilteredDishes = filteredSections.reduce((acc, sec) => acc + sec.dishes.length, 0);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search & Dietary Filter Strip */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <MenuSearch value={searchQuery} onChange={setSearchQuery} />

        {/* Dietary Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === "all"
                ? "bg-maroon text-cream shadow-xs"
                : "bg-cream text-charcoal/70 hover:bg-ivory border border-turmeric/30"
            }`}
          >
            All Items
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter("jain")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeFilter === "jain"
                ? "bg-emerald-700 text-white shadow-xs"
                : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Jain Available</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter("live")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeFilter === "live"
                ? "bg-amber-700 text-white shadow-xs"
                : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>Live Counters</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter("popular")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeFilter === "popular"
                ? "bg-rose-700 text-white shadow-xs"
                : "bg-rose-50 text-rose-900 hover:bg-rose-100 border border-rose-300"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Chef&apos;s Specials</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredSections.length === 0 ? (
        <div className="text-center py-20 bg-ivory rounded-3xl border border-charcoal/10 my-8 space-y-4">
          <Utensils className="w-12 h-12 text-charcoal/30 mx-auto" />
          <h3 className="font-heading font-bold text-2xl text-maroon">
            No dishes found
          </h3>
          <p className="text-charcoal/70 text-sm max-w-sm mx-auto">
            We couldn&apos;t find any item matching your current search or dietary filters.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        /* Sections & Dishes Display */
        <div className="space-y-16 mt-10">
          {filteredSections.map((sec) => (
            <div key={sec.title} className="bg-ivory rounded-3xl p-6 sm:p-8 md:p-10 border border-charcoal/10 shadow-sm">
              {/* Sub-section Heading with Ornamental Divider */}
              <div className="text-center mb-8">
                <span className="font-accent text-2xl text-saffron font-semibold">
                  Freshly Prepared
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-maroon mt-1">
                  {sec.title}
                </h3>
                <OrnamentalDivider theme="gold" className="my-2.5 mx-auto" />
                <span className="text-xs text-charcoal/60 uppercase tracking-widest font-semibold">
                  {sec.dishes.length} items available
                </span>
              </div>

              {/* Responsive multi-column dish list */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {sec.dishes.map((dish) => (
                  <DishItem
                    key={dish.name}
                    name={dish.name}
                    dish={dish}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* End of Category Bottom Band */}
      <div className="mt-20 rounded-3xl bg-maroon text-cream p-8 sm:p-12 text-center relative overflow-hidden shadow-warm">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="font-accent text-2xl text-turmeric font-semibold block">
            Customised Banquet Hospitality
          </span>
          <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Planning an event? Build your menu and get a quote
          </h3>
          <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
            Select your preferred items across our cuisines or request custom regional preparations. We offer full tasting sessions and transparent event quotes.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <Button href="/quote" variant="primary" size="lg">
              <span>Build Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Prev / Next Category Links */}
      <div className="flex items-center justify-between border-t border-charcoal/15 mt-12 pt-8 text-sm">
        <Link
          href={`/menu/${prevCategory.slug}`}
          className="group flex items-center gap-2 font-semibold text-charcoal hover:text-maroon transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <div>
            <span className="text-[10px] uppercase text-charcoal/50 block font-normal">
              Previous Category
            </span>
            <span>{prevCategory.title}</span>
          </div>
        </Link>

        <Link
          href={`/menu/${nextCategory.slug}`}
          className="group flex items-center gap-2 font-semibold text-charcoal hover:text-maroon transition-colors text-right"
        >
          <div>
            <span className="text-[10px] uppercase text-charcoal/50 block font-normal">
              Next Category
            </span>
            <span>{nextCategory.title}</span>
          </div>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
