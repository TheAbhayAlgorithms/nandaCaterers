"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface PublicLayoutWrapperProps {
  children: React.ReactNode;
}

/**
 * Wraps public-only chrome components (Navbar, Footer, WhatsApp FAB, etc.)
 * and ensures they do not render on administrative routes.
 */
export function PublicLayoutWrapper({ children }: PublicLayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return null;
  }

  return <>{children}</>;
}
