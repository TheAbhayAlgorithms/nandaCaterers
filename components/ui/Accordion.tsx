"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItemData {
  id?: string;
  question?: string;
  title?: string;
  answer?: React.ReactNode;
  content?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIndex,
  className,
}: AccordionProps) {
  const initialOpenId =
    defaultOpenIndex !== undefined && items[defaultOpenIndex]
      ? items[defaultOpenIndex].id || `item-${defaultOpenIndex}`
      : "";

  const [openIds, setOpenIds] = useState<string[]>(initialOpenId ? [initialOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, idx) => {
        const itemId = item.id || `item-${idx}`;
        const itemHeading = item.question || item.title || "";
        const itemBody = item.answer || item.content;
        const isOpen = openIds.includes(itemId);

        return (
          <div
            key={itemId}
            className="rounded-2xl border border-charcoal/10 bg-ivory shadow-sm transition-colors overflow-hidden"
          >
            <button
              type="button"
              id={`accordion-header-${itemId}`}
              aria-controls={`accordion-panel-${itemId}`}
              aria-expanded={isOpen}
              onClick={() => toggle(itemId)}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left font-heading font-semibold text-base sm:text-lg text-maroon hover:text-saffron transition-colors cursor-pointer"
            >
              <span className="pr-4">{itemHeading}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 text-saffron transition-transform duration-300",
                  isOpen && "rotate-180 text-maroon"
                )}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${itemId}`}
                  role="region"
                  aria-labelledby={`accordion-header-${itemId}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 md:px-6 pt-0 text-charcoal/80 text-sm leading-relaxed border-t border-charcoal/5">
                    {itemBody}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
