"use client";

import React from "react";
import { numbersStripStats, SHOW_DEMO_CONTENT } from "@/data/siteContent";
import { TornEdge } from "@/components/shape/TornEdge";

export function NumbersStrip() {
  const activeStats = numbersStripStats.filter(
    (item) => SHOW_DEMO_CONTENT || !item.isDemo
  );

  if (activeStats.length === 0) return null;

  return (
    <section className="relative w-full bg-peach/40 border-b border-ink/10 pt-12 sm:pt-14 pb-10 sm:pb-12 overflow-hidden">
      {/* Torn-paper top edge cut from previous white section */}
      <TornEdge position="top" color="var(--paper)" variant={1} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {activeStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <span className="font-lora font-bold text-2xl sm:text-3xl lg:text-4xl text-accent tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-ink mt-1.5 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
