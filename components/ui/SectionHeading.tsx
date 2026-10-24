import React from "react";
import { cn } from "@/lib/cn";
import { OrnamentalDivider } from "./OrnamentalDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "maroon" | "gold" | "white";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "maroon",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const themeTextColors = {
    maroon: {
      eyebrow: "text-saffron",
      title: "text-maroon",
      subtitle: "text-charcoal/75",
    },
    gold: {
      eyebrow: "text-turmeric",
      title: "text-saffron",
      subtitle: "text-charcoal/80",
    },
    white: {
      eyebrow: "text-turmeric",
      title: "text-white",
      subtitle: "text-cream/80",
    },
  };

  const colors = themeTextColors[theme];

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-accent text-xl md:text-2xl font-semibold tracking-wide block mb-1.5 capitalize",
            colors.eyebrow
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2]",
          colors.title
        )}
      >
        {title}
      </h2>

      <OrnamentalDivider
        theme={theme}
        className={cn("my-3.5", isCenter ? "mx-auto" : "mx-0")}
      />

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg font-normal leading-relaxed mt-2",
            colors.subtitle
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
