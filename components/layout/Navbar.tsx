"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, UtensilsCrossed } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
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
      setIsScrolled(currentScrollY > 40);

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
    }, 200);
  };

  const handleMouseEnterServices = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-warm py-3 border-b border-turmeric/20"
            : "bg-transparent py-5",
          isNavVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with adaptive light/dark theme */}
          <Logo theme={isScrolled ? "dark" : "light"} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
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
                    "relative inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron rounded-md group leading-none",
                    isActive || isDropdownOpen
                      ? isScrolled
                        ? "text-maroon font-bold"
                        : "text-turmeric font-bold"
                      : isScrolled
                      ? "text-charcoal hover:text-maroon"
                      : "text-cream/90 hover:text-white"
                  )}
                >
                  <span className="leading-none">{link.name}</span>
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 text-saffron shrink-0 transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  )}
                  {/* Underline indicator */}
                  <span
                    className={cn(
                      "absolute bottom-0 inset-x-0 h-0.5 bg-saffron rounded-full transition-all duration-300",
                      isActive || isDropdownOpen
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                  />
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-maroon text-white text-xs font-semibold shadow-sm hover:bg-maroon-dark transition-all"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-turmeric" />
                <span>Basket ({selectedDishes.length})</span>
              </button>
            )}

            <a
              href={`tel:${siteConfig.phone.raw}`}
              className={cn(
                "flex items-center gap-2 text-xs font-semibold transition-colors py-2 px-3 rounded-xl",
                isScrolled
                  ? "text-charcoal hover:text-maroon hover:bg-ivory"
                  : "text-cream hover:text-turmeric hover:bg-white/10"
              )}
            >
              <Phone className="w-4 h-4 text-saffron" />
              <span>{siteConfig.phone.display}</span>
            </a>

            <Button href="/quote" variant="primary" size="md">
              Get Quote
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {selectedDishes.length > 0 && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open quote basket"
                className="w-9 h-9 rounded-xl bg-maroon text-white flex items-center justify-center relative shadow-sm"
              >
                <UtensilsCrossed className="w-4 h-4 text-turmeric" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-saffron text-charcoal text-[10px] font-bold flex items-center justify-center">
                  {selectedDishes.length}
                </span>
              </button>
            )}

            <Link
              href="/quote"
              className="px-3.5 py-1.5 rounded-xl bg-gold-gradient text-charcoal font-semibold text-xs shadow-sm"
            >
              Quote
            </Link>

            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-2.5 rounded-xl text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
            >
              <Menu className="w-6 h-6 text-charcoal" />
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
