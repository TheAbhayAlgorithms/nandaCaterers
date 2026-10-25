import React from "react";
import { Hero } from "@/components/home/Hero";
import { AboutBento } from "@/components/home/AboutBento";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { GalleryCarousel } from "@/components/home/GalleryCarousel";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { OfferBand } from "@/components/home/OfferBand";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero: full-bleed photo, torn bottom edge */}
      <Hero />

      {/* 2. About Bento: text left, 2x2 bento right */}
      <AboutBento />

      {/* 3. Services Teaser: pale peach background with doodle pattern, 6 cards + modal */}
      <ServicesTeaser />

      {/* 4. Gallery Carousel: 8-item snapping photo carousel + lightbox */}
      <GalleryCarousel />

      {/* 5. Menu Teaser: 8 cuisine chips + See Full Menu */}
      <MenuTeaser />

      {/* Offer / Quote Band: dark with torn top edge */}
      <OfferBand />
    </div>
  );
}
