import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data protection guidelines for Nanda Caterers Mumbai.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <PageHero
        title="Privacy Policy"
        eyebrow="Data Protection"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        subtitle="How Nanda Caterers respects and protects the confidentiality of your personal details."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-charcoal">
        <div className="p-8 rounded-3xl bg-ivory border border-charcoal/10 shadow-sm space-y-6">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-2xl text-maroon">
              1. Information We Collect
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              When you submit an enquiry through our quote form or contact us via WhatsApp, we collect details such as your name, phone number, email address, event date, guest count, and catering menu selections.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-2xl text-maroon">
              2. How We Use Your Details
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Your information is exclusively used to draft personalized catering estimates, discuss dietary specifications (such as Jain or Swaminarayan requirements), coordinate tasting sessions, and finalize banquet logistics. We never sell, lease, or share your contact info with third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-2xl text-maroon">
              3. Communication & Consent
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              By submitting an enquiry, you consent to being contacted by Nanda Caterers via telephone, email, or WhatsApp solely regarding your event proposal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-2xl text-maroon">
              4. Contact Us
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              For any questions regarding our privacy practices, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-maroon font-semibold underline">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.phone.raw}`} className="text-maroon font-semibold underline">
                {siteConfig.phone.display}
              </a>
              .
            </p>
          </section>

          <div className="pt-4 border-t border-charcoal/10">
            <Link
              href="/contact"
              className="text-xs font-bold text-saffron uppercase tracking-wider hover:underline"
            >
              ← Back to Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
