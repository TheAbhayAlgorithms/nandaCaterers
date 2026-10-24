"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

export function SplashLoader() {
  const [showSplash, setShowSplash] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    try {
      const hasSeen = sessionStorage.getItem("nanda_splash_viewed");
      if (!hasSeen) {
        setShowSplash(true);
        sessionStorage.setItem("nanda_splash_viewed", "true");
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 1100);
        return () => clearTimeout(timer);
      }
    } catch {
      // sessionStorage issues
    }
  }, [shouldReduceMotion]);

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-cream select-none pointer-events-auto"
        >
          {/* Animated decorative ring */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-turmeric/60 animate-spin-slow" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Logo withLink={false} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <p className="font-accent text-xl text-saffron tracking-wider">
              A Perfect Blend of Sensational Food
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-turmeric animate-bounce [animation-delay:0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-maroon animate-bounce [animation-delay:0.3s]" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
