"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";

// The 8 cuisine chips per Section 4.6
const cuisineTeaserItems = [
  { name: "Indian", slug: "main-course", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80" },
  { name: "Chinese", slug: "chinese", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80" },
  { name: "Continental", slug: "continental", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" },
  { name: "Thai", slug: "thai", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=400&q=80" },
  { name: "Italian", slug: "italian", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80" },
  { name: "Mexican", slug: "mexican", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80" },
  { name: "Juices", slug: "welcome-drink", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
  { name: "Ice-cream", slug: "ice-cream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80" },
];

export function MenuTeaser() {
  return (
    <SectionShell className="bg-cream text-ink">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>FOOD MENU</Eyebrow>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink">
          A Menu for Every Taste
        </h2>
        <Divider align="center" color="bg-accent" />
      </div>

      {/* Row of 8 rounded-square cuisine chips/cards */}
      <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 mb-10 no-scrollbar">
        {cuisineTeaserItems.map((item) => (
          <motion.div
            key={item.slug}
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="snap-start shrink-0 w-28 sm:w-auto"
          >
            <Link
              href={`/menu/${item.slug}`}
              className="flex flex-col items-center text-center p-3 sm:p-3.5 rounded-2xl bg-paper shadow-soft border border-accent/10 hover:border-accent hover:shadow-warm transition-all group"
            >
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-2.5 border border-accent/20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm text-ink group-hover:text-accent transition-colors truncate w-full">
                {item.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* One pill button "See Full Menu" -> /menu */}
      <div className="flex justify-center">
        <Button href="/menu" variant="filled" size="md">
          See Full Menu
        </Button>
      </div>
    </SectionShell>
  );
}
