"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileDrawer } from "./MobileDrawer";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const { openQuoteSheet } = useQuoteSelection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header navigation per Section 4.1 - Food Menu links directly to /menu (no popover)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Food Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#1B1210]/95 backdrop-blur-md shadow-md py-3 border-b border-white/10 text-white"
            : "bg-transparent py-4 sm:py-5 text-white"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo left */}
          <Logo theme="light" />

          {/* Desktop Navigation right in small type */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav
              aria-label="Main Navigation"
              className="flex items-center gap-5 xl:gap-7 text-xs sm:text-[13px] font-semibold tracking-wide uppercase"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "inline-flex items-center py-1 transition-colors hover:text-accent relative",
                      isActive
                        ? "text-accent font-bold"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Far right: complete phone number (tel:) + pill Connect button */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                aria-label={`Call Nanda Caterers at ${siteConfig.phone.display}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 border bg-white/15 text-white border-white/25 hover:bg-accent hover:border-accent shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{siteConfig.phone.display}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteSheet("Wedding")}
                className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider bg-accent text-white shadow-soft hover:bg-accent-dark transition-all active:scale-95 cursor-pointer"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Mobile: logo + hamburger, opens full-screen drawer */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openQuoteSheet("Wedding")}
              className="rounded-full px-3.5 py-1.5 text-xs font-bold bg-accent text-white shadow-sm cursor-pointer"
            >
              Connect
            </button>

            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-2 rounded-xl transition-colors cursor-pointer text-white hover:bg-white/10"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />
    </>
  );
}
