import React from "react";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { CuisineGrid } from "@/components/home/CuisineGrid";
import { SpecialtyBand } from "@/components/home/SpecialtyBand";
import { SpecialtyHighlight } from "@/components/home/SpecialtyHighlight";
import { StatsSection } from "@/components/home/StatsSection";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { PopularServices } from "@/components/home/PopularServices";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryStrip } from "@/components/home/GalleryStrip";
import { HomeQuoteSection } from "@/components/home/HomeQuoteSection";
import { MenuCTA } from "@/components/home/MenuCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* Infinite pausable cuisine marquee ribbon */}
      <Marquee />

      {/* 2. Food Cuisine ("we offer") */}
      <CuisineGrid />

      {/* 3. Specialty Band: Wedding Foods Is Our Specialty & 5-image collage */}
      <SpecialtyBand />

      {/* 4 & 5. Specialty Highlights: Make Every Event Special & Quick & Fast Service */}
      <SpecialtyHighlight />

      {/* 6. Stats: Foods Variety, Customers, Years, Freshness */}
      <StatsSection />

      {/* 7. In catering ("What we offer") */}
      <WhatWeOffer />

      {/* 8. Popular Services ("Other services") */}
      <PopularServices />

      {/* 9. Make your event memorable ("Popular Dishes" & Packages block) */}
      <SignatureDishes />

      {/* 10. Customer Reviews ("Testimonials") */}
      <Testimonials />

      {/* 11. Gallery strip (#gallery section with Lightbox) */}
      <GalleryStrip />

      {/* 12. Get Best Quotations / Contact Us */}
      <HomeQuoteSection />

      {/* 13. See our all type of foods menu CTA */}
      <MenuCTA />
    </div>
  );
}
