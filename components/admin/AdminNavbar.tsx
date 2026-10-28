"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Utensils,
  Image as ImageIcon,
  LayoutDashboard,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { logoutAdminAction } from "@/app/admin/actions";

export function AdminNavbar() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  const navLinks = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      isActive: pathname === "/admin",
    },
    {
      name: "Menu Manager",
      href: "/admin/menu",
      icon: Utensils,
      isActive: pathname.startsWith("/admin/menu"),
    },
    {
      name: "Gallery Manager",
      href: "/admin/gallery",
      icon: ImageIcon,
      isActive: pathname.startsWith("/admin/gallery"),
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#7A1F2B] text-white shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand & Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/admin"
            className="flex items-center gap-2.5 font-heading font-extrabold text-lg sm:text-xl text-white hover:text-[#C9A227] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#C9A227] text-[#1B1210] flex items-center justify-center font-bold text-sm shadow-xs">
              NC
            </div>
            <span>Nanda Admin</span>
          </Link>

          {/* Desktop Navigation Links */}
          {!isLoginPage && (
            <nav className="hidden md:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      link.isActive
                        ? "bg-white/20 text-white shadow-xs border border-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors"
          >
            <span>View on site</span>
            <ExternalLink className="w-3 h-3 text-[#C9A227]" />
          </Link>

          {!isLoginPage && (
            <form action={logoutAdminAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/25 hover:bg-black/40 text-white/90 hover:text-white text-xs font-medium border border-white/10 transition-colors cursor-pointer"
                title="Sign out of Admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Mobile secondary tab strip */}
      {!isLoginPage && (
        <div className="md:hidden border-t border-white/10 bg-[#5C1A1B] px-3 py-1.5 flex items-center justify-around text-xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${
                  link.isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{link.name.replace(" Manager", "")}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

