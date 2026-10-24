"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribeScrollY = scrollY.on("change", (latest) => {
      setIsVisible(latest > 600);
    });
    const unsubscribeProgress = scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });

    return () => {
      unsubscribeScrollY();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 18; // r = 18
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-ivory text-maroon shadow-warm-lg border border-turmeric/40 hover:bg-cream hover:scale-105 active:scale-95 transition-transform"
        >
          {/* Circular progress SVG */}
          <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#E8B004"
              strokeOpacity="0.2"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#F29A1F"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-maroon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
