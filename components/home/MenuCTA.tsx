"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Utensils } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function MenuCTA() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <div className="rounded-3xl bg-gradient-to-r from-maroon via-maroon-dark to-charcoal text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-warm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl space-y-4">
              <span className="font-accent text-2xl md:text-3xl text-turmeric font-semibold block">
                Taste Perfection
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                See our all type of foods menu
              </h2>
              <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
                Explore our full 13-category pure vegetarian repertoire featuring over 500 delicacies, from traditional Kathiyawadi farsan to live Italian pasta counters.
              </p>
              <div className="pt-4">
                <Button href="/menu" variant="primary" size="lg">
                  <Utensils className="w-5 h-5 text-charcoal" />
                  <span>Food Menus</span>
                  <ArrowRight className="w-4 h-4 text-charcoal" />
                </Button>
              </div>
            </div>

            {/* Dish Image Showcase */}
            <div className="relative z-10 w-full md:w-auto shrink-0 flex items-center justify-center">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-turmeric/60 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
                  alt="Delicious Indian Feast Spread"
                  fill
                  sizes="300px"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
