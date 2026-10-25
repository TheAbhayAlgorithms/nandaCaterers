"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menuCategories } from "@/data/menu";
import { NextStepStrip } from "@/components/shape/NextStepStrip";
import { cn } from "@/lib/cn";

export function CuisineHub() {
  const [activeSegment, setActiveSegment] = useState<"Indian" | "Global">("Indian");

  const categories = menuCategories.filter((c) => c.group === activeSegment);

  return (
    <div className="w-full">
      {/* Segmented Control: Indian Food | Global Cuisines per Section 6.3 */}
      <div className="flex justify-center my-8 sm:my-10 px-4">
        <div className="inline-flex p-1.5 rounded-full bg-peach/80 border border-accent/20 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveSegment("Indian")}
            className={cn(
              "px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none",
              activeSegment === "Indian"
                ? "bg-accent text-white shadow-soft"
                : "text-ink/75 hover:text-ink hover:bg-white/40"
            )}
            role="tab"
            aria-selected={activeSegment === "Indian"}
          >
            Indian Food (8)
          </button>
          <button
            type="button"
            onClick={() => setActiveSegment("Global")}
            className={cn(
              "px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none",
              activeSegment === "Global"
                ? "bg-accent text-white shadow-soft"
                : "text-ink/75 hover:text-ink hover:bg-white/40"
            )}
            role="tab"
            aria-selected={activeSegment === "Global"}
          >
            Global Cuisines (5)
          </button>
        </div>
      </div>

      {/* Cuisine Cards Grid with fade + slight slide animation per Section 6.3 */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <Link
                key={category.slug}
                  href={`/menu/${category.slug}`}
                  className="group rounded-2xl overflow-hidden bg-paper border border-accent/15 shadow-soft hover:shadow-warm transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-ink group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-ink/70 mt-1 line-clamp-2 leading-relaxed">
                        {category.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 mt-4 flex items-center justify-between text-xs font-semibold text-accent group-hover:text-accent-dark transition-colors">
                      <span>View Menu</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Strip per Section 6.3: Nothing else on page except CTA strip */}
      <div className="max-w-[1200px] mx-auto px-4 mt-12">
        <NextStepStrip
          headline="Ready to curate your custom event menu?"
          primaryButtonText="Request a Quote"
          secondaryButtonText="Explore Catering Services"
          secondaryHref="/services"
        />
      </div>
    </div>
  );
}
