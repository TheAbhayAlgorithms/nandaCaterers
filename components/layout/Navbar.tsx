"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, UtensilsCrossed, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileDrawer } from "./MobileDrawer";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  const { selectedDishes, setIsDrawerOpen } = useQuoteSelection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 10) {
          setIsNavVisible(false);
        } else if (lastScrollY.current - currentScrollY > 10) {
          setIsNavVisible(true);
        }
      } else {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterMenu = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    menuTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 220);
  };

  const handleMouseEnterServices = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 220);
  };

  // Dedicated routes without anchors
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", isServices: true },
    { name: "Menu", href: "/menu", isMenu: true },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none px-3 sm:px-6 lg:px-8",
          isScrolled ? "pt-2 md:pt-3" : "pt-3 md:pt-5",
          isNavVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        )}
      >
        <div
          className={cn(
            "max-w-[1380px] mx-auto px-4 sm:px-6 py-2.5 md:py-3 rounded-2xl md:rounded-full pointer-events-auto transition-all duration-500 flex items-center justify-between",
            isScrolled
              ? "bg-ivory/92 backdrop-blur-xl border border-turmeric/35 shadow-[0_12px_40px_-12px_rgba(122,31,43,0.18),0_1px_0_rgba(255,255,255,0.9)_inset]"
              : "bg-maroon-deep/80 backdrop-blur-xl border border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.08)_inset]"
          )}
        >
          {/* Logo with adaptive light/dark theme */}
          <Logo theme={isScrolled ? "dark" : "light"} />

          {/* Desktop Navigation: Floating Pill Items with Micro-glow Indicator */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              const hasDropdown = link.isServices || link.isMenu;
              const isDropdownOpen =
                (link.isServices && isServicesOpen) || (link.isMenu && isMegaMenuOpen);

              const linkContent = (
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] font-medium tracking-wide transition-all duration-200 cursor-pointer select-none group leading-none",
                    isActive || isDropdownOpen
                      ? isScrolled
                        ? "text-maroon font-semibold bg-maroon/8 shadow-[0_1px_2px_rgba(122,31,43,0.08)] ring-1 ring-maroon/20"
                        : "text-turmeric font-semibold bg-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.2)] ring-1 ring-turmeric/30"
                      : isScrolled
                      ? "text-charcoal/75 hover:text-maroon hover:bg-maroon/5"
                      : "text-cream/90 hover:text-white hover:bg-white/8"
                  )}
                >
                  <span className="leading-none">{link.name}</span>
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 shrink-0 transition-transform duration-200",
                        isActive || isDropdownOpen
                          ? isScrolled
                            ? "text-maroon"
                            : "text-turmeric"
                          : isScrolled
                          ? "text-charcoal/40 group-hover:text-maroon"
                          : "text-cream/60 group-hover:text-white",
                        isDropdownOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  )}

                  {/* Micro glowing active bead indicator */}
                  {(isActive || isDropdownOpen) && (
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full pointer-events-none transition-all duration-300",
                        isScrolled
                          ? "bg-maroon shadow-[0_0_6px_rgba(122,31,43,0.5)]"
                          : "bg-turmeric shadow-[0_0_8px_rgba(232,176,4,0.8)]"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );

              // Services Dropdown
              if (link.isServices) {
                return (
                  <div
                    key={link.name}
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                    className="relative flex items-center"
                  >
                    {linkContent}
                    <ServicesDropdown
                      isOpen={isServicesOpen}
                      onClose={() => setIsServicesOpen(false)}
                    />
                  </div>
                );
              }

              // Menu Mega Menu
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
                      isOpen={isMegaMenuOpen}
                      onClose={() => setIsMegaMenuOpen(false)}
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

          {/* Action CTAs: Direct call, Quote Basket & Get Quote */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quote Basket button in header if dishes selected */}
            {selectedDishes.length > 0 && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                aria-label={`View your quote basket with ${selectedDishes.length} dishes`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-maroon text-cream text-xs font-semibold shadow-warm hover:bg-maroon-dark transition-all ring-1 ring-turmeric/40 active:scale-95"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-turmeric" />
                <span>Basket ({selectedDishes.length})</span>
              </button>
            )}

            {/* Direct Call Pill */}
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className={cn(
                "group flex items-center gap-2.5 py-1.5 px-3.5 rounded-full transition-all duration-300 select-none",
                isScrolled
                  ? "bg-cream/70 hover:bg-cream border border-charcoal/10 hover:border-maroon/25 text-charcoal hover:text-maroon shadow-sm"
                  : "bg-white/8 hover:bg-white/15 border border-white/12 hover:border-turmeric/40 text-cream hover:text-white shadow-sm"
              )}
              aria-label={`Call Nanda Caterers at ${siteConfig.phone.display}`}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-200",
                  isScrolled
                    ? "bg-maroon/10 text-maroon"
                    : "bg-turmeric/20 text-turmeric"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
              </span>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] uppercase tracking-wider font-semibold opacity-70">
                  Direct Call
                </span>
                <span className="text-xs font-bold tracking-tight mt-0.5">
                  {siteConfig.phone.display}
                </span>
              </div>
            </a>

            {/* Shimmering Gold "Get Quote" Pill CTA */}
            <Link
              href="/quote"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm text-charcoal shadow-[0_4px_20px_rgba(232,176,4,0.35)] hover:shadow-[0_6px_25px_rgba(232,176,4,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-turmeric via-saffron to-turmeric bg-[length:200%_auto] hover:bg-right select-none before:absolute before:inset-0 before:w-1/2 before:h-full before:bg-white/35 before:skew-x-[-25deg] before:-translate-x-full hover:before:translate-x-[350%] before:transition-transform before:duration-700"
            >
              <Sparkles className="w-3.5 h-3.5 text-charcoal transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Get Quote</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {selectedDishes.length > 0 && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open quote basket"
                className="w-9 h-9 rounded-full bg-maroon text-white flex items-center justify-center relative shadow-sm ring-1 ring-turmeric/30"
              >
                <UtensilsCrossed className="w-4 h-4 text-turmeric" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-saffron text-charcoal text-[10px] font-bold flex items-center justify-center">
                  {selectedDishes.length}
                </span>
              </button>
            )}

            <Link
              href="/quote"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-turmeric to-saffron text-charcoal font-bold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all"
            >
              Quote
            </Link>

            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="Open mobile navigation menu"
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled
                  ? "text-charcoal hover:text-maroon hover:bg-maroon/10"
                  : "text-cream hover:text-turmeric hover:bg-white/15"
              )}
            >
              <Menu className="w-5 h-5" />
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
