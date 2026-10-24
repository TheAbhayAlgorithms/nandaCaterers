"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";
import { menuCategories } from "@/data/menu";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-cream/80 overflow-hidden border-t-2 border-turmeric/40">
      {/* Decorative top accent line */}
      <div className="h-1.5 w-full bg-gold-gradient" />

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Promise (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo theme="light" />
            <p className="text-sm leading-relaxed text-cream/70 max-w-sm">
              {siteConfig.subline}
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-cream/80 space-y-1.5">
              <span className="font-semibold text-turmeric uppercase tracking-wider block">
                Response Guarantee
              </span>
              <p className="leading-relaxed">{siteConfig.responsePromise}</p>
            </div>

            {/* Social Icons with circular fill and 360 rotation */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Facebook", href: siteConfig.social.facebook, label: "Facebook" },
                { name: "Instagram", href: siteConfig.social.instagram, label: "Instagram" },
                { name: "Twitter / X", href: siteConfig.social.twitter, label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream/80 hover:bg-saffron hover:text-charcoal hover:border-saffron hover:rotate-[360deg] transition-all duration-500 font-bold text-xs"
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-lg text-white tracking-wide border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Food Menus", href: "/menu" },
                { name: "Photo Gallery", href: "/#gallery" },
                { name: "Contact & Locations", href: "/contact" },
                { name: "Get Quotation", href: "/contact#quote-form" },
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

          {/* Col 3: Cuisines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-lg text-white tracking-wide border-b border-white/10 pb-2">
              Popular Cuisines
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm">
              {menuCategories.slice(0, 7).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/menu/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-cream/70 hover:text-saffron hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="text-saffron text-xs">›</span>
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-turmeric font-semibold hover:underline pt-1 text-xs uppercase tracking-wider"
                >
                  <span>View All 13 Categories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-lg text-white tracking-wide border-b border-white/10 pb-2">
              Mumbai Offices
            </h4>
            <div className="space-y-4 text-xs text-cream/70">
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
                  className="hover:text-saffron transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-turmeric">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Footer Help Links */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {currentYear} Nanda Caterers. All rights reserved. 100% Pure Vegetarian Catering.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-saffron transition-colors">
              Customer Service
            </Link>
            <Link href="/contact#faq" className="hover:text-saffron transition-colors">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-saffron transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
