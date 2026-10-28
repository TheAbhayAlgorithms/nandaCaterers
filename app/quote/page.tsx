import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { RelatedPages } from "@/components/ui/RelatedPages";

export const metadata: Metadata = {
  title: "Get Instant Catering Pricing | Multi-Step Wizard",
  description:
    "Calculate your per-plate catering estimate in seconds. Customize guest count, cuisine selections, live food counters, and request an estimate on WhatsApp from Nanda Caterers Mumbai.",
  openGraph: {
    title: "Instant Catering Pricing Wizard | Nanda Caterers Mumbai",
    description:
      "Interactive 5-step catering estimate builder for weddings, corporate banquets, and family parties in Mumbai.",
  },
};

export default function QuotePage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-maroon text-cream pt-28 pb-12 md:pt-36 md:pb-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <Breadcrumbs
            items={[{ label: "Connect" }]}
            className="text-cream/70 justify-center mb-2 px-0"
          />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Event Pricing Wizard
          </h1>
          <p className="text-sm sm:text-base text-cream/85 max-w-xl mx-auto">
            Calculate your estimated per-plate investment, specify dietary requirements, and receive a formal breakdown directly from our master planners.
          </p>
        </div>
      </section>

      {/* Suspended Client Wizard */}
      <Suspense
        fallback={
          <div className="py-20 text-center text-charcoal/60 font-serif">
            Loading interactive pricing builder...
          </div>
        }
      >
        <QuoteWizard />
      </Suspense>

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Catering Packages & Menus"
        subtitle="Review our curated menu packages or discover past wedding setups"
        links={[
          {
            title: "Royal Packages",
            description: "Silver, Gold, and Royal banqueting packages with per-plate pricing.",
            href: "/packages",
            tag: "Curated Sets",
          },
          {
            title: "13 Food Cuisines",
            description: "Explore 500+ delicacies across Indian & international spreads.",
            href: "/menu",
            tag: "Full Menu",
          },
          {
            title: "Wedding Catering",
            description: "Grand multi-course wedding feasts with live interactive food stations.",
            href: "/services/wedding",
            tag: "Flagship",
          },
          {
            title: "Banquet Photo Gallery",
            description: "View real photos of our live counters, chaat stations, and dessert bars.",
            href: "/gallery",
            tag: "Visuals",
          },
        ]}
      />
    </div>
  );
}
