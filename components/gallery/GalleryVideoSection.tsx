"use client";

import React from "react";
import { Film, Play } from "lucide-react";
import { demoGalleryVideo, SHOW_DEMO_CONTENT } from "@/data/siteContent";

export function GalleryVideoSection({ className = "" }: { className?: string }) {
  const showVideoSection = SHOW_DEMO_CONTENT || !demoGalleryVideo.isDemo;
  if (!showVideoSection) return null;

  const hasVideoUrl = !!demoGalleryVideo.videoUrl?.trim();

  return (
    <div className={`max-w-4xl mx-auto mb-12 px-4 ${className}`}>
      {hasVideoUrl ? (
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-ink/10 shadow-warm bg-black">
          <iframe
            src={demoGalleryVideo.videoUrl}
            title={demoGalleryVideo.title || "Nanda Caterers Event Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      ) : (
        <div className="rounded-3xl bg-[#1B1210] text-white p-8 sm:p-12 text-center relative overflow-hidden border border-white/10 shadow-warm">
          {/* Subtle decorative glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-accent/20 text-accent border border-accent/30 flex items-center justify-center mb-4 shadow-sm">
              <Film className="w-6 h-6 text-accent" />
            </div>

            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-accent mb-2">
              VIDEO SHOWCASE
            </span>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Event video coming soon
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              We are currently capturing cinematic highlights of our lavish wedding buffets, artisanal live stations, and grand hospitality setups. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
