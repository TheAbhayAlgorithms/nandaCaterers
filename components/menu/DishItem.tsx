"use client";

import React from "react";
import { Plus, Check } from "lucide-react";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";
import { cn } from "@/lib/cn";

interface DishItemProps {
  name: string;
  searchQuery?: string;
  className?: string;
}

export function DishItem({ name, searchQuery, className }: DishItemProps) {
  const { isDishSelected, toggleDish } = useQuoteSelection();
  const isSelected = isDishSelected(name);

  // Check for special notes like (Extra Rs.30/-)
  const hasExtraCharge = name.includes("(Extra Rs.30/-)");
  const cleanName = name.replace("(Extra Rs.30/-)", "").trim();

  // Render text with search highlight if applicable
  const renderHighlightedName = (text: string, query?: string) => {
    if (!query || query.trim() === "") return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          className="bg-turmeric/40 text-charcoal font-semibold rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={cn(
        "group relative flex items-center justify-between py-2 px-3 rounded-xl transition-all duration-200 hover:bg-saffron/10",
        isSelected && "bg-saffron/15",
        className
      )}
    >
      {/* Leading Veg Dot & Name */}
      <div className="flex items-center gap-2.5 min-w-0 pr-2">
        <span
          className="w-2 h-2 rounded-full bg-leaf shrink-0 group-hover:scale-125 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="font-medium text-sm md:text-base text-charcoal truncate">
          {renderHighlightedName(cleanName, searchQuery)}
        </span>

        {hasExtraCharge && (
          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-maroon/10 text-maroon shrink-0">
            Extra Rs.30/-
          </span>
        )}
      </div>

      {/* Dotted Leader Line */}
      <div className="flex-1 mx-2 border-b border-dotted border-charcoal/20 group-hover:border-saffron transition-colors" />

      {/* Add / Added Action Button */}
      <button
        onClick={() => toggleDish(name)}
        aria-label={isSelected ? `Remove ${cleanName} from quote` : `Add ${cleanName} to quote list`}
        className={cn(
          "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 text-xs",
          isSelected
            ? "bg-leaf text-white shadow-sm"
            : "text-charcoal/40 hover:text-maroon hover:bg-white"
        )}
      >
        {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </button>
    </div>
  );
}
