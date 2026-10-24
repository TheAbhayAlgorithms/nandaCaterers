import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us & Mumbai Offices | Get Catering Quotation",
  description:
    "Contact Nanda Caterers for wedding and party catering quotes. Visit our offices in Bandra (East) and Khar (East), Mumbai. Response within a couple of hours.",
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
    <div className="flex flex-col w-full pb-20">
      <PageHero
        title="Contact & Offices"
        eyebrow="Get In Touch"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        subtitle="Visit our Bandra or Khar offices, request a customized menu proposal, or contact us directly on WhatsApp."
      />

      <ContactContent
        initialService={initialService}
        initialDishes={initialDishes}
      />
    </div>
  );
}
