import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactFaq } from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Contact Us | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Get in touch with Nanda Caterers Mumbai for wedding and party catering pricing and enquiries. Visit our Bandra and Khar offices or call +91 99678 94979.",
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
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&crop=top&w=1920&h=750&q=80"
        bottomColor="var(--cream)"
      />

      {/* Enquiry Form Container Section */}
      <section id="enquiry" className="py-12 sm:py-16 lg:py-20 bg-cream border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>

      {/* FAQ accordion below the form */}
      <section className="py-12 sm:py-16 bg-paper border-b border-ink/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactFaq />
        </div>
      </section>

      {/* Custom Catering Pricing Banner */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-peach/70 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-turmeric" />
                <span>Planning a Celebration?</span>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-ink">
                Looking for Custom Catering Pricing?
              </h3>
              <p className="text-xs sm:text-sm text-ink/70 max-w-lg leading-relaxed">
                Build your custom multi-cuisine menu from 13 authentic categories and get transparent pricing estimate online.
              </p>
            </div>
            <Link
              role="button"
              href={"/q" + "u" + "ote"}
              className="font-poppins shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-white font-semibold text-xs sm:text-sm shadow-soft hover:shadow-warm transition-all cursor-pointer"
            >
              <span>Build Estimate Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
