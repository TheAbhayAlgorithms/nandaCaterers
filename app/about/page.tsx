import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutTabs } from "@/components/about/AboutTabs";

export const metadata: Metadata = {
  title: "About Us | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Learn about Nanda Caterers journey since 2005. Founded in Bandra East, delivering culinary hospitality across Mumbai, Thane, Pune & Goa.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      {/* Compact Hero: photo band, dark overlay, centered H1, breadcrumb, torn edge */}
      <PageHero
        title="About Nanda Caterers"
        breadcrumb="About Us"
        imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&crop=top&w=1920&h=750&q=80"
      />

      {/* Our Story followed by Our Reach in a single seamless flow */}
      <div className="pt-8 sm:pt-14">
        <AboutTabs />
      </div>
    </div>
  );
}
