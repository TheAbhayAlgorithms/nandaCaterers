import React from "react";
import type { Metadata } from "next";
import { Sparkles, ArrowRight, Utensils } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/Button";
import { RelatedPages } from "@/components/ui/RelatedPages";

export const metadata: Metadata = {
  title: "Event Gallery | Wedding Banquets & Buffet Setups",
  description:
    "Explore real photographs of Nanda Caterers wedding banquets, live chaat stalls, decorative dessert counters, and corporate buffets in Mumbai.",
  openGraph: {
    title: "Event Gallery | Nanda Caterers Mumbai",
    description:
      "Visual showcase of luxury 100% pure veg wedding feasts, live food counters, and royal dining presentation.",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-maroon text-cream pt-28 pb-14 md:pt-36 md:pb-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <Breadcrumbs
            items={[{ label: "Gallery" }]}
            className="text-cream/70 justify-center mb-3 px-0"
          />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron text-charcoal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Showcase
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Banquet & Celebration Gallery
          </h1>

          <p className="text-sm sm:text-base text-cream/85 max-w-2xl mx-auto leading-relaxed">
            A visual journey through past weddings, sangeet chaat bazaars, corporate luncheons, and artisanal dessert displays catered across Mumbai, Pune, and Goa.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <GalleryGrid />
      </section>

      {/* Quote Banner */}
      <section className="bg-cream border-y border-turmeric/30 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Want This Level of Presentation At Your Celebration?
          </h2>
          <p className="text-sm text-charcoal/70 max-w-xl mx-auto">
            From royal floral chafing setups to live interactive stalls, our team delivers breathtaking dining aesthetics.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/quote" variant="primary" size="lg">
              <span>Build Custom Event Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/packages" variant="outline" size="lg">
              <span>View Packages & Pricing</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Related Services & Packages"
        subtitle="Discover how we turn these visual setups into reality for your event"
        links={[
          {
            title: "Royal Wedding Catering",
            description: "Grand wedding banquets with live counters, sweets & attentive stewards.",
            href: "/services/wedding",
            tag: "Flagship",
          },
          {
            title: "Curated Packages",
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
            title: "Client Testimonials",
            description: "Read verified reviews from wedding hosts and corporate event planners.",
            href: "/testimonials",
            tag: "Reviews",
          },
        ]}
      />
    </div>
  );
}
