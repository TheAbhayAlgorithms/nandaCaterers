import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactTabs } from "@/components/contact/ContactTabs";

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

interface ContactPageProps {
  searchParams: Promise<{
    service?: string;
    dishes?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialService = params.service;
  const initialDishes = params.dishes ? params.dishes.split(",") : undefined;

  return (
    <main className="w-full min-h-screen">
      {/* Compact hero per Section 6 */}
      <PageHero
        title="Contact Us"
        breadcrumb="Contact"
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Tabs: Send Enquiry | Visit Us | FAQ with URL sync */}
      <Suspense
        fallback={
          <div className="py-20 text-center text-ink/40 text-sm">
            Loading contact options...
          </div>
        }
      >
        <ContactTabs
          initialService={initialService}
          initialDishes={initialDishes}
        />
      </Suspense>
    </main>
  );
}
