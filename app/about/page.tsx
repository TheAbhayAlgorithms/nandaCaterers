import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | 15+ Years Catering Excellence in Mumbai",
  description:
    "Learn about Nanda Caterers journey since 2005. Founded in Bandra East, delivering benchmark pure vegetarian culinary hospitality across Mumbai, Thane, Pune & Goa.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <PageHero
        title="About Nanda Caterers"
        eyebrow="Crafting Celebrations Since 2005"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        subtitle="Serving benchmark pure vegetarian wedding feasts and corporate celebrations with devotion, trained maharajs, and pristine hygiene."
      />

      <AboutContent />
    </div>
  );
}
