import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Utensils,
  HelpCircle,
  MessageCircle,
  Phone,
} from "lucide-react";
import { packagesData, packageComparisonFeatures } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Catering Packages & Pricing | Silver, Gold & Royal Pure Veg Banquets",
  description:
    "Transparent per-plate catering packages in Mumbai by Nanda Caterers. Compare our Silver, Gold, and Royal feast tiers for weddings, receptions, and corporate events.",
  openGraph: {
    title: "Catering Packages & Pricing | Nanda Caterers Mumbai",
    description:
      "Explore curated 100% pure vegetarian catering packages with live counters, sweets, and complete hospitality management.",
  },
};

export default function PackagesPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Header */}
      <section className="bg-maroon text-cream pt-28 pb-16 md:pt-36 md:pb-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <Breadcrumbs
            items={[{ label: "Packages" }]}
            className="text-cream/75 justify-center mb-4 px-0"
          />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron text-charcoal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Banqueting Tiers
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Catering Packages & Menu Tiers
          </h1>

          <p className="text-base sm:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Whether you are hosting an intimate 50-guest pooja or a grand 3,000+ guest wedding reception, our pure vegetarian packages are engineered for maximum culinary delight and flawless hospitality.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-cream/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-turmeric" />
              100% Pure Vegetarian
            </span>
            <span>•</span>
            <span>Custom Jain Adjustments</span>
            <span>•</span>
            <span>Zero Hidden Service Charges</span>
          </div>
        </div>
      </section>

      {/* 3 Tier Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => {
            const isGold = pkg.id === "gold";
            const isRoyal = pkg.id === "royal";

            const whatsappHref = buildWhatsAppLink({
              customMessage: `Hello Nanda Caterers, I would like to inquire about the ${pkg.name} (${pkg.pricePerPlateText}) for our upcoming celebration.`,
            });

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-warm transition-all duration-300 hover:shadow-warm-lg ${pkg.colorTheme} ${
                  isGold ? "lg:-translate-y-4 lg:shadow-2xl" : ""
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-maroon text-gold text-xs font-bold uppercase tracking-widest shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-charcoal/10 pb-5 mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 block">
                      {pkg.guestRange}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-1">
                      {pkg.name}
                    </h2>
                    <p className="text-xs text-charcoal/70 mt-1">
                      {pkg.subtitle}
                    </p>

                    <div className="mt-4 pt-4 border-t border-charcoal/5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-maroon block font-serif">
                        {pkg.pricePerPlateText}
                      </span>
                      <span className="text-[11px] text-charcoal/50 block mt-0.5">
                        *Prices vary depending on final guest count & seasonal dates.
                      </span>
                    </div>
                  </div>

                  {/* Course Composition Highlights */}
                  <div className="space-y-3 text-xs text-charcoal/85 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Welcome Drinks:</span>
                      <span>{pkg.welcomeDrinks}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Starters:</span>
                      <span>{pkg.starters}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Live Counters:</span>
                      <span className="font-medium text-maroon">{pkg.liveCounters}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Main Curries:</span>
                      <span>{pkg.mainCourseCurries}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Breads & Rice:</span>
                      <span>{pkg.breadsAndRice}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Dals & Kadhis:</span>
                      <span>{pkg.dalsAndKadhis}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Royal Sweets:</span>
                      <span>{pkg.dessertsAndSweets}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-charcoal min-w-[110px]">Ice Cream/Kulfi:</span>
                      <span>{pkg.iceCreamAndKulfi}</span>
                    </div>
                  </div>

                  {/* Hospitality Checklist */}
                  <div className="pt-4 border-t border-charcoal/10 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block mb-2">
                      Hospitality & Setup
                    </span>
                    <ul className="space-y-1.5">
                      {pkg.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-charcoal/80">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-charcoal/10 space-y-2.5">
                  <Button
                    href={`/quote?package=${pkg.id}`}
                    variant={isGold ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    <span>Customize This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-maroon block mb-1">
            Side-By-Side Evaluation
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
            Package Comparison Matrix
          </h2>
          <p className="mt-2 text-sm text-charcoal/70">
            Compare courses, live counter setups, and service inclusions across all three banqueting packages.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-charcoal/10 bg-ivory shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-cream border-b border-charcoal/10">
                <th className="py-4 px-6 font-bold text-charcoal w-1/4">Inclusion / Course</th>
                <th className="py-4 px-6 font-bold text-charcoal w-1/4">Silver Package</th>
                <th className="py-4 px-6 font-bold text-maroon w-1/4 bg-amber-50/60">
                  Gold Package ⭐
                </th>
                <th className="py-4 px-6 font-bold text-maroon-dark w-1/4">Royal Feast</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              {packageComparisonFeatures.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white/50" : "bg-transparent"}
                >
                  <td className="py-3.5 px-6 font-semibold text-charcoal">{row.label}</td>
                  <td className="py-3.5 px-6 text-charcoal/80">{row.silver}</td>
                  <td className="py-3.5 px-6 font-medium text-charcoal bg-amber-50/30">
                    {row.gold}
                  </td>
                  <td className="py-3.5 px-6 font-medium text-maroon">{row.royal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Menu Banner */}
      <section className="bg-cream border-y border-turmeric/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-serif italic text-2xl text-saffron block">
            Bespoke Banqueting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Need a Completely Customized Menu?
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 max-w-2xl mx-auto leading-relaxed">
            Our master chefs craft tailor-made menus blending authentic Kathiyawadi, Surti Gujarati, Punjabi Dhaba, South Indian, and Continental delicacies. You can swap any item or add live counters to any package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/quote" variant="primary" size="lg">
              <span>Launch Quote Builder Wizard</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/menu" variant="outline" size="lg">
              <span>View All 500+ Dishes</span>
              <Utensils className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Catering Services & Past Events"
        subtitle="Combine packages with specialized wedding, corporate, or party arrangements"
        links={[
          {
            title: "Royal Wedding Catering",
            description: "Grand wedding banquets with live counters, sweets & attentive stewards.",
            href: "/services/wedding",
            tag: "Flagship",
          },
          {
            title: "Corporate Banquets",
            description: "Punctual, professional corporate lunches, buffets, and high teas.",
            href: "/services/corporate",
            tag: "Corporate",
          },
          {
            title: "Photo Gallery",
            description: "View real photographs of our buffet setups, food stations, and table decor.",
            href: "/gallery",
            tag: "Visuals",
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
