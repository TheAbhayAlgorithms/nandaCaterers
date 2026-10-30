"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Handles reloading behavior:
 * If a user manually reloads the browser while on a sub-page,
 * redirect them to the home page once on that initial page load.
 * Subsequent client-side transitions (e.g. clicking 'Food Menu')
 * will NOT be blocked or bounced back to home.
 */
export function RefreshRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const hasChecked = useRef(false);

  useEffect(() => {
    // Only check ONCE on initial window load
    if (hasChecked.current || typeof window === "undefined") {
      return;
    }
    hasChecked.current = true;

    // Do not redirect if already on home or in admin
    if (pathname === "/" || pathname?.startsWith("/admin")) {
      return;
    }

    try {
      const navigationEntries = performance.getEntriesByType("navigation");
      let isReload = false;

      if (navigationEntries && navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        isReload = navEntry.type === "reload";
      } else if (
        (performance as any).navigation &&
        (performance as any).navigation.type === 1
      ) {
        isReload = true;
      }

      if (isReload) {
        // Clear navigation entries to prevent re-triggering on subsequent client transitions
        if (performance.clearResourceTimings) {
          performance.clearResourceTimings();
        }
        router.replace("/");
      }
    } catch {
      // Safe fallback
    }
  }, [pathname, router]);

  return null;
}
