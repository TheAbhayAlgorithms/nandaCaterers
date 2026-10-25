"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function ServiceDetailActions({ serviceSlug }: { serviceSlug: string }) {
  const { openQuoteSheet } = useQuoteSelection();

  const serviceCategoryMap: Record<string, string> = {
    wedding: "Wedding",
    corporate: "Corporate Event",
    family: "Party / Function",
    party: "Party / Function",
    decoration: "General Event",
    social: "General Event",
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <Button
        variant="filled"
        size="md"
        className="w-full sm:w-auto"
        onClick={() => openQuoteSheet(serviceCategoryMap[serviceSlug] || "Wedding")}
      >
        Enquire about this
      </Button>
      <Button
        variant="outline"
        size="md"
        href="/menu"
        className="w-full sm:w-auto"
      >
        See Menu
      </Button>
    </div>
  );
}
