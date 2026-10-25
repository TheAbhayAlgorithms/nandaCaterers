"use client";

import React from "react";
import { Sheet } from "@/components/ui/Sheet";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function QuoteSheetModal() {
  const { isQuoteSheetOpen, setIsQuoteSheetOpen, preselectedService, selectedDishes } =
    useQuoteSelection();

  return (
    <Sheet
      isOpen={isQuoteSheetOpen}
      onClose={() => setIsQuoteSheetOpen(false)}
      title="Request a Catering Quotation"
      description="Tell us about your event. We will reply with an itemized quote within 2 working hours."
    >
      <div className="space-y-4">
        {selectedDishes.length > 0 && (
          <div className="p-3 rounded-xl bg-peach text-ink text-xs font-medium flex items-center justify-between border border-accent/20">
            <span>
              <strong>{selectedDishes.length} custom dishes</strong> included in this request.
            </span>
          </div>
        )}
        <QuoteForm
          initialService={preselectedService}
          initialDishes={selectedDishes}
        />
      </div>
    </Sheet>
  );
}
