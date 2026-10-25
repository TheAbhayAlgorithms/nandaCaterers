"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  MapPin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { fivePrimaryFaqs } from "@/data/faq";
import { QuoteForm } from "./QuoteForm";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { NextStepStrip } from "@/components/shape/NextStepStrip";
import { cn } from "@/lib/cn";

type ContactTabKey = "enquiry" | "visit" | "faq";

interface ContactTabsProps {
  initialService?: string;
  initialDishes?: string[];
}

export function ContactTabs({ initialService, initialDishes }: ContactTabsProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const serviceParam = searchParams.get("service") || initialService;
  const dishesParam = searchParams.get("dishes");
  const parsedDishes = dishesParam ? dishesParam.split(",") : initialDishes;

  const validTabs: ContactTabKey[] = ["enquiry", "visit", "faq"];
  const tabParam = searchParams.get("tab") as ContactTabKey | null;
  const currentTab: ContactTabKey = validTabs.includes(tabParam || "enquiry")
    ? (tabParam as ContactTabKey) || "enquiry"
    : "enquiry";

  const [activeTab, setActiveTab] = useState<ContactTabKey>(currentTab);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ open by default

  useEffect(() => {
    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam);
    } else if (!tabParam) {
      setActiveTab("enquiry");
    }
  }, [tabParam]);

  useEffect(() => {
    const handlePopState = () => {
      const currentUrl = new URL(window.location.href);
      const tab = currentUrl.searchParams.get("tab") as ContactTabKey | null;
      if (tab && validTabs.includes(tab)) {
        setActiveTab(tab);
      } else {
        setActiveTab("enquiry");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleTabChange = (key: ContactTabKey) => {
    setActiveTab(key);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", key);
    const newUrl = `/contact?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  const tabs: { key: ContactTabKey; label: string }[] = [
    { key: "enquiry", label: "Send Enquiry" },
    { key: "visit", label: "Visit Us" },
    { key: "faq", label: "FAQ" },
  ];

  return (
    <div className="w-full">
      {/* Segmented Pill Control per Section 6.6 & 7 */}
      <div className="py-8 bg-paper border-b border-ink/10 flex justify-center">
        <div
          role="tablist"
          aria-label="Contact options"
          className="inline-flex p-1.5 rounded-full bg-cream/80 border border-ink/10 shadow-xs"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => handleTabChange(tab.key)}
                className={cn(
                  "relative isolate px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer select-none",
                  isActive
                    ? "text-white"
                    : "text-ink/70 hover:text-accent hover:bg-paper/60"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="contactTabPill"
                    className="absolute inset-0 rounded-full bg-accent shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels with AnimatePresence */}
      <SectionShell className="pt-10 sm:pt-14 pb-20">
        <AnimatePresence mode="wait">
          {/* TAB 1: SEND ENQUIRY */}
          {activeTab === "enquiry" && (
            <motion.div
              key="enquiry"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Quote Form */}
              <div className="lg:col-span-7 bg-paper p-6 sm:p-8 md:p-10 rounded-2xl border border-ink/10 shadow-card">
                <div className="mb-6">
                  <Eyebrow text="REQUEST A QUOTE" />
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-ink mt-1">
                    Tell Us About Your Event
                  </h2>
                  <Divider align="left" className="my-2" />
                  <p className="text-xs sm:text-sm text-ink/70">
                    Fill out the form below. We will reply within 2 working hours.
                  </p>
                </div>

                <QuoteForm
                  initialService={serviceParam}
                  initialDishes={parsedDishes}
                />
              </div>

              {/* Right Column: Short Contact Card per Section 6.6 */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-peach/60 p-6 sm:p-8 rounded-2xl border border-accent/20 shadow-xs space-y-6">
                  <div>
                    <Eyebrow text="DIRECT REACH" />
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink mt-1">
                      Quick Assistance
                    </h3>
                    <Divider align="left" className="my-2" />
                    <p className="text-xs text-ink/75 leading-relaxed">
                      Prefer speaking with our catering directors directly? We are available Monday to Saturday, 9 AM to 9 PM.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Phone click-to-call */}
                    <a
                      href={siteConfig.phoneTel}
                      className="flex items-center gap-3 p-3 rounded-xl bg-paper border border-ink/10 hover:border-accent/40 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-ink/45 block">
                          Call Us
                        </span>
                        <span className="font-semibold text-ink group-hover:text-accent">
                          {siteConfig.phone.display}
                        </span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-paper border border-ink/10 hover:border-accent/40 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-ink/45 block">
                          Email Enquiries
                        </span>
                        <span className="font-semibold text-ink group-hover:text-accent truncate block">
                          {siteConfig.email}
                        </span>
                      </div>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-leaf text-white font-semibold shadow-xs hover:opacity-95 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    {/* Hours */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-paper/60 border border-ink/10">
                      <Clock className="w-4 h-4 text-ink/50 shrink-0" />
                      <div className="text-xs text-ink/75">
                        <span className="font-semibold text-ink block">
                          Working Hours
                        </span>
                        <span>{siteConfig.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: VISIT US */}
          {activeTab === "visit" && (
            <motion.div
              key="visit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Two Office Cards per Section 6.6 */}
              <div className="lg:col-span-5 space-y-6">
                {/* Main Office Card */}
                <div className="bg-paper p-6 sm:p-7 rounded-2xl border border-ink/10 shadow-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      Headquarters
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-ink">
                    Main Office
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/75 mt-2 leading-relaxed">
                    {siteConfig.offices[0].address}
                  </p>
                  <div className="mt-4 pt-4 border-t border-ink/10 flex items-center justify-between text-xs">
                    <span className="text-ink/60">{siteConfig.hours}</span>
                    <a
                      href={siteConfig.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                      <span>Get directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Branch Office Card */}
                <div className="bg-paper p-6 sm:p-7 rounded-2xl border border-ink/10 shadow-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      Branch Facility
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-ink">
                    Branch Office
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/75 mt-2 leading-relaxed">
                    {siteConfig.offices[1].address}
                  </p>
                  <div className="mt-4 pt-4 border-t border-ink/10 flex items-center justify-between text-xs">
                    <span className="text-ink/60">{siteConfig.hours}</span>
                    <a
                      href={siteConfig.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                      <span>Get directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Google Maps Embed (Lazy iframe) per Section 6.6 & 10 */}
              <div className="lg:col-span-7 h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-ink/10 shadow-card bg-cream">
                <iframe
                  title="Nanda Caterers Mumbai Location"
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          )}

          {/* TAB 3: FAQ */}
          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <div className="text-center mb-8">
                <Eyebrow text="FREQUENTLY ASKED QUESTIONS" />
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-ink mt-1">
                  Everything You Need to Know
                </h2>
                <Divider align="center" className="my-2" />
                <p className="text-xs sm:text-sm text-ink/70">
                  Got questions about our catering, bookings, or areas served? Find clear answers below.
                </p>
              </div>

              {/* 5 Q&A Accordion (one open at a time) per Section 6.6 & 9.5 */}
              <div className="space-y-3">
                {fivePrimaryFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl bg-paper border border-ink/10 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? null : idx)
                        }
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-peach/30 transition-colors"
                      >
                        <span className="font-heading font-semibold text-sm sm:text-base text-ink">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-accent shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-ink/75 leading-relaxed border-t border-ink/5">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionShell>

      {/* One-strip NextStepStrip CTA per Section 1 Rule 5 */}
      <NextStepStrip
        headline="Ready to plan an unforgettable culinary feast?"
        primaryButtonText="Get a Quote"
        primaryAction="quote"
        secondaryButtonText="Explore Menu"
        secondaryHref="/menu"
      />
    </div>
  );
}
