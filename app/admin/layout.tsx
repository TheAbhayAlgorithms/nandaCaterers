import React from "react";
import type { Metadata } from "next";
import { AdminNavbar } from "@/components/admin/AdminNavbar";

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
    <div className="min-h-screen bg-cream text-ink flex flex-col font-sans admin-portal">
      {/* Top Admin Navigation Bar */}
      <AdminNavbar />

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
