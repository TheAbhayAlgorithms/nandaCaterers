"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";
import { menuCategories } from "@/data/menu";
import { detailedServices } from "@/data/services";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream shadow-2xl flex flex-col justify-between overflow-y-auto safe-bottom"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Drawer Header */}
            <div className="p-5 flex items-center justify-between border-b border-charcoal/10 bg-ivory sticky top-0 z-10">
              <Logo withLink={false} />
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 rounded-xl text-charcoal/70 hover:text-charcoal hover:bg-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-5 flex-1 space-y-2">
              <Link
                href="/"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                Home
              </Link>
              
              <Link
                href="/about"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                About Us
              </Link>

              {/* Services Accordion */}
              <div className="rounded-xl border border-charcoal/10 bg-ivory overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-expanded={isServicesOpen}
                  className="w-full flex items-center justify-between p-3.5 font-lora font-semibold text-lg text-maroon text-left cursor-pointer"
                >
                  <span>Catering Services</span>
                  <ChevronDown
                    className={`w-5 h-5 text-saffron transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-cream/50 px-3 pb-3 border-t border-charcoal/5"
                    >
                      <Link
                        href="/services"
                        onClick={onClose}
                        className="block py-2 px-3 text-xs font-bold text-maroon uppercase tracking-wider underline mb-1"
                      >
                        All Services Overview →
                      </Link>
                      <div className="space-y-1">
                        {detailedServices.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            onClick={onClose}
                            className="block py-1.5 px-3 rounded-lg text-sm font-medium text-charcoal/80 hover:text-maroon hover:bg-ivory transition-colors"
                          >
                            {srv.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Food Menu Accordion */}
              <div className="rounded-xl border border-charcoal/10 bg-ivory overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-expanded={isMenuOpen}
                  className="w-full flex items-center justify-between p-3.5 font-lora font-semibold text-lg text-maroon text-left cursor-pointer"
                >
                  <span>Food Menu</span>
                  <ChevronDown
                    className={`w-5 h-5 text-saffron transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-cream/50 px-3 pb-3 border-t border-charcoal/5"
                    >
                      <Link
                        href="/menu"
                        onClick={onClose}
                        className="block py-2 px-3 text-xs font-bold text-maroon uppercase tracking-wider underline mb-1"
                      >
                        All 13 Cuisines Hub →
                      </Link>
                      <div className="space-y-1">
                        {menuCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/menu/${cat.slug}`}
                            onClick={onClose}
                            className="block py-1.5 px-3 rounded-lg text-sm font-medium text-charcoal/80 hover:text-maroon hover:bg-ivory transition-colors"
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/packages"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                Catering Packages
              </Link>

              <Link
                href="/gallery"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                Photo Gallery
              </Link>

              <Link
                href="/testimonials"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                Client Reviews
              </Link>

              <Link
                href="/service-areas"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                Service Areas
              </Link>

              <Link
                href="/faq"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="block p-3 rounded-xl font-lora font-semibold text-lg text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
              >
                Contact & Offices
              </Link>

              {/* Get Instant Quote CTA */}
              <div className="pt-3">
                <Link
                  href="/quote"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold-gradient text-charcoal font-semibold shadow-warm text-base"
                >
                  Start Custom Quotation
                </Link>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="p-5 border-t border-charcoal/10 bg-ivory text-xs text-charcoal/70 space-y-2">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="flex items-center gap-2 text-charcoal hover:text-maroon transition-colors"
              >
                <Phone className="w-4 h-4 text-saffron" />
                <span>{siteConfig.phone.display}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-charcoal hover:text-maroon transition-colors"
              >
                <Mail className="w-4 h-4 text-saffron" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>Bandra (East) & Khar (East), Mumbai</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
