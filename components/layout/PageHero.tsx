import React from "react";
import Link from "next/link";
import { MandalaWatermark } from "@/components/ui/MandalaWatermark";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { cn } from "@/lib/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  breadcrumbs: BreadcrumbItem[];
  subtitle?: string;
  className?: string;
}

export function PageHero({
  title,
  eyebrow,
  breadcrumbs,
  subtitle,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark text-cream pt-32 pb-16 md:pt-40 md:pb-24 text-center",
        className
      )}
    >
      <MandalaWatermark
        size={500}
        opacity={0.06}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative max-w-4xl mx-auto px-4 z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-cream/70">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-turmeric">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-turmeric transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-turmeric font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <span className="font-accent text-2xl md:text-3xl text-turmeric block mb-2 font-semibold">
            {eyebrow}
          </span>
        )}

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          {title}
        </h1>

        <OrnamentalDivider theme="white" className="my-4" />

        {subtitle && (
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
