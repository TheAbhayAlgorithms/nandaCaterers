"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Utensils } from "lucide-react";
import { MenuCategory, menuCategories } from "@/data/menu";
import { TornEdge } from "@/components/shape/TornEdge";

interface CategoryHeroProps {
  category: MenuCategory;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalDishes = category.sections.reduce(
    (acc, sec) => acc + sec.dishes.length,
    0
  );

  return (
    <section className="relative w-full overflow-hidden bg-night text-white flex flex-col justify-center items-center min-h-[280px] sm:min-h-[320px] pt-20 pb-12">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={category.image}
          alt={category.title}
          fill
          priority
          sizes="100vw"
          className="object-cover filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-night/75 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2 text-accent">/</span>
          <Link href="/menu" className="hover:text-accent transition-colors">
            Menu
          </Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-white/90">{category.title}</span>
        </nav>

        {/* 100% Vegetarian Leaf Badge & Dish Count */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-leaf/90 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>100% Vegetarian</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
            {totalDishes} Dishes
          </span>
        </div>

        {/* Centred H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          {category.title}
        </h1>

        {/* Small "All Cuisines" dropdown in the hero per Section 6.5 */}
        <div className="relative mt-4">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all cursor-pointer"
          >
            <Utensils className="w-3.5 h-3.5 text-accent" />
            <span>All Cuisines ({menuCategories.length})</span>
            <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 max-h-72 overflow-y-auto bg-paper text-ink rounded-2xl shadow-warm border border-ink/10 py-2 z-50 text-left">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/40">
                Switch Cuisine
              </div>
              {menuCategories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    router.push(`/menu/${c.slug}`);
                  }}
                  className={`w-full px-3 py-2 text-xs font-medium text-left hover:bg-peach/60 transition-colors flex items-center justify-between cursor-pointer ${
                    c.slug === category.slug
                      ? "text-accent font-bold bg-peach/30"
                      : "text-ink/80"
                  }`}
                >
                  <span>{c.title}</span>
                  <span className="text-[10px] text-ink/40">
                    {c.sections.reduce((a, s) => a + s.dishes.length, 0)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Torn-paper bottom edge per Section 5.3 & 6 */}
      <TornEdge position="bottom" color="var(--cream)" variant={2} />
    </section>
  );
}
