import React from "react";
import { cn } from "@/lib/cn";

interface OrnamentalDividerProps {
  className?: string;
  theme?: "maroon" | "gold" | "white";
}

export function OrnamentalDivider({ className, theme = "maroon" }: OrnamentalDividerProps) {
  const colorMap = {
    maroon: {
      line: "bg-maroon/25",
      fill: "fill-maroon text-maroon",
      accent: "text-saffron",
    },
    gold: {
      line: "bg-turmeric/40",
      fill: "fill-turmeric text-turmeric",
      accent: "text-saffron",
    },
    white: {
      line: "bg-white/30",
      fill: "fill-white/80 text-white/80",
      accent: "text-turmeric",
    },
  };

  const colors = colorMap[theme];

  return (
    <div className={cn("flex items-center justify-center gap-3 w-full max-w-[240px] mx-auto my-3 select-none", className)}>
      <span className={cn("h-[1px] flex-1", colors.line)} />
      
      {/* Central Diamond & Floral Motif */}
      <div className="flex items-center gap-1.5 shrink-0">
        <svg
          width="28"
          height="14"
          viewBox="0 0 28 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={colors.fill}
          aria-hidden="true"
        >
          {/* Central diamond */}
          <polygon points="14,1 20,7 14,13 8,7" className={colors.accent} fill="currentColor" />
          <circle cx="14" cy="7" r="1.8" fill="#FFF8EC" />
          {/* Side dots */}
          <circle cx="3" cy="7" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="25" cy="7" r="1.5" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <span className={cn("h-[1px] flex-1", colors.line)} />
    </div>
  );
}
