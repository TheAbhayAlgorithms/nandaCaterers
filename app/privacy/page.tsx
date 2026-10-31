import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/site";
import { SectionShell } from "@/components/shape/SectionShell";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

export const metadata: Metadata = {
  title: "Privacy Policy | Nanda Caterers – Wedding Caterers in Mumbai",
  description: "Privacy policy and client data protection guidelines for Nanda Caterers Mumbai.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full min-h-screen bg-cream/20">
      <PageHero
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
      />

      <SectionShell className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto w-full p-8 sm:p-12 md:p-14 rounded-2xl sm:rounded-3xl bg-paper border border-ink/10 shadow-card space-y-8 text-ink font-poppins">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
              When you submit an enquiry through our website or contact us via WhatsApp, we collect details such as your name, phone number, event date, guest count, and catering menu selections.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              2. How We Use Your Details
            </h2>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
              Your information is exclusively used to draft personalized catering estimates, discuss dietary specifications (such as Jain or Swaminarayan requirements), coordinate tasting sessions, and finalize banquet logistics. We never sell, lease, or share your contact info with third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              3. Communication & Consent
            </h2>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
              By submitting an enquiry, you consent to being contacted by Nanda Caterers via telephone or WhatsApp solely regarding your event proposal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              4. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
              For any questions regarding our privacy practices, please contact us at{" "}
              <a href={siteConfig.phoneTel} className="text-accent font-semibold underline hover:text-accent-hover transition-colors">
                {siteConfig.phone.display}
              </a>
              .
            </p>
          </section>

          <div className="pt-6 border-t border-ink/10 flex items-center justify-between">
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider hover:underline"
            >
              ← Back to Contact Page
            </Link>
          </div>
        </div>
      </SectionShell>

      <NextStepStrip
        headline="Ready to plan your catering feast?"
        primaryButtonText="Connect"
        primaryAction="enquiry"
        secondaryButtonText="Explore Menu"
        secondaryHref="/menu"
      />
    </main>
  );
}
