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
      {/* Inline SVG: small cloche/lotus mark per Section 4.1 */}
      <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-accent"
        >
          {/* Cloche / Lotus silhouette */}
          <path d="M12 3a1.5 1.5 0 0 0-1.5-1.5h-.01" />
          <path d="M4 17h16a1 1 0 0 0 1-1A9 9 0 0 0 3 16a1 1 0 0 0 1 1z" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <circle cx="12" cy="3" r="1.5" />
          <path d="M8 17c1-3 3-5 4-5s3 2 4 5" />
        </svg>
      </div>

      {/* Wordmark "Nanda Caterers" */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-heading font-bold text-lg sm:text-xl tracking-tight leading-none transition-colors",
            isLight ? "text-white" : "text-ink"
          )}
        >
          Nanda <span className="text-accent font-medium">Caterers</span>
        </span>
        <span
          className={cn(
            "text-[9px] uppercase tracking-[0.2em] font-semibold leading-none mt-1 transition-colors",
            isLight ? "text-white/70" : "text-ink/60"
          )}
        >
          Mumbai • Since 2005
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
