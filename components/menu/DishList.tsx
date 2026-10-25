"use client";

import React, { useState, useEffect } from "react";
import { Plus, Check, Sparkles, ChevronDown } from "lucide-react";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";
import { Dish } from "@/data/menu";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

interface DishListProps {
  dishes: Dish[];
  searchQuery?: string;
  sectionTitle?: string;
}

export function DishList({ dishes, searchQuery, sectionTitle }: DishListProps) {
  const [visibleCount, setVisibleCount] = useState(18);
  const { isDishSelected, toggleDish } = useQuoteSelection();

  // Reset pagination when section changes
  useEffect(() => {
    setVisibleCount(18);
  }, [sectionTitle, searchQuery]);

  const visibleDishes = dishes.slice(0, visibleCount);
  const hasMore = visibleCount < dishes.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 18);
  };

  const renderHighlightedName = (text: string, query?: string) => {
    if (!query || query.trim() === "") return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          className="bg-accent/20 text-accent-dark font-semibold rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (dishes.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl bg-peach/40 border border-accent/15 max-w-lg mx-auto">
        <p className="text-ink/70 text-sm">
          No dishes found matching &quot;{searchQuery}&quot;.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 1 / 2 / 3 responsive column grid per Section 6.5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {visibleDishes.map((dish) => {
          const isSelected = isDishSelected(dish.name);
          const hasExtraNote =
            dish.name.includes("Extra Rs.30/-") ||
            dish.name === "Butter Scotch Halwa" ||
            dish.name === "Akhrot Halwa" ||
            dish.extraPriceNote;

          const cleanName = dish.name.replace(/\(Extra Rs\.30\/-\)/gi, "").trim();

          return (
            <div
              key={dish.name}
              className={cn(
                "group relative flex flex-col justify-between p-3.5 rounded-2xl bg-paper border border-ink/10 transition-all duration-200 hover:shadow-card hover:-translate-y-0.5",
                isSelected && "border-accent/40 bg-peach/20"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {/* Tiny leaf dot */}
                    <span
                      className="w-2 h-2 rounded-full bg-leaf shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-ink break-words hyphens-auto leading-snug">
                      {renderHighlightedName(cleanName, searchQuery)}
                    </h4>
                  </div>

                  {dish.description && (
                    <p className="text-xs text-ink/70 mt-1 line-clamp-2 leading-relaxed pl-4">
                      {dish.description}
                    </p>
                  )}

                  {/* Chips: Extra Rs.30/- or Jain/Popular */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2 pl-4">
                    {hasExtraNote && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-peach px-2 py-0.5 rounded-full border border-accent/20">
                        Extra Rs.30/-
                      </span>
                    )}
                    {dish.isJainAvailable && (
                      <span className="text-[10px] font-semibold text-leaf bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Jain Available
                      </span>
                    )}
                    {dish.isPopular && (
                      <span className="text-[10px] font-semibold text-accent-dark bg-peach/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-accent" />
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* + to add to Quote list */}
                <button
                  type="button"
                  onClick={() => toggleDish(dish.name)}
                  aria-label={
                    isSelected
                      ? `Remove ${cleanName} from quote`
                      : `Add ${cleanName} to quote list`
                  }
                  className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-xs cursor-pointer",
                    isSelected
                      ? "bg-accent text-white shadow-xs scale-105"
                      : "bg-peach/60 text-ink/60 hover:bg-accent hover:text-white border border-accent/20"
                  )}
                >
                  {isSelected ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progressive Disclosure Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-ink/10 text-xs text-ink/60">
        <span>
          Showing {Math.min(visibleCount, dishes.length)} of {dishes.length} dishes
        </span>

        {hasMore && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleShowMore}
            className="flex items-center gap-1.5"
          >
            <span>Show more dishes ({dishes.length - visibleCount} remaining)</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
