"use client";

import React from "react";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";
import { BentoGrid } from "@/components/shape/BentoGrid";
import { BentoTile } from "@/components/shape/BentoTile";
import { ClocheIcon } from "@/components/services/ServiceIcons";
import { siteConfig } from "@/data/site";
import { Clock, Phone } from "lucide-react";

export function AboutBento() {
  return (
    <SectionShell className="bg-paper text-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Text Block */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <Eyebrow>ABOUT US</Eyebrow>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight text-ink mb-2">
            Great Catering Goes Beyond <span className="text-accent italic">Delicious Dishes</span>; It&apos;s Built on Outstanding Service.
          </h2>

          <Divider align="left" color="bg-accent" />

          {/* Two short paragraphs per Section 4.3 */}
          <div className="space-y-3 text-ink/75 text-sm sm:text-base leading-relaxed mb-6">
            <p>
              {/* TODO: add FSSAI licence no. */}
              Nanda Caterers makes every occasion memorable, just for you. We believe in leaving lasting impressions with over 20 years of experience and an FSSAI-licensed kitchen.
            </p>
            <p>
              Founded in 2005, Nanda Caterers has specialised in grand wedding banquets, corporate meetings, and joyful family celebrations across Mumbai, Pune, and Goa.
            </p>
          </div>

          {/* Outlined pill button "Learn More" -> /about */}
          <Button href="/about" variant="outline" size="md">
            Learn More
          </Button>
        </div>

        {/* Right Bento (2x2 grid, checkerboard: photo, accent, accent, photo) */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <BentoGrid>
            {/* Tile 1: Photo tile (top-left: event buffet / platter) */}
            <BentoTile
              type="photo"
              imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
              imageAlt="Luxury wedding buffet arrangement"
            />

            {/* Tile 2: Accent tile (top-right: Fresh, Hygienic, Always -> /about#story) */}
            <BentoTile
              type="accent"
              href="/about#story"
              className="bg-accent text-white"
            >
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-2.5">
                <ClocheIcon className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-base sm:text-lg leading-tight text-white mb-1">
                Fresh, Hygienic, Always
              </span>
              <span className="text-[11px] text-white/80 uppercase tracking-wider font-semibold font-merriweather">
                Taste Guarantee →
              </span>
            </BentoTile>

            {/* Tile 3: Accent tile (bottom-left: Opening Hours + click-to-call) */}
            <BentoTile
              type="accent"
              href={`tel:${siteConfig.phone.raw}`}
              className="bg-accent text-white"
            >
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-white/80">
                Opening Hours
              </span>
              <span className="font-bold text-xs sm:text-sm text-white my-0.5">
                MON-SAT: 9 AM - 9 PM
              </span>
              <div className="flex items-center gap-1 text-[11px] text-white/90 underline font-medium mt-1">
                <Phone className="w-3 h-3 text-white" />
                <span>Call {siteConfig.phone.display}</span>
              </div>
            </BentoTile>

            {/* Tile 4: Photo tile (bottom-right: chafing dishes / live counter) */}
            <BentoTile
              type="photo"
              imageSrc="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
              imageAlt="Live counter and warm chafing dishes"
            />
          </BentoGrid>
        </div>
      </div>
    </SectionShell>
  );
}
