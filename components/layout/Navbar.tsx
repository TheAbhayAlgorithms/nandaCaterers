"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);

  const { openQuoteSheet } = useQuoteSelection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterMenu = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    menuTimeout.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  // Header navigation per Section 4.1
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Food Menu", href: "/menu", isMenu: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#FFF8EF] shadow-md py-3 border-b border-accent/15 text-ink"
            : "bg-transparent py-4 sm:py-5 text-white"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo left */}
          <Logo theme={isScrolled ? "dark" : "light"} />

          {/* Desktop Navigation right in small type */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav aria-label="Main Navigation" className="flex items-center gap-5 xl:gap-7 text-xs sm:text-[13px] font-semibold tracking-wide uppercase">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                const linkContent = (
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 py-1 transition-colors hover:text-accent relative",
                      isActive
                        ? isScrolled
                          ? "text-accent font-bold"
                          : "text-accent font-bold"
                        : isScrolled
                        ? "text-ink/85"
                        : "text-white/90"
                    )}
                  >
                    <span>{link.name}</span>
                    {link.isMenu && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 shrink-0 transition-transform duration-200",
                          isMenuOpen ? "rotate-180" : ""
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );

                if (link.isMenu) {
                  return (
                    <div
                      key={link.name}
                      onMouseEnter={handleMouseEnterMenu}
                      onMouseLeave={handleMouseLeaveMenu}
                      className="relative flex items-center"
                    >
                      {linkContent}
                      <MegaMenu
                        isOpen={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                      />
                    </div>
                  );
                }

                return (
                  <div key={link.name} className="relative flex items-center">
                    {linkContent}
                  </div>
                );
              })}
            </nav>

            {/* Far right: round phone icon button (tel:) + pill Get Quote button */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                aria-label={`Call Nanda Caterers at ${siteConfig.phone.display}`}
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-200 border",
                  isScrolled
                    ? "bg-paper text-accent border-accent/25 hover:bg-accent hover:text-white shadow-xs"
                    : "bg-white/15 text-white border-white/25 hover:bg-accent hover:border-accent shadow-xs"
                )}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{siteConfig.phone.display}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteSheet("Wedding")}
                className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider bg-accent text-white shadow-soft hover:bg-accent-dark transition-all active:scale-95"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile: logo + hamburger, opens full-screen drawer */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openQuoteSheet("Wedding")}
              className="rounded-full px-3.5 py-1.5 text-xs font-bold bg-accent text-white shadow-sm"
            >
              Quote
            </button>

            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="Open mobile navigation menu"
              className={cn(
                "p-2 rounded-xl transition-colors",
                isScrolled ? "text-ink hover:bg-black/5" : "text-white hover:bg-white/10"
              )}
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
