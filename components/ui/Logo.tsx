import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  theme?: "dark" | "light";
  withLink?: boolean;
}

export function Logo({ className, theme = "dark", withLink = true }: LogoProps) {
  const isLight = theme === "light";

  const content = (
    <div className={cn("flex items-center gap-2.5 select-none group", className)}>
      {/* Monogram Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-turmeric via-saffron to-turmeric p-[2px] shadow-warm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-[10px] bg-maroon-dark flex items-center justify-center shadow-inner">
          <span className="font-lora font-bold text-2xl text-cream group-hover:text-turmeric transition-colors">
            N
          </span>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-lora font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors",
              isLight ? "text-white" : "text-maroon"
            )}
          >
            Nanda
          </span>
          <span
            className={cn(
              "font-lora font-medium text-xl md:text-2xl tracking-tight leading-none transition-colors",
              isLight ? "text-turmeric" : "text-saffron"
            )}
          >
            Caterers
          </span>
        </div>
        <span
          className={cn(
            "text-[9.5px] uppercase tracking-[0.22em] font-semibold leading-none mt-1 transition-colors",
            isLight ? "text-cream/70" : "text-charcoal/60"
          )}
        >
          Pure Veg • Mumbai
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" aria-label="Nanda Caterers Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
