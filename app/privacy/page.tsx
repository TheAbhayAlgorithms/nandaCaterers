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
    <main className="w-full min-h-screen">
      <PageHero
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
      />

      <SectionShell className="py-12 sm:py-16 max-w-3xl">
        <div className="p-8 sm:p-10 rounded-2xl bg-paper border border-ink/10 shadow-card space-y-6 text-ink">
          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              1. Information We Collect
            </h2>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
              When you submit an enquiry through our quote form or contact us via WhatsApp, we collect details such as your name, phone number, email address, event date, guest count, and catering menu selections.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              2. How We Use Your Details
            </h2>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
              Your information is exclusively used to draft personalized catering estimates, discuss dietary specifications (such as Jain or Swaminarayan requirements), coordinate tasting sessions, and finalize banquet logistics. We never sell, lease, or share your contact info with third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              3. Communication & Consent
            </h2>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
              By submitting an enquiry, you consent to being contacted by Nanda Caterers via telephone, email, or WhatsApp solely regarding your event proposal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              4. Contact Us
            </h2>
            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
              For any questions regarding our privacy practices, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent font-semibold underline">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={siteConfig.phoneTel} className="text-accent font-semibold underline">
                {siteConfig.phone.display}
              </a>
              .
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
        headline="Ready to plan your catering feast?"
        primaryButtonText="Connect"
        primaryAction="quote"
        secondaryButtonText="Explore Menu"
        secondaryHref="/menu"
      />
    </main>
  );
}
