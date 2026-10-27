"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menuCategories } from "@/data/menu";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

export function CuisineHub() {
  return (
    <div className="w-full">
      {/* Cuisine Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuCategories.map((category) => (
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
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading font-bold text-lg text-ink group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-accent bg-peach px-2 py-0.5 rounded-full border border-accent/20 shrink-0">
                      {category.sections.reduce((acc, s) => acc + s.dishes.length, 0)} items
                    </span>
                  </div>
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
      </div>

      {/* CTA Strip per Section 6.3 */}
      <div className="max-w-[1200px] mx-auto px-4 mt-12">
        <NextStepStrip
          headline="Ready to curate your custom event menu?"
          primaryButtonText="Connect"
          secondaryButtonText="Explore Catering Services"
          secondaryHref="/services"
        />
      </div>
    </div>
  );
}

