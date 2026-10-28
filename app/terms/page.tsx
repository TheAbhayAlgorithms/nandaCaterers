import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/site";
import { SectionShell } from "@/components/shape/SectionShell";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

export const metadata: Metadata = {
  title: "Terms of Service | Nanda Caterers – Wedding Caterers in Mumbai",
  description: "Booking policies, payment schedules, and service terms for Nanda Caterers Mumbai.",
};

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen">
      <PageHero
        title="Terms of Service"
        breadcrumb="Terms of Service"
      />

      <SectionShell className="py-12 sm:py-16 max-w-4xl">
        <div className="p-8 sm:p-10 rounded-2xl bg-paper border border-ink/10 shadow-card space-y-8 text-xs sm:text-sm text-ink/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl text-ink">
              1. Dietary and Quality Assurance
            </h2>
            <p>
              Nanda Caterers prepares delicious vegetarian and non-vegetarian menus under strict hygienic standards. Dedicated utensils and cookware are maintained for strict Jain and Swaminarayan preparations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl text-ink">
              2. Booking & Payment Schedule
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Date Lock:</strong> A 25% advance deposit confirms and locks your event date on our master kitchen schedule.
              </li>
              <li>
                <strong>Pre-Event Balance:</strong> 50% is due 7 days prior to the event date following the final guest count and menu lock.
              </li>
              <li>
                <strong>Event Completion:</strong> The remaining 25% final balance is cleared on the event date upon successful service delivery.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl text-ink">
              3. Guest Count Adjustments
            </h2>
            <p>
              Final guaranteed minimum guest counts must be confirmed in writing no later than 5 calendar days prior to your function date to ensure optimal fresh grocery procurement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl text-ink">
              4. Service Inclusions
            </h2>
            <p>
              All confirmed catering packages include trained service stewards, standard tableware, chafing gear, and clean buffet presentation unless specifically opted out.
            </p>
          </section>

          <div className="pt-4 border-t border-ink/10">
            <Link
              href="/contact"
              className="text-xs font-bold text-accent uppercase tracking-wider hover:underline"
            >
              ← Back to Contact Page
            </Link>
          </div>
        </div>
      </SectionShell>

      <NextStepStrip
        headline="Have questions about your event terms?"
        primaryButtonText="Connect"
        primaryAction="enquiry"
        secondaryButtonText="FAQ"
        secondaryHref="/contact?tab=faq"
      />
    </main>
  );
}
