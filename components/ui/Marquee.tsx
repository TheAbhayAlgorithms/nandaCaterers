"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  items?: string[];
  speed?: number; // seconds
  reverse?: boolean;
  className?: string;
}

const defaultItems = [
  "Indian Royal Feast",
  "Chinese Wok Specials",
  "Continental Gourmet",
  "Thai Curries",
  "Italian Artisan Pastas",
  "Mexican Delights",
  "Fresh Welcome Coolers",
  "Traditional Kulfi & Mithai",
  "Royal Wedding Banquets",
  "Live Tandoor & Chaat",
];

export function Marquee({
  items = defaultItems,
  speed = 35,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden w-full select-none py-3 bg-maroon text-cream/90 flex group border-y border-turmeric/30",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-8 whitespace-nowrap text-sm md:text-base font-medium tracking-wide">
            <span className="hover:text-turmeric transition-colors">{item}</span>
            <span className="text-saffron text-xs">◆</span>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-8 whitespace-nowrap text-sm md:text-base font-medium tracking-wide">
            <span className="hover:text-turmeric transition-colors">{item}</span>
            <span className="text-saffron text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
