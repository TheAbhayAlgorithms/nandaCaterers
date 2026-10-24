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
    title: "Indian Food",
    href: "/menu/main-course",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    subtitle: "Punjabi gravies, dals, fragrant biryanis & tandoori",
    itemsCount: "60+ Dishes",
  },
  {
    title: "Chinese",
    href: "/menu/chinese",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    subtitle: "Wok noodles, sizzling manchurian & warm soups",
    itemsCount: "35+ Dishes",
  },
  {
    title: "Continental",
    href: "/menu/continental",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    subtitle: "Gourmet salads, herb pilafs & baked platters",
    itemsCount: "45+ Dishes",
  },
  {
    title: "Thai",
    href: "/menu/thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80",
    subtitle: "Aromatic coconut curries & pad thai noodles",
    itemsCount: "30+ Dishes",
  },
  {
    title: "Italian",
    href: "/menu/italian",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    subtitle: "Handcrafted pasta, baked lasagna & pizzas",
    itemsCount: "40+ Dishes",
  },
  {
    title: "Mexican",
    href: "/menu/mexican",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    subtitle: "Cheesy nachos, fresh salsas & burritos",
    itemsCount: "25+ Dishes",
  },
  {
    title: "Welcome Drinks & Juice",
    href: "/menu/welcome-drink",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    subtitle: "Chilled mocktails, sherbets, lassi & fruit punch",
    itemsCount: "10+ Drinks",
  },
  {
    title: "Ice-cream & Kulfi",
    href: "/menu/ice-cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    subtitle: "Royal falooda, traditional kulfis & sundaes",
    itemsCount: "20+ Flavors",
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
      className="group relative block aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-charcoal shadow-warm hover:shadow-warm-lg"
    >
      {/* Background Image with scale-110 over 700ms ease-out */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Layered Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Top Badge: Dish Count */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
          {item.itemsCount}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end transition-transform duration-300">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-turmeric transition-colors duration-200">
          {item.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-cream/75 line-clamp-1 mt-1 group-hover:text-cream transition-colors">
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
          subtitle="We have experience of making all types of food. Crafted with royal spices, traditional recipes, and pure vegetarian ingredients."
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
    </section>
  );
}
