import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export interface RelatedPageLink {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

interface RelatedPagesProps {
  title?: string;
  subtitle?: string;
  links: RelatedPageLink[];
  className?: string;
}

export function RelatedPages({
  title = "Explore Related Services & Menus",
  subtitle = "Discover our royal catering offerings crafted for every celebration",
  links,
  className = "",
}: RelatedPagesProps) {
  return (
    <section className={`py-12 bg-cream/50 border-t border-turmeric/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-maroon mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Continue Exploring
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-charcoal/70">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid gap-4 sm:gap-6 ${
          links.length === 2 ? "grid-cols-1 md:grid-cols-2" :
          links.length === 3 ? "grid-cols-1 md:grid-cols-3" :
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        }`}>
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="group relative bg-ivory rounded-2xl p-6 border border-turmeric/30 hover:border-maroon/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {link.tag && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-maroon bg-cream px-2 py-0.5 rounded-full border border-turmeric/40 mb-3">
                    {link.tag}
                  </span>
                )}
                <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-maroon transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed line-clamp-2">
                  {link.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-charcoal/5 flex items-center justify-between text-xs font-semibold text-maroon">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
