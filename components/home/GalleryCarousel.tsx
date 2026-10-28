"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryImages } from "@/data/gallery";

const carouselItems = [
  { ...galleryImages[0], caption: "Wedding Buffet" },
  { ...galleryImages[1], caption: "Floral Buffet Display" },
  { ...galleryImages[2], caption: "Tandoori Live Counter" },
  { ...galleryImages[3], caption: "Corporate Banquet" },
  { ...galleryImages[4], caption: "Sweets Table" },
  { ...galleryImages[5], caption: "Decor Setup" },
  { ...galleryImages[6], caption: "Royal Curries" },
  { ...galleryImages[7] || galleryImages[0], caption: "Sangeet Dining Decor" },
].slice(0, 8);

// Duplicate the array to create a seamless infinite loop
const defaultMarqueeItems = [...carouselItems, ...carouselItems];

export function GalleryCarousel({
  items = carouselItems,
}: {
  items?: Array<{ id: string; src: string; alt: string; caption: string }>;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const marqueeItems = items.length > 0 ? [...items, ...items] : defaultMarqueeItems;

  return (
    <section className="w-full relative bg-paper text-ink overflow-visible py-12 sm:py-16 md:py-20">
      {/* Centered Sticky Heading Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sticky top-[68px] sm:top-[74px] lg:top-[80px] z-20 pt-2 pb-4 mb-6 sm:mb-8 bg-paper/95 backdrop-blur-md transition-all">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Eyebrow>OUR GALLERY</Eyebrow>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink whitespace-normal sm:whitespace-nowrap mt-1 mb-2">
              Moments of Joy & Royal Feasts
            </h2>
            <Divider align="center" color="bg-accent" />
          </div>
        </div>
      </div>

      {/* Full-bleed edge-to-edge Marquee: spans 100% of viewport width from left edge to right edge */}
      <div className="relative gallery-marquee-container w-full overflow-hidden mb-10 py-2">
        <div className="animate-gallery-marquee flex gap-4 sm:gap-5">
          {marqueeItems.map((item, idx) => {
            const originalIndex = idx % (items.length || 1);
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="shrink-0 cursor-pointer select-none rounded-2xl overflow-hidden relative shadow-soft border border-black/5 group aspect-[4/5] w-[240px] sm:w-[280px] lg:w-[320px] transition-all duration-300 hover:scale-[1.02] hover:shadow-warm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
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

      {/* Below: small outlined button "View Full Gallery" */}
      <div className="max-w-[1200px] mx-auto px-4 flex justify-center">
        <Button href="/gallery" variant="outline" size="sm">
          View Full Gallery
        </Button>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        images={items as any}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(i) => setLightboxIndex(i)}
      />
    </section>
  );
}
