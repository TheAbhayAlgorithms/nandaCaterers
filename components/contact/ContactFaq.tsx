"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { demoFaqItems, SHOW_DEMO_CONTENT } from "@/data/siteContent";
import { cn } from "@/lib/cn";

export function ContactFaq({ className = "" }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Render demo items if SHOW_DEMO_CONTENT is true, otherwise only isDemo: false
  const activeFaqs = demoFaqItems.filter(
    (item) => SHOW_DEMO_CONTENT || !item.isDemo
  );

  if (activeFaqs.length === 0) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center max-w-xl mx-auto">
        <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-accent block mb-1">
          QUESTIONS & ANSWERS
        </span>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-ink/70 mt-1">
          Everything you need to know about our menus, tasting sessions, and banquet arrangements.
        </p>
      </div>

      <div className="space-y-3">
        {activeFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-paper border border-ink/10 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
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
    </div>
  );
}
