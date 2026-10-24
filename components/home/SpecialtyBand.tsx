"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Award, Palette } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function SpecialtyBand() {
  return (
    <section className="py-20 lg:py-28 bg-ivory border-y border-turmeric/25 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Copy & Statements (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal variant="fadeUp">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-maroon text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-saffron" />
                <span>Benchmark Royal Hospitality</span>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-maroon leading-tight">
                Wedding Foods Is Our Specialty:{" "}
                <span className="text-saffron italic block font-normal mt-1">
                  Catering service with new ideas as per customer requirements.
                </span>
              </h2>
            </Reveal>

            {/* Two Short Statements */}
            <div className="space-y-4 pt-2">
              <Reveal variant="fadeUp" delay={0.2}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream/70 border border-charcoal/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-gold-gradient text-charcoal flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-maroon">
                      We Delight to Serve You
                    </h3>
                    <p className="text-sm text-charcoal/75 mt-0.5 leading-relaxed">
                      With our benchmark style and quality, every preparation brings unforgettable taste and pristine hygiene.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.3}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream/70 border border-charcoal/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-maroon text-cream flex items-center justify-center shrink-0">
                    <Palette className="w-5 h-5 text-turmeric" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-maroon">
                      Serve Food in Our Own Style
                    </h3>
                    <p className="text-sm text-charcoal/75 mt-0.5 leading-relaxed">
                      Different types of catering decoration, interactive counters, and custom floral dining setups.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* CTA buttons */}
            <Reveal variant="fadeUp" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact#quote-form" variant="primary" size="lg">
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <Button href="/services" variant="secondary" size="lg">
                  Explore Catering Services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 5-Image Collage with Rotating Circular Badge (6 cols) */}
          <div className="lg:col-span-6 relative">
            <Reveal variant="scaleIn">
              <div className="relative grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[440px] sm:h-[520px] max-w-lg mx-auto">
                {/* Image 1: Main Wedding Table (Big) */}
                <div className="relative col-span-4 row-span-4 rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Royal Wedding Setup"
                    fill
                    sizes="(max-width: 1024px) 70vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Image 2: Live Counter (Top Right) */}
                <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80"
                    alt="Live Tandoor Counter"
                    fill
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Image 3: Buffet Decoration (Bottom Left) */}
                <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=400&q=80"
                    alt="Buffet Decoration"
                    fill
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Image 4: Traditional Sweets (Bottom Middle) */}
                <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
                    alt="Traditional Indian Sweets"
                    fill
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Image 5: Fruit & Drink display (Bottom Right) */}
                <div className="relative col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"
                    alt="Welcome Drinks Counter"
                    fill
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Rotating Circular Text Badge using SVG textPath */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg
                      viewBox="0 0 160 160"
                      className="w-full h-full animate-spin-slow select-none filter drop-shadow-lg"
                    >
                      <path
                        id="circlePath"
                        d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                        fill="none"
                      />
                      <text className="font-heading text-[11.5px] uppercase font-bold tracking-[0.22em] fill-maroon">
                        <textPath href="#circlePath" startOffset="0%">
                          WEDDING FOODS • IS OUR SPECIALTY •
                        </textPath>
                      </text>
                    </svg>

                    {/* Central Icon */}
                    <div className="absolute w-14 h-14 rounded-full bg-gold-gradient shadow-warm flex items-center justify-center border-2 border-white">
                      <Sparkles className="w-6 h-6 text-charcoal" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
