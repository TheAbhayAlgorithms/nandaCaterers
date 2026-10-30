"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Ensures that whenever a visitor manually reloads / refreshes a page (NavigationTiming type 'reload'),
 * they are seamlessly redirected back to the Home page ('/').
 * Avoids interfering with admin dashboard routes.
 */
export function RefreshRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined" || pathname === "/" || pathname?.startsWith("/admin")) {
      return;
    }

    try {
      const navigationEntries = performance.getEntriesByType("navigation");
      if (navigationEntries && navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        if (navEntry.type === "reload") {
          router.replace("/");
        }
      } else if (
        // Fallback for older browsers
        (performance as any).navigation &&
        (performance as any).navigation.type === 1
      ) {
        router.replace("/");
      }
    } catch {
      // Safe fallback if performance navigation is unavailable
    }
  }, [pathname, router]);

  return null;
}
