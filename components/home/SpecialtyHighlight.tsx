"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function SpecialtyHighlight() {
  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card 1: Make Every Event Special */}
          <Reveal variant="fadeUp" className="h-full">
            <div className="relative rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden bg-maroon text-cream flex flex-col justify-between h-full shadow-warm group">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 pointer-events-none">
                <Sparkles className="w-full h-full text-turmeric" />
              </div>

              <div className="space-y-4 relative z-10">
                <span className="font-accent text-2xl text-turmeric font-semibold block">
                  Our Specialty
                </span>
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                  Make every event special.
                </h3>
                <p className="text-base text-cream/80 leading-relaxed max-w-md">
                  We provide a wide range of catering foods with decoration as per customer requirement. From royal entrance setups to thematic dessert tables.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Button
                  href="/#gallery"
                  variant="primary"
                  size="md"
                  className="bg-gold-gradient text-charcoal"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>View Gallery</span>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Quick & Fast Service */}
          <Reveal variant="fadeUp" delay={0.15} className="h-full">
            <div className="relative rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden bg-ivory text-charcoal border border-turmeric/30 flex flex-col justify-between h-full shadow-warm group">
              {/* Subtle background food illustration */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-15 pointer-events-none">
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
                  alt="Fresh catering dishes"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 relative z-10">
                <span className="font-accent text-2xl text-saffron font-semibold block">
                  We Deliver Your Masterpiece!
                </span>
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-maroon leading-tight">
                  Quick & Fast Service.
                </h3>
                <p className="text-base text-charcoal/75 leading-relaxed max-w-md">
                  Punctual food service, steaming hot delicacies, and attentive stewards ensuring every guest experiences warmth without delays.
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <Button
                  href="/menu"
                  variant="secondary"
                  size="md"
                  className="border-maroon text-maroon"
                >
                  <span>See All Food Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
