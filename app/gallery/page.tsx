import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SectionShell } from "@/components/shape/SectionShell";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

import { GalleryVideoSection } from "@/components/gallery/GalleryVideoSection";

export const metadata: Metadata = {
  title: "Photo Gallery | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Explore photographs of Nanda Caterers royal wedding banquets, live counters, dessert spreads, and gala decor in Mumbai, Pune, and Goa.",
  openGraph: {
    title: "Photo Gallery | Nanda Caterers Mumbai",
    description:
      "Visual showcase of luxury pure vegetarian wedding feasts, live food stations, and event dining decor.",
  },
};

export default function GalleryPage() {
  return (
    <main className="w-full min-h-screen">
      {/* Compact Hero with torn bottom edge per Section 6 */}
      <PageHero
        title="Photo Gallery"
        breadcrumb="Gallery"
        imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Block 1: Video Showcase & Photo Grid */}
      <SectionShell className="pt-10 sm:pt-14 pb-20">
        <GalleryVideoSection />
        <GalleryGrid />
      </SectionShell>

      {/* One compact NextStepStrip CTA per Section 1 Rule 5 */}
      <NextStepStrip
        headline="Ready to bring this royal culinary spread to your celebration?"
        primaryButtonText="Connect"
        primaryAction="quote"
        secondaryButtonText="Explore Menu"
        secondaryHref="/menu"
      />
    </main>
  );
}
