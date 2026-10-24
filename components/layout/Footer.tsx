"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";
import { menuCategories } from "@/data/menu";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-cream/80 overflow-hidden border-t-2 border-turmeric/40">
      {/* Top Accent Gradient Bar */}
      <div className="h-1.5 w-full bg-gold-gradient" />

      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Guarantee (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo theme="light" />
            
            <p className="text-sm leading-relaxed text-cream/70 max-w-sm">
              {siteConfig.subline}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-cream/80 space-y-1.5">
              <span className="font-semibold text-turmeric uppercase tracking-wider block">
                Response Guarantee
              </span>
              <p className="leading-relaxed text-cream/90">{siteConfig.responsePromise}</p>
            </div>

            {/* Accessible Social Media Icons */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-cream/60 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.social.facebook.ariaLabel}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-cream hover:bg-saffron hover:text-charcoal hover:border-saffron transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.social.instagram.ariaLabel}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-cream hover:bg-saffron hover:text-charcoal hover:border-saffron transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={siteConfig.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.social.youtube.ariaLabel}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-cream hover:bg-saffron hover:text-charcoal hover:border-saffron transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide border-b border-white/10 pb-2">
              Main Pages
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "All Services", href: "/services" },
                { name: "Food Menus", href: "/menu" },
                { name: "Packages & Pricing", href: "/packages" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "Client Reviews", href: "/testimonials" },
                { name: "Service Areas", href: "/service-areas" },
                { name: "Catering FAQs", href: "/faq" },
                { name: "Blog & Guides", href: "/blog" },
                { name: "Contact & Offices", href: "/contact" },
                { name: "Get Quote", href: "/quote" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-cream/70 hover:text-saffron hover:translate-x-1 transition-all duration-200"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Cuisines (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h4 className="font-heading font-bold text-base text-white tracking-wide border-b border-white/10 pb-2 mb-3">
                Catering Services
              </h4>
              <ul className="space-y-1.5 text-xs">
                {[
                  { name: "Wedding Catering", href: "/services/wedding" },
                  { name: "Corporate Events", href: "/services/corporate" },
                  { name: "Birthday & Parties", href: "/services/birthday-and-parties" },
                  { name: "Family Functions & Poojas", href: "/services/family-functions" },
                  { name: "Catering Decoration", href: "/services/decoration" },
                  { name: "Social & Festivals", href: "/services/social-events" },
                ].map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1 text-cream/70 hover:text-saffron hover:translate-x-1 transition-all"
                    >
                      <span className="text-saffron text-[10px]">›</span>
                      <span>{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-base text-white tracking-wide border-b border-white/10 pb-2 mb-3">
                Popular Cuisines
              </h4>
              <ul className="grid grid-cols-2 gap-1 text-xs">
                {menuCategories.slice(0, 6).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/menu/${cat.slug}`}
                      className="text-cream/70 hover:text-saffron transition-colors block py-0.5 truncate"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Both Offices & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white tracking-wide border-b border-white/10 pb-2">
              Mumbai Offices
            </h4>
            <div className="space-y-3.5 text-xs text-cream/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Main Office (Bandra East):</span>
                  <span>{siteConfig.offices[0].address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Branch Office (Khar East):</span>
                  <span>{siteConfig.offices[1].address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="hover:text-saffron transition-colors text-white font-medium"
                >
                  {siteConfig.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-saffron shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-saffron transition-colors text-cream underline font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-turmeric pt-1">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{siteConfig.workingHours.days}: {siteConfig.workingHours.time}</span>
              </div>
            </div>

            {/* Quick WhatsApp Channel Connect */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.phone.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {currentYear} Nanda Caterers. All rights reserved. 100% Pure Vegetarian Catering.</p>
          
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-saffron transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-saffron transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-saffron transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-saffron transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
