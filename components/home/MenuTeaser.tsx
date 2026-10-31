"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";

// The 8 menu categories from Master Catering Menu
const cuisineTeaserItems = [
  {
    name: "Beverages",
    slug: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Soups",
    slug: "soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Starters",
    slug: "starters",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Live Counters",
    slug: "live-counters",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Salads",
    slug: "salads-accompaniments",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Main Course",
    slug: "main-course",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sweets",
    slug: "sweets",
    image: "/images/sweets.jpg",
  },
  {
    name: "Desserts & Ice Cream",
    slug: "desserts-ice-cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
  },
];

export interface MenuTeaserItem {
  name: string;
  slug: string;
  image: string;
}

export function MenuTeaser({ items = cuisineTeaserItems }: { items?: MenuTeaserItem[] }) {
  return (
    <SectionShell className="bg-cream text-ink">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>FOOD MENU</Eyebrow>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink">
          A Menu for Every Taste
        </h2>
        <Divider align="center" color="bg-accent" />
      </div>

      {/* Row of 8 rounded-square cuisine chips/cards with smooth lift & glow hover */}
      <div
        className="flex lg:grid lg:grid-cols-8 gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pt-3 pb-6 px-1 mb-8 no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/menu/${item.slug}`}
            prefetch={true}
            className="group relative snap-start shrink-0 w-28 sm:w-auto flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-paper shadow-soft border border-ink/10 hover:border-accent hover:shadow-warm-lg hover:scale-[1.03] hover:z-10 active:scale-98 transition-all duration-300 transform cursor-pointer select-none"
          >
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-2.5 border-2 border-accent/20 group-hover:border-accent group-hover:ring-4 group-hover:ring-accent/15 transition-all duration-300">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-115"
              />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm text-ink group-hover:text-accent transition-colors duration-200 truncate w-full">
              {item.name}
            </span>
          </Link>
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
