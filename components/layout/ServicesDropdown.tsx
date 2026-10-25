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
          className="absolute top-full left-0 w-[340px] bg-ivory bg-[#FFFDF7] rounded-3xl shadow-[0_24px_70px_-15px_rgba(42,27,22,0.35),0_1px_0_rgba(255,255,255,1)_inset] border border-turmeric/40 p-3.5 overflow-hidden z-50 mt-3 before:absolute before:inset-x-0 before:-top-4 before:h-4 text-charcoal"
        >
          <div className="p-2 border-b border-charcoal/10 flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-hover font-lora">
              Our Event Specialities
            </span>
            <Link
              href="/services"
              onClick={onClose}
              className="text-xs font-bold text-maroon hover:text-saffron flex items-center gap-1 transition-colors"
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
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-cream/90 hover:shadow-[0_2px_8px_rgba(42,27,22,0.04)] border border-transparent hover:border-turmeric/25 transition-all group"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-turmeric via-saffron to-turmeric text-charcoal flex items-center justify-center shrink-0 group-hover:scale-110 shadow-sm transition-transform duration-200">
                    <Icon className="w-4 h-4 text-charcoal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-charcoal group-hover:text-maroon transition-colors truncate">
                      {service.title}
                    </p>
                    <p className="text-[10px] text-charcoal/60 truncate mt-0.5">
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
