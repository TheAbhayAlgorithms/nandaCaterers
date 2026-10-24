"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, Users, CalendarCheck, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { servicesData, occasionsList, whyChooseUsFeatures } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  Truck,
  Users,
  CalendarCheck,
  ShieldCheck,
};

export function ServicesContent() {
  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* 6 Service Cards */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Our Offerings"
            title="Complete Catering & Event Solutions"
            subtitle="Tailored banquets, live interactive food stalls, and hospitable service for every celebration."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, idx) => (
            <Reveal key={service.id} variant="fadeUp" delay={idx * 0.08} className="h-full">
              <div className="group rounded-3xl bg-ivory border border-charcoal/10 overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-maroon/90 text-white backdrop-blur-md">
                      Pure Veg
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-maroon group-hover:text-saffron transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 mt-2.5 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-charcoal/5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-charcoal/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enquire button opening quote form with service pre-selected */}
                  <div className="pt-6 border-t border-charcoal/5 mt-6">
                    <Button
                      href={`/contact?service=${encodeURIComponent(service.serviceTypeParam)}#quote-form`}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      <span>Enquire For This Event</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Band: The best catering you will ever find! */}
      <section className="bg-gradient-to-r from-maroon via-maroon-dark to-charcoal text-cream py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="font-accent text-3xl text-turmeric font-semibold block">
            Pure Indulgence
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            The best catering you will ever find!
          </h2>
          <p className="text-cream/80 text-base sm:text-lg max-w-xl mx-auto">
            Discover our vast menu collections covering Indian delicacies, royal farsan, Italian, Thai, and desserts.
          </p>
          <div className="pt-2">
            <Button href="/menu" variant="primary" size="lg">
              <span>Go to Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Nanda Caterers */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Best Service"
            title="Why Nanda Caterers"
            subtitle="Four guiding pillars that have earned us the trust of thousands of hosts over 15+ years."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyChooseUsFeatures.map((feat, idx) => {
            const Icon = iconMap[feat.icon as keyof typeof iconMap] || Sparkles;
            return (
              <Reveal key={feat.title} variant="fadeUp" delay={idx * 0.1} className="h-full">
                <div className="group rounded-3xl bg-ivory p-6 sm:p-8 border border-charcoal/10 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gold-gradient text-charcoal flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-maroon group-hover:text-saffron transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA: Get best packages from us -> Get Quotation */}
        <div className="mt-14 text-center">
          <Button href="/contact#quote-form" variant="primary" size="lg">
            <span>Get best packages from us → Get Quotation</span>
          </Button>
        </div>
      </section>

      {/* Occasions We Cater Chip Cloud */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-accent text-2xl text-saffron font-semibold block mb-2">
          Celebrations Big & Small
        </span>
        <h3 className="font-heading font-bold text-3xl text-maroon mb-6">
          Occasions We Cater
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {occasionsList.map((occasion) => (
            <span
              key={occasion}
              className="px-4 py-2 rounded-full bg-ivory border border-turmeric/35 text-charcoal text-sm font-medium shadow-sm hover:border-saffron hover:text-maroon transition-colors cursor-default"
            >
              ✦ {occasion}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
