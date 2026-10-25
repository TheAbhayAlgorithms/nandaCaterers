"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={onClose}
        >
          {/* Close button: positioned lower so it doesn't get hidden under browser UI */}
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-6 sm:top-8 right-6 sm:right-8 z-50 rounded-full bg-black/70 sm:bg-white/15 backdrop-blur-md p-3 text-white border border-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-accent shadow-xl cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-saffron"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-saffron"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-[85vw] max-w-[900px] h-[65vh] max-h-[650px]">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 900px"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 absolute bottom-0 inset-x-0 text-white">
              <p className="font-heading font-semibold text-lg">{currentImage.title}</p>
              <p className="text-xs text-turmeric uppercase tracking-wider">{currentImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
