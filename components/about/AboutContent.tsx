"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, HeartHandshake, UtensilsCrossed, ChefHat, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { occasionsList } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsSection } from "@/components/home/StatsSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

// PLACEHOLDER: Replace team roles and profiles with confirmed client crew details
const teamMembers = [
  {
    role: "Head Chef",
    initials: "HC",
    tagline: "Master of Traditional Gujarati & Royal Indian Delicacies",
    experience: "22+ years culinary expertise",
  },
  {
    role: "Banquet & Event Manager",
    initials: "EM",
    tagline: "Orchestrating Grand Wedding Service & Guest Hospitality",
    experience: "16+ years luxury catering management",
  },
  {
    role: "Quality & Kitchen Lead",
    initials: "KL",
    tagline: "Overseeing 100% Pure Veg Hygiene & Raw Ingredient Sourcing",
    experience: "14+ years food safety standards",
  },
];

const timelineEvents = [
  {
    year: "2005",
    title: "Founded in Mumbai",
    desc: "Nanda Caterers was founded in 2005 in Bandra East, starting with authentic Gujarati and Punjabi wedding feasts.",
  },
  {
    year: "2012",
    title: "Expansion to Thane & Navi Mumbai",
    desc: "Expanded operations with centralized hygiene-certified kitchens and added continental and live snack counters.",
  },
  {
    year: "2018",
    title: "Destination Banquets in Pune & Goa",
    desc: "Began serving destination weddings across Pune farmhouses, Lonavala retreats, and coastal Goa celebrations.",
  },
  {
    year: "Today",
    title: "15+ Years of Benchmark Taste",
    desc: "Over 5,000 satisfied wedding and corporate hosts, with a 500+ dish pure vegetarian culinary catalogue.",
  },
];

const valuesList = [
  {
    title: "Hygiene",
    desc: "Strict sanitized kitchen stations, hairnets, gloves, and medical-grade food prep protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Freshness",
    desc: "Hand-picked farm vegetables, authentic unadulterated spices, and zero preserved additives.",
    icon: Sparkles,
  },
  {
    title: "Trained Chefs",
    desc: "Specialized maharajs and regional chefs skilled in authentic flavours and live station craftsmanship.",
    icon: ChefHat,
  },
  {
    title: "Custom Menus",
    desc: "Tailored spice levels, Jain and Swaminarayan requirements, and bespoke celebration packages.",
    icon: UtensilsCrossed,
  },
];

export function AboutContent() {
  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Our Story & Reach */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="fadeUp">
              <span className="font-accent text-2xl text-saffron font-semibold block">
                The story about us
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-maroon leading-tight mt-1">
                Creating Lasting Impressions for Over 15 Years
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
                Nanda Caterers makes every occasion memorable, just for you. We believe in leaving lasting impressions with more than 15 years of experience. We are committed to maintaining high standards of taste and hygiene in food preparation. Our operations are carried out by our trained chefs, staff and team members, who have well-equipped, best-in-class kitchen facilities, ensuring tasty treats that are always fresh and safe to consume.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <div className="p-5 rounded-2xl bg-ivory border border-turmeric/40 shadow-sm space-y-2">
                <span className="font-heading font-bold text-lg text-maroon block">
                  Our Reach Across Maharashtra & Goa
                </span>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  In a short span of 15 years we have been working hard to give the best service across Mumbai, Thane, Navi Mumbai, Pune and Goa. Reaching out to each community has also been of utmost importance to us. Nanda Caterers is taking its legacy further with the same passion and commitment.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image Trio */}
          <div className="lg:col-span-6 relative">
            <Reveal variant="scaleIn">
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-warm mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                    alt="Wedding catering preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-warm">
                    <Image
                      src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80"
                      alt="Tandoori delicacies"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-warm">
                    <Image
                      src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
                      alt="Traditional sweets"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline: Founded in 2005 */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Our Journey"
            title="Founded in 2005"
            subtitle="Nanda Caterers was founded in 2005 and, throughout the decades, has specialised in wedding function catering as well as corporate catering, event catering services and party catering."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 relative">
          {timelineEvents.map((item, idx) => (
            <Reveal key={item.year} variant="fadeUp" delay={idx * 0.1} className="h-full">
              <div className="relative rounded-2xl bg-ivory p-6 border border-charcoal/10 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <span className="font-heading font-extrabold text-3xl text-saffron block mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-maroon mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Values Strip */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Our Principles"
            title="Core Values & Standards"
            subtitle="Every dish leaving our kitchens adheres to uncompromised quality, purity, and culinary devotion."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Reveal key={val.title} variant="fadeUp" delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl bg-ivory p-6 border border-charcoal/10 shadow-sm text-center flex flex-col items-center justify-between h-full group hover:shadow-warm transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient text-charcoal flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-maroon mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-charcoal/70 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Our Great Crew (Role-based placeholder cards with initials) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="The People Behind The Taste"
            title="Our Great Crew"
            subtitle="Trained culinary chefs, banquet stewards, and kitchen masters who turn celebrations into feasts."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, idx) => (
            <Reveal key={member.role} variant="fadeUp" delay={idx * 0.1} className="h-full">
              <div className="group rounded-3xl bg-ivory p-8 border border-charcoal/10 shadow-warm hover:shadow-warm-lg transition-all duration-300 text-center flex flex-col items-center justify-between h-full relative overflow-hidden">
                {/* Illustrated Initials Avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-turmeric via-saffron to-maroon p-[3px] shadow-md mb-6">
                  <div className="w-full h-full rounded-full bg-cream flex items-center justify-center">
                    <span className="font-heading font-extrabold text-2xl text-maroon group-hover:text-saffron transition-colors">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-maroon">
                    {member.role}
                  </h3>
                  <p className="text-sm font-medium text-saffron">
                    {member.tagline}
                  </p>
                  <p className="text-xs text-charcoal/60 mt-1">
                    {member.experience}
                  </p>
                </div>

                {/* Subtle Social Hover Row */}
                <div className="pt-6 border-t border-charcoal/10 w-full mt-6 flex items-center justify-center gap-3">
                  <span className="text-[11px] text-charcoal/40 uppercase tracking-widest font-semibold">
                    100% Pure Veg Culinary Team
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Occasions List */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <span className="font-accent text-2xl text-saffron font-semibold block mb-2">
          Events We Specialize In
        </span>
        <h3 className="font-heading font-bold text-3xl text-maroon mb-6">
          What We Do
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {occasionsList.map((occ) => (
            <span
              key={occ}
              className="px-4 py-2 rounded-full bg-ivory border border-turmeric/35 text-charcoal text-sm font-medium shadow-sm"
            >
              ✦ {occ}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Band to Quote */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-maroon text-cream p-8 sm:p-14 text-center shadow-warm space-y-4">
          <span className="font-accent text-2xl text-turmeric font-semibold block">
            Partner With Mumbai&apos;s Trusted Caterers
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Ready to plan your unforgettable feast?
          </h2>
          <p className="text-cream/80 text-base max-w-xl mx-auto">
            Contact us today for custom wedding packages, sample tastings, and direct chef consultations.
          </p>
          <div className="pt-4">
            <Button href="/quote" variant="primary" size="lg">
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
