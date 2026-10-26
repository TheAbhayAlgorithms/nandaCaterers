"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribeScrollY = scrollY.on("change", (latest) => {
      setIsVisible(latest > 600);
    });

    return () => {
      unsubscribeScrollY();
    };
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-40 right-7 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-white text-ink shadow-warm-lg border border-black/10 hover:bg-cream hover:text-accent hover:border-accent/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
