"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Sheet({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: SheetProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Esc key and scroll lock
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
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-night/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Sheet Container: Right-side on Desktop, Bottom Sheet on Mobile */}
          <div className="fixed inset-0 flex justify-end md:items-stretch items-end pointer-events-none">
            <motion.div
              initial={{ x: "100%", y: 0 }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: "100%", y: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) onClose();
              }}
              className={cn(
                "pointer-events-auto w-full md:max-w-xl bg-paper shadow-2xl flex flex-col h-[90svh] md:h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl border-t md:border-t-0 md:border-l border-accent/20 overflow-hidden",
                className
              )}
            >
              {/* Mobile Drag Indicator */}
              <div className="md:hidden w-full pt-3 pb-1 flex justify-center">
                <div className="w-12 h-1.5 rounded-full bg-ink/20" />
              </div>

              {/* Sheet Header */}
              <div className="px-6 py-4 border-b border-black/5 flex items-center justify-between bg-peach/40 shrink-0">
                <div>
                  {title && (
                    <h3 className="font-heading font-bold text-lg md:text-xl text-ink">
                      {title}
                    </h3>
                  )}
                  {description && (
                    <p className="text-xs text-ink/70 mt-0.5">{description}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close sheet"
                  className="p-2 rounded-full text-ink/60 hover:text-ink hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sheet Body */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
