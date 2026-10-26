"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import { MenuCategory, menuCategories } from "@/data/menu";
import { TornEdge } from "@/components/shape/TornEdge";

interface CategoryHeroProps {
  category: MenuCategory;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.querySelector(
        `[data-active="true"]`
      ) as HTMLElement | null;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [category.slug]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const totalDishes = category.sections.reduce(
    (acc, sec) => acc + sec.dishes.length,
    0
  );

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

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 text-center flex flex-col items-center">
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

        {/* Horizontal Scrollable Pill Bar for Cuisines */}
        <div className="relative w-full max-w-5xl mt-6 px-1 sm:px-4">
          {/* Desktop Left/Right Navigation Buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-night/85 hover:bg-night text-white/80 hover:text-white border border-white/20 items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Scroll cuisines left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-night/85 hover:bg-night text-white/80 hover:text-white border border-white/20 items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Scroll cuisines right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Left/Right Fade Edges on Mobile */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-night/70 to-transparent z-10 md:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-night/70 to-transparent z-10 md:hidden" />

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1.5 px-4 md:px-6"
            style={{ scrollbarWidth: "none" }}
          >
            {menuCategories.map((c) => {
              const isActive = c.slug === category.slug;
              const count = c.sections.reduce(
                (acc, s) => acc + s.dishes.length,
                0
              );
              return (
                <Link
                  key={c.slug}
                  href={`/menu/${c.slug}`}
                  data-active={isActive ? "true" : undefined}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-accent text-white shadow-md border border-accent ring-2 ring-accent/30 font-semibold scale-[1.02]"
                      : "bg-white/10 hover:bg-white/20 text-white/85 hover:text-white border border-white/15 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {isActive && <Utensils className="w-3 h-3 text-white" />}
                  <span>{c.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-white/25 text-white font-bold"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Torn-paper bottom edge per Section 5.3 & 6 */}
      <TornEdge position="bottom" color="var(--cream)" variant={2} />
    </section>
  );
}
