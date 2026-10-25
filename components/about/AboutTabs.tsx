"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { BentoGrid } from "@/components/shape/BentoGrid";
import { BentoTile } from "@/components/shape/BentoTile";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { NextStepStrip } from "@/components/shape/NextStepStrip";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";
import { ClocheIcon } from "@/components/services/ServiceIcons";
import { cn } from "@/lib/cn";

const tabsList = [
  { id: "story", label: "Our Story" },
  { id: "reach", label: "Our Reach" },
  { id: "crew", label: "Our Crew" },
  { id: "numbers", label: "In Numbers" },
];

export function AboutTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get("tab") || "story";

  const setTab = (tabId: string) => {
    router.replace(`/about?tab=${tabId}`, { scroll: false });
  };

  return (
    <div className="w-full">
      {/* Segmented Pill Control */}
      <div className="flex justify-center mb-10 px-4">
        <div className="inline-flex p-1.5 rounded-full bg-peach/80 border border-accent/20 gap-1 overflow-x-auto max-w-full">
          {tabsList.map((t) => {
            const isActive = currentTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none whitespace-nowrap",
                  isActive
                    ? "bg-accent text-white shadow-soft"
                    : "text-ink/70 hover:text-ink hover:bg-white/40"
                )}
                role="tab"
                aria-selected={isActive}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels with cross-fade (Section 7) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {/* TAB 1: OUR STORY */}
          {currentTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Text Left */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <span className="text-xs uppercase font-bold tracking-widest text-accent">
                  Since 2005
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                  A Legacy of Pure Vegetarian Excellence
                </h2>

                <div className="space-y-3 text-ink/80 text-sm sm:text-base leading-relaxed">
                  {aboutData.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Timeline mini (3 nodes) */}
                <div className="pt-4 border-t border-black/5 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-accent">
                    Milestones
                  </h4>
                  <div className="space-y-2.5">
                    {aboutData.timeline.map((node) => (
                      <div key={node.year} className="flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded-full bg-peach text-accent font-bold text-xs shrink-0">
                          {node.year}
                        </span>
                        <div className="text-xs sm:text-sm">
                          <strong className="text-ink">{node.title}: </strong>
                          <span className="text-ink/70">{node.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button href="/services" variant="filled" size="md">
                    See Our Services
                  </Button>
                </div>
              </div>

              {/* Bento Right */}
              <div className="lg:col-span-6 w-full flex justify-center">
                <BentoGrid>
                  <BentoTile
                    type="photo"
                    imageSrc="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
                  />
                  <BentoTile type="accent" className="bg-accent text-white">
                    <ClocheIcon className="w-8 h-8 text-white mb-2" />
                    <span className="font-heading font-bold text-lg text-white">15+ Years</span>
                    <span className="text-xs text-white/80">Benchmark Purity</span>
                  </BentoTile>
                  <BentoTile type="accent" className="bg-accent text-white">
                    <span className="font-heading font-bold text-2xl text-white">5,000+</span>
                    <span className="text-xs text-white/80">Satisfied Hosts</span>
                  </BentoTile>
                  <BentoTile
                    type="photo"
                    imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                  />
                </BentoGrid>
              </div>
            </motion.div>
          )}

          {/* TAB 2: OUR REACH */}
          {currentTab === "reach" && (
            <motion.div
              key="reach"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Text Left */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <span className="text-xs uppercase font-bold tracking-widest text-accent">
                  Service Areas
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
                  Serving Across Western India
                </h2>

                <p className="text-ink/80 text-sm sm:text-base leading-relaxed">
                  {aboutData.reachParagraph}
                </p>

                {/* 5 Location Chips */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
                    Primary Hubs & Destination Cities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.locations.map((loc) => (
                      <span
                        key={loc}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peach text-ink font-semibold text-xs border border-accent/20"
                      >
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span>{loc}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Occasions Chip Cloud */}
                <div className="pt-4 border-t border-black/5">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
                    What We Do (Occasions)
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {aboutData.occasions.map((occ) => (
                      <span
                        key={occ}
                        className="px-2.5 py-1 rounded-lg bg-paper text-ink/80 text-xs font-medium border border-black/10"
                      >
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Right */}
              <div className="lg:col-span-6 w-full flex justify-center">
                <BentoGrid>
                  <BentoTile
                    type="photo"
                    imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
                  />
                  <BentoTile type="accent" className="bg-accent text-white">
                    <span className="font-heading font-bold text-lg text-white">Destination</span>
                    <span className="text-xs text-white/80">Goa & Pune Caravans</span>
                  </BentoTile>
                  <BentoTile type="accent" className="bg-accent text-white">
                    <span className="font-heading font-bold text-lg text-white">Mumbai & Thane</span>
                    <span className="text-xs text-white/80">Express Hubs</span>
                  </BentoTile>
                  <BentoTile
                    type="photo"
                    imageSrc="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  />
                </BentoGrid>
              </div>
            </motion.div>
          )}

          {/* TAB 3: OUR CREW */}
          {currentTab === "crew" && (
            <motion.div
              key="crew"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs uppercase font-bold tracking-widest text-accent">
                  Dedicated Leadership
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink mt-1">
                  The Masterminds Behind Every Feast
                </h2>
                <p className="text-ink/70 text-xs sm:text-sm mt-2">
                  Our disciplined chefs, seasoned banquet captains, and kitchen stewards work in synchrony to serve flawless hospitality.
                </p>
              </div>

              {/* 3 Role-Based Placeholder Cards per Section 6.1 & 9.3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {aboutData.crew.map((member) => (
                  <div
                    key={member.role}
                    className="p-6 rounded-2xl bg-paper border border-accent/15 shadow-soft flex flex-col items-center text-center"
                  >
                    {/* Illustrated-initials avatar per Section 6.1 */}
                    <div className="w-16 h-16 rounded-full bg-peach border-2 border-accent text-accent font-heading font-extrabold text-xl flex items-center justify-center mb-4 shadow-sm">
                      {member.initials}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-ink">
                      {member.name}
                    </h3>
                    <p className="text-xs text-ink/70 mt-1">
                      {member.experience}
                    </p>
                    <span className="mt-3 text-[10px] text-accent/80 font-mono">
                      // Verified Leadership
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: IN NUMBERS */}
          {currentTab === "numbers" && (
            <motion.div
              key="numbers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs uppercase font-bold tracking-widest text-accent">
                  Track Record
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink mt-1">
                  15+ Years of Benchmark Statistics
                </h2>
              </div>

              {/* 4 Animated Counters per Section 6.1 */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="p-6 rounded-2xl bg-paper border border-accent/15 shadow-soft flex flex-col items-center text-center">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-accent mb-1">
                    <Counter value={siteConfig.stats.varieties.value} suffix={siteConfig.stats.varieties.suffix} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Foods Variety
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-paper border border-accent/15 shadow-soft flex flex-col items-center text-center">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-accent mb-1">
                    <Counter value={siteConfig.stats.customers.value} suffix={siteConfig.stats.customers.suffix} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Satisfied Customers
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-paper border border-accent/15 shadow-soft flex flex-col items-center text-center">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-accent mb-1">
                    <Counter value={siteConfig.stats.years.value} suffix={siteConfig.stats.years.suffix} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Years of Experience
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-paper border border-accent/15 shadow-soft flex flex-col items-center text-center">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-accent mb-1">
                    <Counter value={siteConfig.stats.freshness.value} suffix={siteConfig.stats.freshness.suffix} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Fresh & Tasty Food %
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* One-strip CTA per Section 6.1 */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8">
        <NextStepStrip
          headline="Ready to plan your event?"
          primaryButtonText="Get a Quote"
          secondaryButtonText="View Menu"
          secondaryHref="/menu"
        />
      </div>
    </div>
  );
}
