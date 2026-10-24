"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowDown, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const words = "A Perfect Blend of Sensational Food".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] min-h-[min(100svh,900px)] flex items-center justify-center overflow-hidden bg-maroon-dark">
      {/* Background Image with warm dark-maroon gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Indian Wedding Feast Catering"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-[0.45] saturate-[1.1]"
        />
        {/* Layered Rich Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-maroon-dark/75 to-maroon/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-maroon-dark/50 to-charcoal/90" />
      </div>

      {/* Floating Decorative Elements: Marigold Petals, Chilli, Cardamom */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
          {/* Marigold Petal 1 */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[8%] w-10 h-10 opacity-70"
          >
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-turmeric">
              <path
                d="M20 2 C12 12 10 24 20 38 C30 24 28 12 20 2 Z"
                fill="#E8B004"
                opacity="0.8"
              />
              <circle cx="20" cy="20" r="4" fill="#F29A1F" />
            </svg>
          </motion.div>

          {/* Marigold Petal 2 */}
          <motion.div
            animate={{
              y: [0, -35, 0],
              x: [0, -20, 0],
              rotate: [0, -60, 0],
            }}
            transition={{ duration: 9, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-[10%] w-12 h-12 opacity-60"
          >
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path
                d="M20 2 C10 14 8 26 20 38 C32 26 30 14 20 2 Z"
                fill="#F29A1F"
                opacity="0.75"
              />
              <circle cx="20" cy="20" r="5" fill="#E8B004" />
            </svg>
          </motion.div>

          {/* Floating Spices: Cardamom */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [20, 50, 20],
            }}
            transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[22%] w-6 h-8 opacity-50"
          >
            <svg viewBox="0 0 24 32" fill="none" className="w-full h-full text-leaf">
              <ellipse cx="12" cy="16" rx="8" ry="14" fill="#2F6B3C" opacity="0.6" />
              <path d="M12 2 L12 30" stroke="#E8B004" strokeWidth="1" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Floating Spices: Chilli Accent */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [-15, 20, -15],
            }}
            transition={{ duration: 10, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-[18%] w-8 h-10 opacity-55"
          >
            <svg viewBox="0 0 30 40" fill="none" className="w-full h-full">
              <path
                d="M15 4 C10 15 8 28 20 36 C16 26 18 14 15 4 Z"
                fill="#C8372D"
                opacity="0.8"
              />
              <path d="M15 4 C16 1 18 0 20 1" stroke="#2F6B3C" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 pt-28 pb-20">
        {/* Eyebrow in script font */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-turmeric/30 mb-6"
        >
          <Sparkles className="w-4 h-4 text-turmeric" />
          <span className="font-accent text-2xl sm:text-3xl text-turmeric font-semibold tracking-wide">
            Nanda Caterers • Since 2005
          </span>
          <span className="text-xs font-sans uppercase font-bold text-leaf bg-cream px-2 py-0.5 rounded-full ml-1">
            100% Veg
          </span>
        </motion.div>

        {/* Headline with word-by-word staggered masked slide-up */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-heading font-extrabold text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.08] tracking-tight mb-8"
        >
          {words.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-[0.28em] align-top">
              <motion.span variants={wordVariants} className="inline-block">
                {word === "Sensational" ? (
                  <span className="text-transparent bg-clip-text bg-gold-gradient italic">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-cream font-normal leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm"
        >
          Wedding catering with new ideas, made to your requirements, served in our own benchmark style across Mumbai.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/menu" variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
            <span>Explore Menu</span>
            <ChevronRight className="w-5 h-5" />
          </Button>

          <Button
            href="/quote"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] border-white text-white hover:border-maroon"
          >
            Get Instant Quote
          </Button>
        </motion.div>
      </div>

      {/* Subtle Bobbing Scroll-down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
        }}
      >
        <span className="text-[11px] uppercase tracking-widest text-cream/70 font-semibold">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-turmeric" />
      </motion.div>
    </section>
  );
}
