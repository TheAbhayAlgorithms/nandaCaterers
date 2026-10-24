"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HeartHandshake, Briefcase, PartyPopper, Flower2, Sparkles, Users } from "lucide-react";
import { detailedServices } from "@/data/services";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceIcons = {
  wedding: HeartHandshake,
  corporate: Briefcase,
  "birthday-and-parties": PartyPopper,
  "family-functions": Users,
  decoration: Flower2,
  "social-events": Sparkles,
};

export function ServicesDropdown({ isOpen, onClose }: ServicesDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseLeave={onClose}
          className="absolute top-full left-0 w-80 bg-ivory rounded-2xl shadow-2xl border border-turmeric/25 p-3 overflow-hidden z-50 backdrop-blur-xl"
        >
          <div className="p-2 border-b border-charcoal/10 flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron">
              Our Event Specialities
            </span>
            <Link
              href="/services"
              onClick={onClose}
              className="text-xs font-semibold text-maroon hover:underline flex items-center gap-1"
            >
              <span>Overview</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-1">
            {detailedServices.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Sparkles;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-gradient text-charcoal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-charcoal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-charcoal group-hover:text-maroon transition-colors truncate">
                      {service.title}
                    </p>
                    <p className="text-[10px] text-charcoal/60 truncate">
                      {service.guestRange}
                    </p>
                  </div>
                  <ArrowRight className="w-3 h-3 text-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
