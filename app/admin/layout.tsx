import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, Image as ImageIcon, LayoutDashboard, ExternalLink, LogOut } from "lucide-react";
import { logoutAdminAction } from "./actions";

export const metadata: Metadata = {
  title: "Admin Portal | Nanda Caterers",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col font-sans">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#7A1F2B] text-white shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
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

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2">
              <Link
                href="/admin"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/menu"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Menu Manager</span>
              </Link>
              <Link
                href="/admin/gallery"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Gallery Manager</span>
              </Link>
            </nav>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors"
            >
              <span>View on site</span>
              <ExternalLink className="w-3 h-3 text-[#C9A227]" />
            </Link>

            <form action={logoutAdminAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/20 hover:bg-black/35 text-white/90 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                title="Sign out of Admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </form>
          </div>
        </div>

        {/* Mobile secondary tab strip */}
        <div className="md:hidden border-t border-white/10 bg-[#5C1A1B] px-4 py-2 flex items-center justify-around text-xs">
          <Link
            href="/admin"
            className="flex items-center gap-1 px-2.5 py-1 text-white/90 hover:text-white"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/menu"
            className="flex items-center gap-1 px-2.5 py-1 text-white/90 hover:text-white"
          >
            <Utensils className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Menu</span>
          </Link>
          <Link
            href="/admin/gallery"
            className="flex items-center gap-1 px-2.5 py-1 text-white/90 hover:text-white"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Gallery</span>
          </Link>
        </div>
      </header>

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}

