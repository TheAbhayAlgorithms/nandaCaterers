import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ConnectContent } from "@/components/connect/ConnectContent";

export const metadata: Metadata = {
  title: "Connect With Us | Nanda Caterers – Wedding Caterers in Mumbai",
  description:
    "Connect directly with Nanda Caterers Mumbai for wedding, corporate, and private party catering. Send your requirements directly to WhatsApp.",
  openGraph: {
    title: "Connect With Us | Nanda Caterers – Wedding Caterers in Mumbai",
    description:
      "Share your catering details and connect directly with our culinary coordinators on WhatsApp.",
  },
};

export default function ConnectPage() {
  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Compact hero */}
      <PageHero
        title="Connect With Us"
        breadcrumb="Connect"
        imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&crop=top&w=1920&h=750&q=80"
        bottomColor="var(--cream)"
      />

      {/* Main Connect Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="w-full py-20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
              </div>
            }
          >
            <ConnectContent />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
