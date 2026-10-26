"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { siteConfig } from "@/data/site";
import { MandalaWatermark } from "@/components/ui/MandalaWatermark";

export function HomeQuoteSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory border-t border-charcoal/10 relative overflow-hidden">
      <MandalaWatermark
        size={600}
        opacity={0.03}
        className="top-1/2 -right-32 -translate-y-1/2"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Get Best Quotations"
            title="Contact Us For Your Celebration"
            subtitle="Tell us about your wedding date, guest count, or venue requirements, and we will formulate an all-inclusive culinary quote."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left Column: Quick Contact Info & Response Promise (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal variant="fadeUp" delay={0.1}>
              <div className="rounded-3xl bg-maroon text-cream p-8 sm:p-10 shadow-warm relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="font-accent text-2xl text-turmeric font-semibold block mb-1">
                      Quick Booking Guarantee
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                      We just need a couple of hours!
                    </h3>
                    <p className="text-sm text-cream/80 mt-2 leading-relaxed">
                      {siteConfig.responsePromise}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                    <a
                      href={`tel:${siteConfig.phone.raw}`}
                      className="flex items-center gap-3 text-cream hover:text-turmeric transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-turmeric" />
                      </div>
                      <div>
                        <span className="text-xs text-cream/60 block">Direct Line / WhatsApp</span>
                        <span className="font-semibold text-white">{siteConfig.phone.display}</span>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-cream hover:text-turmeric transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-turmeric" />
                      </div>
                      <div>
                        <span className="text-xs text-cream/60 block">Official Enquiries</span>
                        <span className="font-semibold text-white">{siteConfig.email}</span>
                      </div>
                    </a>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-turmeric" />
                      </div>
                      <div>
                        <span className="text-xs text-cream/60 block">Main Headquarters</span>
                        <span className="text-cream/90">{siteConfig.offices[0].address}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <a
                        href="/quote"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gold-gradient text-charcoal font-bold text-xs shadow-sm hover:brightness-105 transition-all text-center"
                      >
                        <span>Connect &amp; Calculate</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Quote Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal variant="fadeUp" delay={0.2}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
