"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const indianCuisines = [
  { name: "Breakfast", href: "/menu/breakfast", desc: "Idli, parathas, pohe, khaman & chutneys" },
  { name: "Starter", href: "/menu/starter", desc: "Paneer tikkas, rolls, tandoori & crisp snacks" },
  { name: "Welcome Drinks", href: "/menu/welcome-drink", desc: "Mocktails, lassi, panna & coolers" },
  { name: "Main Course", href: "/menu/main-course", desc: "Rich paneer gravies, dals, pulav & breads" },
  { name: "Gujarati", href: "/menu/gujarati", desc: "Surti undhiyu, farsan, dhokla & sweets" },
  { name: "South Indian", href: "/menu/south-indian", desc: "Crisp dosas, rasam, curd rice & payasam" },
  { name: "Sweets & Mithai", href: "/menu/sweets", desc: "Warm halwas, jalebi, kheer & basundi" },
  { name: "Ice Cream & Kulfi", href: "/menu/ice-cream", desc: "Handcrafted natural kulfis & sundaes" },
];

const globalCuisines = [
  { name: "Chinese", href: "/menu/chinese", desc: "Hakka noodles, manchurian & hot gravies" },
  { name: "Continental", href: "/menu/continental", desc: "Baked dishes, gourmet salads & herb pilafs" },
  { name: "Thai", href: "/menu/thai", desc: "Aromatic green & red curries, pad thai" },
  { name: "Italian", href: "/menu/italian", desc: "Penne, lasagna, pestos & hand-tossed pizza" },
  { name: "Mexican", href: "/menu/mexican", desc: "Loaded nachos, bean tacos & fajitas" },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onMouseLeave={onClose}
          className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-5xl bg-ivory bg-[#FFFDF7] rounded-3xl shadow-[0_24px_70px_-15px_rgba(42,27,22,0.35),0_1px_0_rgba(255,255,255,1)_inset] border border-turmeric/40 p-6 md:p-8 mt-3 overflow-hidden z-50 before:absolute before:inset-x-0 before:-top-4 before:h-4 text-charcoal"
        >
          {/* Top highlight bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-wider font-semibold text-ink">
                Curated Catering Menus
              </span>
            </div>
            <Link
              href="/menu"
              onClick={onClose}
              className="text-xs md:text-sm font-semibold text-maroon hover:text-saffron flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore All 13 Cuisines Hub</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Indian Food Group (8 items) */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-saffron" />
                <h4 className="font-lora font-bold text-base md:text-lg text-maroon uppercase tracking-wide">
                  Indian Food Specialities
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {indianCuisines.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="p-2.5 rounded-2xl hover:bg-cream/90 hover:shadow-[0_2px_8px_rgba(42,27,22,0.04)] border border-transparent hover:border-turmeric/25 transition-all group flex flex-col"
                  >
                    <span className="font-semibold text-sm text-charcoal group-hover:text-maroon transition-colors flex items-center justify-between">
                      {item.name}
                      <span className="text-xs text-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </span>
                    <span className="text-[11px] text-charcoal/60 line-clamp-1 mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Global Cuisines Group (5 items) + Image Card */}
            <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-charcoal/10 md:pl-8 pt-4 md:pt-0">
              <div>
                <h4 className="font-lora font-bold text-base md:text-lg text-maroon uppercase tracking-wide mb-4">
                  Global Cuisines
                </h4>
                <div className="space-y-2">
                  {globalCuisines.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="p-2.5 rounded-2xl hover:bg-cream/90 hover:shadow-[0_2px_8px_rgba(42,27,22,0.04)] border border-transparent hover:border-turmeric/25 transition-all group flex items-center justify-between"
                    >
                      <div>
                        <span className="font-semibold text-sm text-charcoal group-hover:text-maroon transition-colors block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-charcoal/60 block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                      <span className="text-xs text-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Callout box */}
              <div className="relative mt-4 rounded-2xl overflow-hidden p-3.5 bg-gradient-to-br from-maroon via-maroon-dark to-maroon text-cream flex items-center gap-3 border border-turmeric/30 shadow-md">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-turmeric/40">
                  <Image
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=200&q=80"
                    alt="Custom menu planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-turmeric font-lora">Custom Menu Planning</p>
                  <p className="text-cream/80 text-[11px]">Need Jain, Swaminarayan, or live counter menus?</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
