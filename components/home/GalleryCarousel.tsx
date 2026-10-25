"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export function GalleryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 280;
    const offset = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <SectionShell className="bg-paper text-ink">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
        <Eyebrow>OUR GALLERY</Eyebrow>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink">
          Moments of Joy & Royal Feasts
        </h2>
        <Divider align="center" color="bg-accent" />
      </div>

      {/* Carousel Container with Overlapping Round White Arrow Buttons */}
      <div className="relative group/carousel mb-10">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          aria-label="Previous gallery photo"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white text-ink shadow-warm flex items-center justify-center border border-black/10 hover:bg-cream hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-ink" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          aria-label="Next gallery photo"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-11 h-11 rounded-full bg-white text-ink shadow-warm flex items-center justify-center border border-black/10 hover:bg-cream hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-ink" />
        </button>

        {/* Horizontal scroll track: 4 visible on desktop, 2.3 on tablet, 1.3 on mobile (peek) */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          role="region"
          aria-label="Photo carousel"
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {carouselItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="snap-start shrink-0 cursor-pointer select-none rounded-2xl overflow-hidden relative shadow-soft border border-black/5 group aspect-[4/5] w-[72vw] sm:w-[42vw] md:w-[30vw] lg:w-[calc(25%-15px)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 30vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient at bottom with short caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <span className="font-heading font-bold text-sm sm:text-base text-white">
                  {item.caption}
                </span>
                <span className="text-[11px] text-white/70">Click to view</span>
              </div>
            </div>
          ))}
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
