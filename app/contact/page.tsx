import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactTabs } from "@/components/contact/ContactTabs";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactFaq } from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Contact Us | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Get in touch with Nanda Caterers Mumbai for wedding and party catering quotations. Visit our Bandra and Khar offices or call +91 99678 94979.",
  openGraph: {
    title: "Contact Us | Nanda Caterers – Wedding Caterers in Mumbai",
    description:
      "Plan your wedding or event menu with Nanda Caterers. Response within 2 hours.",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen">
      {/* Compact hero */}
      <PageHero
        title="Contact Us"
        breadcrumb="Contact"
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
      />

      {/* B1: Enquiry Form with #enquiry anchor */}
      <section className="py-12 sm:py-16 bg-cream border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>

      {/* B5: FAQ accordion below the form */}
      <section className="py-12 sm:py-16 bg-paper border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactFaq />
        </div>
      </section>

      {/* Direct Reach & Map Locations */}
      <Suspense
        fallback={
          <div className="py-20 text-center text-ink/40 text-sm">
            Loading contact options...
          </div>
        }
      >
        <ContactTabs />
      </Suspense>
    </main>
  );
}
