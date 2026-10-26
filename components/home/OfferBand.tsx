"use client";

import React from "react";
import Image from "next/image";
import { TornEdge } from "@/components/shape/TornEdge";
import { Button } from "@/components/ui/Button";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function OfferBand() {
  const { openQuoteSheet } = useQuoteSelection();

  return (
    <section className="relative w-full bg-night text-white overflow-hidden py-24 sm:py-28 md:py-32">
      {/* Torn-paper top edge cut from previous cream section */}
      <TornEdge position="top" color="var(--cream)" variant={1} />

      {/* Dark full-bleed food photo background with heavy dark overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=80"
          alt="Warm Indian pure vegetarian catering banquet"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Heavy dark overlay: 88% night */}
        <div className="absolute inset-0 bg-night/88 backdrop-blur-[2px]" />
      </div>

      {/* Content Container: Centered on all viewports */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="max-w-2xl flex flex-col items-center text-center">
          {/* Small uppercase eyebrow */}
          <p className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-accent mb-3 select-none">
            PLANNING AN EVENT?
          </p>

          {/* H2 with highlighted background on "Free Quote" */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Get a{" "}
            <span className="inline-block bg-accent px-3 py-1 rounded-lg text-white font-bold my-1">
              Free Quote
            </span>{" "}
            for Your Wedding or Event Menu
          </h2>

          {/* Response promise sentence */}
          <p className="text-sm sm:text-base text-white/85 mb-8 font-medium">
            We just need a couple of hours. Reply within 2 working days.
          </p>

          {/* Filled accent pill "Connect" */}
          <Button
            variant="filled"
            size="lg"
            onClick={() => openQuoteSheet("Wedding")}
            aria-label="Connect for custom quotation"
          >
            Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
