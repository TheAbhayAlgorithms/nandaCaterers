"use client";

import React from "react";
import { Star, MessageSquare, ExternalLink } from "lucide-react";
import {
  demoTestimonials,
  demoGoogleRating,
  SHOW_DEMO_CONTENT,
} from "@/data/siteContent";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";

export function HomeTestimonials() {
  const activeTestimonials = demoTestimonials.filter(
    (item) => SHOW_DEMO_CONTENT || !item.isDemo
  );

  const showRating = SHOW_DEMO_CONTENT || !demoGoogleRating.isDemo;

  if (activeTestimonials.length === 0 && !showRating) {
    return null;
  }

  return (
    <section className="w-full py-16 sm:py-20 bg-cream border-t border-ink/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Stack */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <Eyebrow text="CLIENT EXPERIENCES" />
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink mt-1">
            Celebrated by Hosts Across Mumbai
          </h2>
          <Divider align="center" color="bg-accent" />

          {/* Google Rating Badge */}
          {showRating && (
            <div className="mt-4">
              <a
                href={demoGoogleRating.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-paper border border-ink/10 shadow-xs hover:shadow-card hover:border-accent/40 transition-all text-xs sm:text-sm text-ink group"
                aria-label={`Google Rating ${demoGoogleRating.rating} stars out of 5 from ${demoGoogleRating.reviewCount} reviews`}
              >
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-ink">
                  {demoGoogleRating.rating.toFixed(1)}
                </span>
                <span className="text-ink/60">
                  ({demoGoogleRating.reviewCount} reviews on Google)
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-accent opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          )}
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-paper border border-ink/10 p-6 sm:p-7 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <MessageSquare className="w-5 h-5 text-accent/40" />
                </div>

                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink">
                    {item.name}
                  </h4>
                  <span className="text-[11px] font-medium text-accent">
                    {item.eventType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
