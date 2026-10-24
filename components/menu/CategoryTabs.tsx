"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/cn";

interface CategoryTabsProps {
  activeSlug: string;
}

export function CategoryTabs({ activeSlug }: CategoryTabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll active tab into view on load
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.querySelector(
        `[data-slug="${activeSlug}"]`
      ) as HTMLElement | null;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSlug]);

  return (
    <div className="sticky top-[72px] z-30 bg-cream/95 backdrop-blur-md border-b border-turmeric/25 py-3 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Horizontal scroll container with scroll snap */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 snap-x"
        >
          {menuCategories.map((cat) => {
            const isActive = cat.slug === activeSlug;

            return (
              <Link
                key={cat.slug}
                href={`/menu/${cat.slug}`}
                data-slug={cat.slug}
                className={cn(
                  "relative shrink-0 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-colors snap-center select-none",
                  isActive
                    ? "text-charcoal"
                    : "text-charcoal/70 hover:text-maroon hover:bg-ivory"
                )}
              >
                {/* Sliding highlight pill using layoutId */}
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-gold-gradient shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
