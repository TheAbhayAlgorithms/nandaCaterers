"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

interface NextStepStripProps {
  headline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryHref?: string;
  primaryAction?: "quote" | "contact";
  onPrimaryClick?: () => void;
  serviceCategory?: string;
}

export function NextStepStrip({
  headline = "Ready to Plan Your Catering Celebration?",
  primaryButtonText = "Get a Quote",
  secondaryButtonText = "View Menu",
  secondaryHref = "/menu",
  primaryAction = "quote",
  onPrimaryClick,
  serviceCategory = "Wedding",
}: NextStepStripProps) {
  const { openQuoteSheet } = useQuoteSelection();

  const handlePrimary = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      openQuoteSheet(serviceCategory);
    }
  };

  return (
    <div className="w-full bg-peach/70 border-t border-b border-accent/15 py-10 sm:py-12 px-4 text-center my-8">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink">
          {headline}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="filled" size="md" onClick={handlePrimary}>
            {primaryButtonText}
          </Button>
          {secondaryButtonText && secondaryHref && (
            <Button variant="outline" size="md" href={secondaryHref}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
