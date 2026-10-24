import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/data/site";
import { RelatedPages } from "@/components/ui/RelatedPages";

export const metadata: Metadata = {
  title: "Terms of Service & Catering Agreement",
  description: "Booking policies, payment schedules, and service terms for Nanda Caterers Mumbai.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-maroon text-cream pt-28 pb-12 md:pt-36 md:pb-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <Breadcrumbs
            items={[{ label: "Terms of Service" }]}
            className="text-cream/70 justify-center mb-2 px-0"
          />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Terms of Service & Catering Policy
          </h1>
          <p className="text-sm sm:text-base text-cream/85 max-w-xl mx-auto">
            Clear, transparent operational terms governing banquet bookings, deposit schedules, and service guarantees.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8 text-charcoal">
        <div className="p-8 sm:p-10 rounded-3xl bg-ivory border border-turmeric/30 shadow-sm space-y-8 text-xs sm:text-sm text-charcoal/85 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-maroon">
              1. 100% Pure Vegetarian Assurance
            </h2>
            <p>
              Nanda Caterers is strictly a 100% pure vegetarian catering service. Under no circumstances do our kitchens handle, prepare, or transport non-vegetarian items, eggs, or seafood. Separate cookware, kadhais, and ladles are dedicated for strict Jain and Swaminarayan preparations upon prior request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-maroon">
              2. Booking & Payment Schedule
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Date Lock:</strong> A 25% non-refundable advance deposit is required to confirm and reserve your event date on our master operations calendar.
              </li>
              <li>
                <strong>Pre-Event Balance:</strong> 50% is due 7 days prior to the event date following the final guest count and menu lock.
              </li>
              <li>
                <strong>Event Completion:</strong> The remaining 25% final balance must be cleared on the event date upon successful meal service completion.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-maroon">
              3. Guest Count Guarantees & Buffer
            </h2>
            <p>
              The minimum billing is based on the guaranteed guest count agreed upon 7 days prior to the event. For all banquets, Nanda Caterers prepares a 10% food safety buffer to ensure no shortage occurs. Guests exceeding the agreed count will be billed at the contracted per-plate rate.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-maroon">
              4. Postponements & Date Changes
            </h2>
            <p>
              Date shifts are permitted at no additional penalty if notified at least 21 days before the original event date, subject to our master calendar availability within a 6-month validity window.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-maroon">
              5. Venue Permissions & Cleanliness
            </h2>
            <p>
              The client or venue host is responsible for securing necessary society or municipal premises permissions for catering staff entry. Nanda Caterers guarantees complete cleanup of the designated kitchen and buffet areas upon event conclusion.
            </p>
          </section>
        </div>
      </div>

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Catering Services & Quote Builder"
        subtitle="Transparent pricing and customized menus for weddings, corporate galas & parties"
        links={[
          {
            title: "Royal Packages",
            description: "Silver, Gold, and Royal banqueting packages with per-plate pricing.",
            href: "/packages",
            tag: "Pricing",
          },
          {
            title: "Interactive Quote Wizard",
            description: "Calculate your estimated per-plate investment in 5 quick steps.",
            href: "/quote",
            tag: "Calculator",
          },
          {
            title: "13 Food Cuisines",
            description: "Explore 500+ pure veg delicacies across Indian & international spreads.",
            href: "/menu",
            tag: "Full Menu",
          },
          {
            title: "Frequently Asked Questions",
            description: "Answers about guest counts, tasting sessions, and service areas.",
            href: "/faq",
            tag: "Help",
          },
        ]}
      />
    </div>
  );
}
