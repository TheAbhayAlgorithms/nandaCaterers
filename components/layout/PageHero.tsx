"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TornEdge } from "@/components/shape/TornEdge";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  imageSrc?: string;
  badge?: string;
  bottomColor?: string;
}

export function PageHero({
  title,
  breadcrumb,
  imageSrc = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&crop=top&w=1920&h=750&q=80",
  badge,
  bottomColor = "var(--paper)",
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-night text-white flex flex-col justify-center items-center h-[260px] sm:h-[300px]">
      {/* Background Image with dark overlay per Section 6 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-night/80 backdrop-blur-[1px]" />
      </div>

      {/* Centred H1 and small breadcrumb */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-white/70 mb-2 font-semibold">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-white/90">{breadcrumb}</span>
        </nav>

        {/* Centred H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          {title}
        </h1>

        {badge && (
          <span className="mt-2 text-xs font-bold uppercase tracking-wider text-leaf bg-paper/90 px-3 py-0.5 rounded-full shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Torn-paper bottom edge matching section below */}
      <TornEdge position="bottom" color={bottomColor} variant={0} />
    </section>
  );
}
