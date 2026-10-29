"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BentoGrid } from "@/components/shape/BentoGrid";
import { BentoTile } from "@/components/shape/BentoTile";
import { Button } from "@/components/ui/Button";
import { NextStepStrip } from "@/components/shape/NextStepStrip";
import { aboutData } from "@/data/about";
import { ClocheIcon } from "@/components/services/ServiceIcons";

export function AboutTabs() {
  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* 1. OUR STORY SECTION */}
      <section id="story" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Text Left */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">
              Since 2005 • Our Story
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
              A Legacy of Culinary Excellence
            </h2>

            <div className="space-y-3 text-ink/80 text-sm sm:text-base leading-relaxed">
              {aboutData.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Timeline mini (3 nodes) */}
            <div className="pt-4 border-t border-black/5 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-accent">
                Milestones
              </h4>
              <div className="space-y-2.5">
                {aboutData.timeline.map((node) => (
                  <div key={node.year} className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded-full bg-peach text-accent font-bold text-xs shrink-0">
                      {node.year}
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="text-ink">{node.title}: </strong>
                      <span className="text-ink/70">{node.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button href="/services" variant="filled" size="md">
                See Our Services
              </Button>
            </div>
          </div>

          {/* Bento Right */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <BentoGrid>
              <BentoTile
                type="photo"
                imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&crop=top&w=600&h=450&q=80"
                imageAlt="Catering presentation"
              />
              <BentoTile type="accent" className="bg-accent text-white">
                <ClocheIcon className="w-8 h-8 text-white mb-2" />
                <span className="font-heading font-bold text-lg text-white">20+ Years</span>
                <span className="text-xs text-white/85 font-merriweather">Culinary Purity</span>
              </BentoTile>
              <BentoTile type="accent" className="bg-accent text-white">
                <span className="font-heading font-bold text-2xl text-white">5,000+</span>
                <span className="text-xs text-white/85 font-merriweather">Satisfied Hosts</span>
              </BentoTile>
              <BentoTile
                type="photo"
                imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                imageAlt="Grand banquet arrangement"
              />
            </BentoGrid>
          </div>
        </motion.div>
      </section>

      {/* Decorative Divider Between Story and Reach */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full border-t border-accent/15" />
      </div>

      {/* 2. OUR REACH SECTION */}
      <section id="reach" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Text Left */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-accent">
              Service Areas • Our Reach
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
              Serving Across Western India
            </h2>

            <p className="text-ink/80 text-sm sm:text-base leading-relaxed">
              {aboutData.reachParagraph}
            </p>

            {/* 5 Location Chips */}
            <div className="pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
                Primary Hubs & Destination Cities
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach text-ink font-semibold text-xs border border-accent/20"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Occasions Chip Cloud */}
            <div className="pt-4 border-t border-black/5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
                What We Do (Occasions)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {aboutData.occasions.map((occ) => (
                  <span
                    key={occ}
                    className="px-2.5 py-1 rounded-lg bg-paper text-ink/80 text-xs font-medium border border-black/10"
                  >
                    {occ}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Right */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <BentoGrid>
              <BentoTile
                type="photo"
                imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
                imageAlt="Evening wedding catering"
              />
              <BentoTile type="accent" className="bg-accent text-white">
                <span className="font-heading font-bold text-lg text-white">Destination</span>
                <span className="text-xs text-white/85 font-merriweather">Goa & Pune Caravans</span>
              </BentoTile>
              <BentoTile type="accent" className="bg-accent text-white">
                <span className="font-heading font-bold text-lg text-white">Mumbai & Thane</span>
                <span className="text-xs text-white/85 font-merriweather">Express Hubs</span>
              </BentoTile>
              <BentoTile
                type="photo"
                imageSrc="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                imageAlt="Live banquet station"
              />
            </BentoGrid>
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <div className="max-w-[1200px] mx-auto px-4 pt-4">
        <NextStepStrip
          headline="Ready to plan your event?"
          primaryButtonText="Connect"
          secondaryButtonText="View Menu"
          secondaryHref="/menu"
        />
      </div>
    </div>
  );
}
