"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        previousActiveElement.current?.focus();
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-night/70 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <div className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-4 z-50 relative pointer-events-none">
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn(
                "pointer-events-auto w-full sm:max-w-[880px] md:max-w-[980px] lg:max-w-[1040px] max-h-[94svh] bg-paper shadow-2xl rounded-t-3xl sm:rounded-3xl border border-accent/25 flex flex-col overflow-hidden",
                className
              )}
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-black/5 flex items-center justify-between bg-peach/40 shrink-0">
                {title && (
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-ink">
                    {title}
                  </h3>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="p-2 ml-auto rounded-full text-ink/60 hover:text-ink hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
