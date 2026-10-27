import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { demoPackages, SHOW_DEMO_CONTENT } from "@/data/siteContent";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

export const metadata: Metadata = {
  title: "Catering Packages | Silver, Gold & Premium Pure Veg Banquets",
  description:
    "Explore sample per-plate catering packages in Mumbai by Nanda Caterers. Compare our Silver, Gold, and Premium feast tiers for weddings and celebrations.",
  openGraph: {
    title: "Catering Packages | Nanda Caterers Mumbai",
    description:
      "Curated 100% pure vegetarian catering packages with live counters, sweets, and complete hospitality management.",
  },
};

export default function PackagesPage() {
  const activePackages = demoPackages.filter(
    (pkg) => SHOW_DEMO_CONTENT || !pkg.isDemo
  );

  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Page Hero */}
      <PageHero
        title="Catering Packages"
        breadcrumb="Packages"
        imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Package Cards Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-accent block mb-1">
            CURATED MENUS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-ink">
            Sample Banqueting Tiers
          </h2>
          <p className="text-xs sm:text-sm text-ink/70 mt-2">
            Tailored vegetarian packages designed for celebrations of all sizes. All packages can be customized with Jain and regional specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {activePackages.map((pkg) => {
            const isGold = pkg.id === "gold";

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 bg-paper border border-ink/10 flex flex-col justify-between shadow-warm transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  isGold ? "ring-2 ring-accent" : ""
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-ink/10 pb-5 mb-6">
                    <h3 className="font-heading font-extrabold text-2xl text-ink">
                      {pkg.name}
                    </h3>
                    <div className="mt-3">
                      <span className="text-2xl sm:text-3xl font-extrabold text-accent block font-heading">
                        {pkg.pricePerPlateText}
                      </span>
                      <span className="text-[11px] text-ink/50 block mt-0.5">
                        *Customizable based on guest count and venue.
                      </span>
                    </div>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/60">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80">
                      {pkg.includedItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-leaf/10 text-leaf flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink/10">
                  <Button
                    href="/contact#enquiry"
                    variant={isGold ? "filled" : "outline"}
                    size="md"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Step CTA */}
      <NextStepStrip
        headline="Looking for a custom combination of cuisines?"
        primaryButtonText="Get a Custom Quote"
        primaryAction="quote"
        secondaryButtonText="Explore Menu"
        secondaryHref="/menu"
      />
    </main>
  );
}
