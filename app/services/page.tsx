import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesContent } from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Catering Services | Wedding, Corporate & Events",
  description:
    "Explore our benchmark wedding catering, family functions, corporate events, birthday parties, and outdoor feasts in Mumbai, Thane, Navi Mumbai, Pune & Goa.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <PageHero
        title="Our Catering Services"
        eyebrow="Unforgettable Feasts For Every Occasion"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        subtitle="Benchmark hospitality, live interactive cooking counters, and customized pure vegetarian menus designed for life's greatest milestones."
      />

      <ServicesContent />
    </div>
  );
}
