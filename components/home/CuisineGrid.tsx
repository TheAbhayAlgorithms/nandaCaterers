"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface CuisineCardItem {
  title: string;
  href: string;
  image: string;
  subtitle: string;
  itemsCount: string;
}

const cuisineList: CuisineCardItem[] = [
  {
    title: "Beverages",
    href: "/menu/beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    subtitle: "Juices, mocktails, fresh fruit coolers & kadai milk",
    itemsCount: "32 Dishes",
  },
  {
    title: "Soups",
    href: "/menu/soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    subtitle: "Classic creamy, Asian & continental broths",
    itemsCount: "48 Dishes",
  },
  {
    title: "Starters",
    href: "/menu/starters",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    subtitle: "Paneer tikkas, cheese bites, rolls & cutlets",
    itemsCount: "73 Dishes",
  },
  {
    title: "Live Counters",
    href: "/menu/live-counters",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    subtitle: "Artisanal pizzas, chaat carts, wok & farsan",
    itemsCount: "114 Dishes",
  },
  {
    title: "Salads & Sides",
    href: "/menu/salads-accompaniments",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    subtitle: "Live fruit salads, gourmet platters & papads",
    itemsCount: "30 Dishes",
  },
  {
    title: "Main Course",
    href: "/menu/main-course",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    subtitle: "Paneer, kofta, Gujarati specials, dals & breads",
    itemsCount: "161 Dishes",
  },
  {
    title: "Sweets",
    href: "/menu/sweets",
    image: "/images/sweets.jpg",
    subtitle: "Dry fruit mithai, halwa, Bengali sweets & rabdi",
    itemsCount: "98 Dishes",
  },
  {
    title: "Desserts & Ice Cream",
    href: "/menu/desserts-ice-cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    subtitle: "Kulfi sticks, falooda bar & fresh milk ice cream",
    itemsCount: "79 Dishes",
  },
];

function TiltCard({ item }: { item: CuisineCardItem }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only apply on desktop
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // max 6 deg tilt
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Link
      href={item.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
      className="group relative block aspect-[3/4] sm:aspect-[4/5] min-h-[340px] rounded-3xl overflow-hidden bg-charcoal shadow-warm hover:shadow-warm-lg transition-all duration-300"
    >
      {/* Background Image with scale-110 over 700ms ease-out */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Layered Gradient Overlay for maximum text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />


      {/* Bottom Content with proper breathing room */}
      <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end transition-transform duration-300">
        <h3 className="font-heading font-bold text-2xl text-white group-hover:text-turmeric transition-colors duration-200">
          {item.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-cream font-normal line-clamp-2 mt-1.5 leading-relaxed drop-shadow-sm">
          {item.subtitle}
        </p>

        {/* Explore Chip that fades in */}
        <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-turmeric opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore Cuisine</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function CuisineGrid() {
  return (
    <section className="py-20 lg:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal variant="fadeUp">
        <SectionHeading
          eyebrow="we offer"
          title="Food Cuisine"
          subtitle="We have experience of making all types of food. Crafted with royal spices, traditional recipes, and finest ingredients."
        />
      </Reveal>

      {/* 1 col mobile -> 2 sm/md -> 4 lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cuisineList.map((item, idx) => (
          <Reveal key={item.title} variant="fadeUp" delay={idx * 0.08}>
            <TiltCard item={item} />
          </Reveal>
        ))}
      </div>

      {/* Button to full menu */}
      <div className="mt-12 text-center">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-maroon text-cream hover:bg-maroon-dark text-xs sm:text-sm font-bold uppercase tracking-wider shadow-warm transition-all"
        >
          <span>Explore All 13 Food Categories & 500+ Dishes</span>
          <ArrowRight className="w-4 h-4 text-turmeric" />
        </Link>
      </div>
    </section>
  );
}
