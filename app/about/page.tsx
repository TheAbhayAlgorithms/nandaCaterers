import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutContent } from "@/components/about/AboutContent";
import { RelatedPages } from "@/components/ui/RelatedPages";

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

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Catering Packages & Menus"
        subtitle="Turn our 15+ years of pure vegetarian catering mastery into an extraordinary event for you"
        links={[
          {
            title: "Royal Packages",
            description: "Silver, Gold, and Royal banqueting packages with per-plate pricing.",
            href: "/packages",
            tag: "Pricing",
          },
          {
            title: "13 Food Cuisines",
            description: "Explore 500+ pure veg delicacies across Indian & international spreads.",
            href: "/menu",
            tag: "Full Menu",
          },
          {
            title: "Interactive Quote Wizard",
            description: "Calculate your estimated per-plate investment in 5 quick steps.",
            href: "/quote",
            tag: "Calculator",
          },
          {
            title: "Client Testimonials",
            description: "Read reviews from families and corporate clients who hired us.",
            href: "/testimonials",
            tag: "Reviews",
          },
        ]}
      />
    </div>
  );
}
