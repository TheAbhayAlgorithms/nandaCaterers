"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";
import { demoPackages, SHOW_DEMO_CONTENT } from "@/data/siteContent";

export function PackagesTeaser() {
  const activePackages = demoPackages.filter(
    (pkg) => SHOW_DEMO_CONTENT || !pkg.isDemo
  );

  if (activePackages.length === 0) return null;

  return (
    <section className="w-full py-16 sm:py-20 bg-paper border-t border-ink/10 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <Eyebrow text="CURATED CATERING" />
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink mt-1">
            Sample Banqueting Packages
          </h2>
          <Divider align="center" color="bg-accent" />
          <p className="text-xs sm:text-sm text-ink/70 mt-2">
            Transparent per-plate tiers structured for wedding banquets, family functions, and corporate gatherings.
          </p>
        </div>

        {/* 3 Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {activePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl bg-cream/70 border border-ink/10 p-6 flex flex-col justify-between hover:shadow-card transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-lg text-ink">
                    {pkg.name}
                  </h3>
                  {pkg.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-0.5 mb-4">
                  <div className="text-base font-bold text-accent font-lora">
                    {pkg.vegPriceText}
                  </div>
                  <div className="text-base font-bold text-ink/80 font-lora">
                    {pkg.nonVegPriceText}
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-ink/75 mb-6">
                  {pkg.includedItems.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-leaf shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                  <li className="text-[11px] text-ink/50 italic pl-5">
                    + {pkg.includedItems.length - 4} more courses & hospitality
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-ink/5">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-dark transition-colors"
                >
                  <span>Explore Tier Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button href="/packages" variant="outline" size="md">
            View All Catering Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
