"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/cn";

const FILTER_CHIPS = ["All", "Weddings", "Corporate", "Decor", "Food"] as const;
type FilterChip = (typeof FILTER_CHIPS)[number];

export function GalleryGrid({ images = galleryImages }: { images?: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterChip>("All");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [activeCategory, images]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleFilterChange = (cat: FilterChip) => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  // Infinite scroll: auto-load more photos as user scrolls down
  useEffect(() => {
    if (!hasMore) return;

    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 12, filteredImages.length));
        }
      },
      { rootMargin: "350px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, filteredImages.length]);

  return (
    <div className="space-y-10">
      {/* Filter Chips per Section 6.7 */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
        {FILTER_CHIPS.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleFilterChange(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer select-none",
                isActive
                  ? "bg-accent text-white shadow-xs"
                  : "bg-peach/70 text-ink/70 hover:bg-peach hover:text-ink border border-accent/20"
              )}
            >
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Uniform 3/2/1 Columns Grid per Section 6.7 & 8 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((img) => {
          const globalIdx = images.findIndex((item) => item.id === img.id);

          return (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(globalIdx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream cursor-pointer shadow-soft hover:shadow-card transition-all duration-300 border border-ink/10 hover:-translate-y-1"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Darkening hover overlay: turns blackish on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 z-[1]" />

              {/* Gradient overlay for bottom caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity z-[2]" />

              {/* Category chip top left */}
              <div className="absolute top-3 left-3 z-[3]">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-night/75 backdrop-blur-md text-white border border-white/10">
                  {img.category}
                </span>
              </div>

              {/* Center 'Click Me' text on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="px-4 py-2 rounded-full bg-night/85 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/20 shadow-md transform scale-95 group-hover:scale-100 transition-all duration-300">
                  Click Me
                </span>
              </div>

              {/* Caption at bottom */}
              <div className="absolute bottom-3 inset-x-3 text-left z-[3]">
                <h3 className="font-heading font-semibold text-sm text-white group-hover:text-accent transition-colors line-clamp-1">
                  {img.title}
                </h3>
                <span className="text-[11px] text-white/70 line-clamp-1 mt-0.5">
                  {img.alt}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Infinite Scroll Sentinel: triggers automatic loading as user scrolls down */}
      {hasMore && (
        <div ref={sentinelRef} className="flex justify-center py-8 w-full">
          <div className="flex items-center gap-2 text-xs text-ink/60 font-medium">
            <span className="w-4 h-4 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            <span>Loading more photos...</span>
          </div>
        </div>
      )}

      {/* Lightbox component */}
      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
