"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, X, Trash2, ArrowRight, MessageCircle } from "lucide-react";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function QuoteTray() {
  const {
    selectedDishes,
    removeDish,
    clearSelection,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useQuoteSelection();

  if (selectedDishes.length === 0 && !isDrawerOpen) {
    return null;
  }

  const whatsappHref = buildWhatsAppLink({
    selectedDishes,
  });

  return (
    <>
      {/* Floating Bottom Pill Chip (Left side or Bottom center) */}
      <AnimatePresence>
        {selectedDishes.length > 0 && !isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-40"
          >
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-3 px-4 py-3 rounded-full bg-maroon text-white shadow-warm-lg border border-turmeric/50 hover:bg-maroon-dark transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-gold-gradient text-charcoal flex items-center justify-center font-bold text-sm">
                {selectedDishes.length}
              </div>
              <span className="font-medium text-sm md:text-base">
                Your Menu Selection
              </span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-turmeric font-semibold group-hover:bg-white/30 transition-colors">
                View Tray
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-over Tray Modal */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-ivory shadow-2xl z-50 flex flex-col justify-between border-l border-turmeric/30"
            >
              {/* Header */}
              <div className="p-5 border-b border-charcoal/10 flex items-center justify-between bg-cream/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-maroon">
                      Your Custom Menu
                    </h3>
                    <p className="text-xs text-charcoal/70">
                      {selectedDishes.length} dishes chosen for enquiry
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-full text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 transition-colors"
                  aria-label="Close tray"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dish List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-2">
                {selectedDishes.length === 0 ? (
                  <div className="text-center py-16 text-charcoal/60 space-y-3">
                    <UtensilsCrossed className="w-10 h-10 mx-auto text-charcoal/30" />
                    <p className="font-medium">No dishes added yet</p>
                    <p className="text-xs max-w-xs mx-auto">
                      Browse our food menu and click the heart or plus icon next to any dish to build your custom menu.
                    </p>
                    <Link
                      href="/menu"
                      onClick={() => setIsDrawerOpen(false)}
                      className="inline-block mt-2 text-sm text-maroon font-semibold underline hover:text-saffron"
                    >
                      Browse Food Menu
                    </Link>
                  </div>
                ) : (
                  selectedDishes.map((dish) => (
                    <div
                      key={dish}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-charcoal/10 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-leaf shrink-0" />
                        <span className="text-sm font-medium text-charcoal">
                          {dish}
                        </span>
                      </div>
                      <button
                        onClick={() => removeDish(dish)}
                        className="text-charcoal/40 hover:text-chilli p-1.5 transition-colors"
                        aria-label={`Remove ${dish}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Actions Footer */}
              {selectedDishes.length > 0 && (
                <div className="p-5 border-t border-charcoal/10 bg-cream/70 space-y-3">
                  <div className="flex items-center justify-between text-xs text-charcoal/70 mb-1">
                    <span>{selectedDishes.length} items ready for quotation</span>
                    <button
                      onClick={clearSelection}
                      className="text-chilli hover:underline font-medium"
                    >
                      Clear All
                    </button>
                  </div>

                  <Link
                    href={`/contact?dishes=${encodeURIComponent(selectedDishes.join(","))}#quote-form`}
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-charcoal font-semibold shadow-warm hover:shadow-warm-lg transition-all"
                  >
                    <span>Request Official Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Menu via WhatsApp</span>
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
