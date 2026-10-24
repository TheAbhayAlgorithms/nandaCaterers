"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, slideLeft, slideRight } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
  delay?: number;
  duration?: number;
  className?: string;
}

const variantsMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
};

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const selectedVariant = variantsMap[variant] || fadeUp;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
