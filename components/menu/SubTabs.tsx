"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SubSectionTab {
  title: string;
  count: number;
}

interface SubTabsProps {
  sections: SubSectionTab[];
  activeSection: string;
  onSelectSection: (title: string) => void;
  className?: string;
}

export function SubTabs({
  sections,
  activeSection,
  onSelectSection,
  className,
}: SubTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const activeBtn = containerRef.current.querySelector(
        `[data-section="${encodeURIComponent(activeSection)}"]`
      ) as HTMLElement | null;
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSection]);

  if (sections.length <= 1) return null;

  return (
    <div
      className={cn(
        "sticky top-[68px] z-20 bg-[#FFF8EF] border-b border-accent/15 py-2.5 shadow-xs transition-all",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        <div
          ref={containerRef}
          role="tablist"
          aria-label="Cuisine Sub-sections"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 snap-x"
          style={{ scrollbarWidth: "none" }}
        >
          {sections.map((sec) => {
            const isActive = sec.title === activeSection;

            return (
              <button
                key={sec.title}
                role="tab"
                type="button"
                aria-selected={isActive}
                data-section={encodeURIComponent(sec.title)}
                onClick={() => onSelectSection(sec.title)}
                className={cn(
                  "relative isolate shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-colors snap-center select-none cursor-pointer",
                  isActive
                    ? "text-white"
                    : "text-ink/75 hover:text-accent hover:bg-paper/80"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSubSectionPill"
                    className="absolute inset-0 rounded-full bg-accent shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{sec.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
