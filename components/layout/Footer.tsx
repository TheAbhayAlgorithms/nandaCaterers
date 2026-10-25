"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (name: string) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <footer className="w-full bg-night text-white/80 border-t border-accent/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Brand Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
          <Logo theme="light" />

          {/* Social Icons: Facebook, X, Instagram, WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={siteConfig.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* X */}
            <a
              href={siteConfig.social.x.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={siteConfig.social.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop: Compact 3 columns (Contact, Working hours, Quick links) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 pb-12">
          {/* Column 1: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-accent">
              Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.offices[0].address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${siteConfig.phone.raw}`} className="hover:text-white transition-colors">
                  {siteConfig.phone.display}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Working hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-accent">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>{siteConfig.workingHours.days}</span>
              </p>
              <p className="font-semibold text-white/90 pl-6">
                {siteConfig.workingHours.time}
              </p>
              <p className="text-xs text-white/50 pl-6 pt-1">
                {siteConfig.responsePromise}
              </p>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-accent">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">Food Menu</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile: Accordion for 3 sections */}
        <div className="md:hidden divide-y divide-white/10 border-b border-white/10 mb-8">
          {/* Contact Mobile */}
          <div>
            <button
              onClick={() => toggleSection("contact")}
              className="w-full py-3.5 flex items-center justify-between text-left text-xs uppercase font-bold tracking-wider text-accent"
            >
              <span>Contact Information</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "contact" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "contact" && (
              <div className="pb-4 space-y-2 text-xs text-white/70">
                <p>{siteConfig.offices[0].address}</p>
                <p>Phone: {siteConfig.phone.display}</p>
                <p>Email: {siteConfig.email}</p>
              </div>
            )}
          </div>

          {/* Working hours Mobile */}
          <div>
            <button
              onClick={() => toggleSection("hours")}
              className="w-full py-3.5 flex items-center justify-between text-left text-xs uppercase font-bold tracking-wider text-accent"
            >
              <span>Working Hours</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "hours" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "hours" && (
              <div className="pb-4 space-y-1 text-xs text-white/70">
                <p>{siteConfig.workingHours.days}: {siteConfig.workingHours.time}</p>
                <p className="text-white/50">{siteConfig.responsePromise}</p>
              </div>
            )}
          </div>

          {/* Quick links Mobile */}
          <div>
            <button
              onClick={() => toggleSection("links")}
              className="w-full py-3.5 flex items-center justify-between text-left text-xs uppercase font-bold tracking-wider text-accent"
            >
              <span>Quick Links</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "links" ? "rotate-180" : ""}`} />
            </button>
            {openSection === "links" && (
              <div className="pb-4 grid grid-cols-2 gap-2 text-xs text-white/70">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/menu">Food Menu</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/contact">Contact</Link>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Row per Section 4.8 */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 pt-2 gap-2">
          <p>© 2026 Nanda Caterers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
