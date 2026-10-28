"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const length = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, length]);

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-20 lg:py-28 bg-ivory border-t border-charcoal/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Testimonials"
            title="Customer Reviews"
            subtitle="Heartfelt feedback from hosts of royal weddings and celebratory gatherings across Mumbai."
          />
        </Reveal>

        {/* Carousel Card Container */}
        <div className="relative mt-10 min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full rounded-3xl bg-cream p-8 sm:p-12 md:p-14 border border-turmeric/30 shadow-warm relative text-center"
            >
              {/* Review Icon */}
              <div className="w-12 h-12 rounded-full bg-saffron/10 text-maroon mx-auto flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-saffron" />
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6 text-turmeric">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-heading italic text-lg sm:text-2xl text-charcoal leading-relaxed max-w-2xl mx-auto mb-8">
                &ldquo;{activeTestimonial.text}&rdquo;
              </p>

              {/* Author & Details */}
              <div>
                <p className="font-heading font-bold text-lg text-maroon">
                  {activeTestimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-charcoal/60 mt-0.5">
                  {activeTestimonial.role} • {activeTestimonial.location} ({activeTestimonial.eventType})
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls: Prev / Next & Dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="w-11 h-11 rounded-full bg-white border border-charcoal/15 text-charcoal hover:bg-gold-gradient hover:border-transparent flex items-center justify-center shadow-sm transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-maroon" : "w-2.5 bg-charcoal/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="w-11 h-11 rounded-full bg-white border border-charcoal/15 text-charcoal hover:bg-gold-gradient hover:border-transparent flex items-center justify-center shadow-sm transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Link to dedicated Testimonials page */}
        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-xs font-bold text-maroon hover:text-charcoal uppercase tracking-wider underline"
          >
            <span>Read All Verified Client Reviews</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
