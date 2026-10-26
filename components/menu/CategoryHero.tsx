"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils } from "lucide-react";
import { MenuCategory, menuCategories } from "@/data/menu";
import { TornEdge } from "@/components/shape/TornEdge";

interface CategoryHeroProps {
  category: MenuCategory;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  // Duplicate categories to create a seamless infinite loop
  const marqueeCategories = [...menuCategories, ...menuCategories];

  return (
    <section className="relative w-full overflow-hidden bg-night text-white flex flex-col justify-center items-center min-h-[300px] sm:min-h-[340px] pt-20 pb-14">
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

        {/* Centred H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          {category.title}
        </h1>

        {category.tagline && (
          <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-2xl mx-auto line-clamp-2">
            {category.tagline}
          </p>
        )}
      </div>

      {/* Full-width edge-to-edge Marquee Carousel (slow auto-scroll right to left, stops on hover) */}
      <div className="relative w-full overflow-hidden mt-6 py-2 cuisine-marquee-container group select-none">
        {/* Soft edge gradient fades at both ends of the screen */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-night via-night/70 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-night via-night/70 to-transparent z-10" />

        {/* Continuous track */}
        <div className="animate-cuisine-marquee flex items-center gap-3">
          {marqueeCategories.map((c, index) => {
            const isActive = c.slug === category.slug;
            const count = c.sections.reduce(
              (acc, s) => acc + s.dishes.length,
              0
            );

            return (
              <Link
                key={`${c.slug}-${index}`}
                href={`/menu/${c.slug}`}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-accent text-white shadow-warm border border-accent ring-2 ring-accent/30 font-semibold scale-[1.03]"
                    : "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 backdrop-blur-md hover:border-white/35 hover:scale-105 active:scale-95"
                }`}
              >
                {isActive && <Utensils className="w-3.5 h-3.5 text-white" />}
                <span className="whitespace-nowrap">{c.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                    isActive
                      ? "bg-white/25 text-white font-bold"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Torn-paper bottom edge per Section 5.3 & 6 */}
      <TornEdge position="bottom" color="var(--cream)" variant={2} />
    </section>
  );
}
