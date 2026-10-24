"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Sparkles } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";

export function GalleryStrip() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream relative scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Moments & Flavours"
            title="Photo Gallery"
            subtitle="Glances from our royal wedding setups, live food counters, and celebratory banquet arrangements."
          />
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {galleryImages.map((image, idx) => (
            <Reveal
              key={image.id}
              variant="fadeUp"
              delay={idx * 0.06}
              className={idx === 0 || idx === 7 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
            >
              <div
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative w-full h-full min-h-[220px] md:min-h-[260px] rounded-2xl overflow-hidden cursor-pointer shadow-warm hover:shadow-warm-lg transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Overlay with View Icon */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient text-charcoal flex items-center justify-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                    <Eye className="w-5 h-5 text-charcoal" />
                  </div>
                  <p className="font-heading font-bold text-white text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </p>
                  <span className="text-[11px] text-turmeric uppercase tracking-wider font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Link to dedicated Gallery page */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon text-cream hover:bg-maroon-dark text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
          >
            <span>Explore Full Photo Gallery (All Categories)</span>
            <Eye className="w-4 h-4 text-turmeric" />
          </a>
        </div>
      </div>

      {/* Accessible Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onIndexChange={(index) => setActiveLightboxIndex(index)}
      />
    </section>
  );
}
