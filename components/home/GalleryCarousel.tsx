"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryImages } from "@/data/gallery";

const carouselItems = [
  { ...galleryImages[0], caption: "Wedding Buffet" },
  { ...galleryImages[1], caption: "Live Counter" },
  { ...galleryImages[2], caption: "Mini Appetizers" },
  { ...galleryImages[3], caption: "South Indian Breakfast" },
  { ...galleryImages[4], caption: "Sweets Table" },
  { ...galleryImages[5], caption: "Decor Setup" },
  { ...galleryImages[6], caption: "Royal Curries" },
  { ...galleryImages[7] || galleryImages[0], caption: "Salads & Fruits" },
].slice(0, 8);

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...carouselItems, ...carouselItems];

export function GalleryCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <SectionShell className="bg-paper text-ink overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
        <Eyebrow>OUR GALLERY</Eyebrow>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink">
          Moments of Joy & Royal Feasts
        </h2>
        <Divider align="center" color="bg-accent" />
      </div>

      {/* Auto-moving continuous marquee with hover-to-pause */}
      <div className="relative gallery-marquee-container w-full overflow-hidden mb-10 py-2">
        <div className="animate-gallery-marquee flex gap-4 sm:gap-5">
          {marqueeItems.map((item, idx) => {
            const originalIndex = idx % carouselItems.length;
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="shrink-0 cursor-pointer select-none rounded-2xl overflow-hidden relative shadow-soft border border-black/5 group aspect-[4/5] w-[240px] sm:w-[280px] lg:w-[300px] transition-all duration-300 hover:scale-[1.02] hover:shadow-warm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient at bottom with short caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="font-heading font-bold text-sm sm:text-base text-white">
                    {item.caption}
                  </span>
                  <span className="text-[11px] text-white/70">Click to view</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Below: small outlined button "View Full Gallery" -> /gallery */}
      <div className="flex justify-center">
        <Button href="/gallery" variant="outline" size="sm">
          View Full Gallery
        </Button>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        images={carouselItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(i) => setLightboxIndex(i)}
      />
    </SectionShell>
  );
}
