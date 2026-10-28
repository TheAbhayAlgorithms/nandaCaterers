"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Maximize2, ChevronDown } from "lucide-react";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const FILTER_CHIPS = ["All", "Weddings", "Corporate", "Decor", "Food"] as const;
type FilterChip = (typeof FILTER_CHIPS)[number];

export function GalleryGrid({ images = galleryImages }: { images?: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterChip>("All");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

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

              {/* Gradient overlay for bottom caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Category chip top left */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-night/75 backdrop-blur-md text-white border border-white/10">
                  {img.category}
                </span>
              </div>

              {/* Zoom icon top right */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Caption at bottom */}
              <div className="absolute bottom-3 inset-x-3 text-left">
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

      {/* "Load more" button for the next 12 per Section 6.7 */}
      {hasMore && (
        <div className="flex justify-center pt-6">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleLoadMore}
            className="flex items-center gap-2"
          >
            <span>Load More Photos</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
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
