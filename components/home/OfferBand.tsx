"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { TornEdge } from "@/components/shape/TornEdge";

export function OfferBand() {
  return (
    <section className="relative w-full bg-night text-white overflow-hidden py-24 sm:py-28 md:py-32">
      {/* Torn-paper top edge cut from previous cream section */}
      <TornEdge position="top" color="var(--cream)" variant={1} />

      {/* Dark full-bleed food photo background with heavy dark overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/catering-feast-banner.jpg"
          alt="Royal Indian wedding catering banquet feast"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Rich dark overlay to keep text crisp while revealing royal feast */}
        <div className="absolute inset-0 bg-night/85 backdrop-blur-[1px]" />
      </div>

      {/* Content Container: Centered on all viewports */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="max-w-2xl flex flex-col items-center text-center">
          {/* Small uppercase eyebrow */}
          <p className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-accent mb-3 select-none">
            PLANNING AN EVENT?
          </p>

          {/* H2 with highlighted background on "Your Own Menu" */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white leading-tight mb-8">
            Cook{" "}
            <span className="inline-block bg-accent px-3 py-1 rounded-lg text-white font-bold my-1">
              Your Own Menu
            </span>{" "}
            for Your Wedding or Event
          </h2>

          {/* Animated Effect Button: Cook Your Menu */}
          <div className="relative inline-flex items-center justify-center group">
            {/* Ambient radiant glow behind button */}
            <span
              aria-hidden="true"
              className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent via-saffron to-accent opacity-15 blur-sm group-hover:opacity-30 transition-opacity duration-300"
            />

            <Link
              role="button"
              href="/menu"
              className="font-poppins relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-accent via-[#C8401E] to-accent text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Animated Light Sweep Shimmer Effect */}
              <span
                aria-hidden="true"
                className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer pointer-events-none"
              />

              <Sparkles className="w-5 h-5 text-turmeric shrink-0" />
              <span className="tracking-wide">Cook Your Menu</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
