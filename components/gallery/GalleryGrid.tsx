"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

const CATEGORIES = ["All", "Weddings", "Buffets", "Live Counters", "Desserts", "Decorations"] as const;

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const count =
            cat === "All"
              ? galleryImages.length
              : galleryImages.filter((img) => img.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? "bg-maroon text-cream shadow-md"
                  : "bg-cream text-charcoal/70 hover:bg-ivory hover:text-charcoal border border-turmeric/30"
              }`}
            >
              <span>{cat}</span>
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive ? "bg-white/20 text-cream" : "bg-charcoal/10 text-charcoal/60"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img, idx) => {
          // Find actual index in global galleryImages for Lightbox
          const globalIdx = galleryImages.findIndex((item) => item.id === img.id);

          return (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(globalIdx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-charcoal/10 hover:-translate-y-1"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-charcoal/75 backdrop-blur-md text-white border border-white/10">
                  {img.category}
                </span>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 inset-x-3 text-left">
                <h3 className="font-serif font-bold text-sm text-white group-hover:text-gold transition-colors line-clamp-1">
                  {img.title}
                </h3>
                <span className="text-[11px] text-cream/70 line-clamp-1 mt-0.5">
                  {img.alt}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
