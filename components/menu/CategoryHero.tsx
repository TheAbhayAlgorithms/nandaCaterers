"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuCategory } from "@/data/menu";
import { TornEdge } from "@/components/shape/TornEdge";

interface CategoryHeroProps {
  category: MenuCategory;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-night text-white flex flex-col justify-center items-center min-h-[220px] sm:min-h-[260px] pt-20 pb-14">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={category.image}
          alt={category.title}
          fill
          priority
          sizes="100vw"
          className="object-cover filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-night/75 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold"
        >
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2 text-accent">/</span>
          <Link href="/menu" className="hover:text-accent transition-colors">
            Menu
          </Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-white/90">{category.title}</span>
        </nav>

        {/* Centred H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          {category.title}
        </h1>

        {category.tagline && (
          <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-2xl mx-auto line-clamp-2">
            {category.tagline}
          </p>
        )}
      </div>

      {/* Torn-paper bottom edge per Section 5.3 & 6 */}
      <TornEdge position="bottom" color="var(--cream)" variant={2} />
    </section>
  );
}
