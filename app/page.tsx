import React from "react";
import { Hero } from "@/components/home/Hero";
import { AboutBento } from "@/components/home/AboutBento";
import { NumbersStrip } from "@/components/home/NumbersStrip";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { GalleryCarousel } from "@/components/home/GalleryCarousel";
import { MenuTeaser } from "@/components/home/MenuTeaser";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { OfferBand } from "@/components/home/OfferBand";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Bento */}
      <AboutBento />

      {/* B3. Numbers Strip (below the About section) */}
      <NumbersStrip />

      {/* 3. Services Teaser */}
      <ServicesTeaser />

      {/* B2. Testimonials + Google Rating (after the Services section) */}
      <HomeTestimonials />

      {/* 4. Gallery Carousel */}
      <GalleryCarousel />

      {/* 5. Menu Teaser */}
      <MenuTeaser />

      {/* B4. Packages Teaser */}
      <PackagesTeaser />

      {/* Offer / Enquiry Band */}
      <OfferBand />
    </div>
  );
}
