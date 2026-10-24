"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for backdrop & shadow
      setIsScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up (mobile behavior)
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
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Food Menu", href: "/menu", isMenu: true },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-cream/90 backdrop-blur-md shadow-warm py-3 border-b border-turmeric/20"
            : "bg-transparent py-5",
          isNavVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/#gallery";

              if (link.isMenu) {
                return (
                  <div
                    key={link.name}
                    onMouseEnter={handleMouseEnterMenu}
                    onMouseLeave={handleMouseLeaveMenu}
                    className="relative py-2"
                  >
                    <button
                      onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                      className={cn(
                        "relative flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron rounded-md",
                        isActive || isMegaMenuOpen
                          ? "text-maroon"
                          : "text-charcoal hover:text-maroon"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-saffron transition-transform duration-200",
                          isMegaMenuOpen && "rotate-180"
                        )}
                      />
                      {/* Active indicator */}
                      {(isActive || isMegaMenuOpen) && (
                        <span className="absolute bottom-0 inset-x-0 h-0.5 bg-saffron rounded-full" />
                      )}
                    </button>

                    <MegaMenu
                      isOpen={isMegaMenuOpen}
                      onClose={() => setIsMegaMenuOpen(false)}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-semibold tracking-wide transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron rounded-md",
                    isActive ? "text-maroon" : "text-charcoal hover:text-maroon"
                  )}
                >
                  <span>{link.name}</span>
                  {/* Underline grow effect */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-saffron transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Direct call & Get Quote */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="flex items-center gap-2 text-xs font-semibold text-charcoal hover:text-maroon transition-colors py-2 px-3 rounded-xl hover:bg-ivory"
            >
              <Phone className="w-4 h-4 text-saffron" />
              <span>{siteConfig.phone.display}</span>
            </a>

            <Button href="/contact#quote-form" variant="primary" size="md">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu & Quote Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact#quote-form"
              className="px-3.5 py-1.5 rounded-xl bg-gold-gradient text-charcoal font-semibold text-xs shadow-sm"
            >
              Quote
            </Link>

            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2.5 rounded-xl text-charcoal hover:text-maroon hover:bg-ivory transition-colors"
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
