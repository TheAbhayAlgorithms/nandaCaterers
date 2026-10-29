import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesContent } from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Catering Services | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Explore our wedding catering, family functions, corporate events, birthday parties, and outdoor feasts in Mumbai, Thane, Navi Mumbai, Pune & Goa.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageHero
        title="Our Catering Services"
        breadcrumb="Services"
        imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&crop=top&w=1920&h=750&q=80"
        bottomColor="var(--peach)"
      />

      <ServicesContent />
    </div>
  );
}
