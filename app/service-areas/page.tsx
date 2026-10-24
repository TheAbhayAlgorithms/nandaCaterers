import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { serviceAreasData } from "@/data/service-areas";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { RelatedPages } from "@/components/ui/RelatedPages";

export const metadata: Metadata = {
  title: "Service Areas | Mumbai, Thane, Navi Mumbai, Pune & Goa",
  description:
    "Explore Nanda Caterers regional catering coverage. Providing 100% pure vegetarian catering across Mumbai, Thane, Navi Mumbai, Pune, and destination weddings in Goa.",
  openGraph: {
    title: "Service Areas | Nanda Caterers Mumbai",
    description:
      "Pure vegetarian wedding and corporate catering across Mumbai, Thane, Navi Mumbai, Pune, and Goa.",
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="bg-maroon text-cream pt-28 pb-14 md:pt-36 md:pb-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <Breadcrumbs
            items={[{ label: "Service Areas" }]}
            className="text-cream/70 justify-center mb-2 px-0"
          />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron text-charcoal text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Regional Coverage
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Catering Service Locations
          </h1>

          <p className="text-sm sm:text-base text-cream/85 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Bandra (East) with a branch in Khar (East), our logistics fleet and mobile kitchen caravans cater throughout the MMR region and destination retreats across Western India.
          </p>
        </div>
      </section>

      {/* 5 Area Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreasData.map((area) => (
            <div
              key={area.slug}
              className="group bg-ivory rounded-3xl overflow-hidden border border-charcoal/10 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={area.image}
                  alt={`${area.name} catering by Nanda Caterers`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-turmeric" />
                    {area.state}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="font-serif font-bold text-2xl text-white">
                    {area.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-charcoal/80 line-clamp-3 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-charcoal/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50 block">
                      Popular Venues:
                    </span>
                    <ul className="text-xs text-charcoal/70 space-y-1">
                      {area.popularVenues.slice(0, 3).map((v, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                          <span className="truncate">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-charcoal/10 mt-6 flex items-center justify-between">
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon hover:text-charcoal transition-colors group-hover:translate-x-1"
                  >
                    <span>View {area.name} Catering Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Catering Packages & Menus"
        subtitle="Custom pure vegetarian menus available across all our service locations"
        links={[
          {
            title: "Royal Packages",
            description: "Silver, Gold, and Royal banqueting packages with per-plate pricing.",
            href: "/packages",
            tag: "Pricing",
          },
          {
            title: "Royal Wedding Catering",
            description: "Grand wedding banquets with live counters, sweets & attentive stewards.",
            href: "/services/wedding",
            tag: "Flagship",
          },
          {
            title: "Interactive Quote Wizard",
            description: "Calculate your estimated per-plate investment in 5 quick steps.",
            href: "/quote",
            tag: "Calculator",
          },
          {
            title: "Client Testimonials",
            description: "Read reviews from families and corporate clients across these cities.",
            href: "/testimonials",
            tag: "Reviews",
          },
        ]}
      />
    </div>
  );
}
