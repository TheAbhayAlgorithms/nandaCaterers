"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface MenuSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function MenuSearch({
  value,
  onChange,
  placeholder = "Search dishes in this category (e.g. Paneer, Kofta, Dosa)...",
}: MenuSearchProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto my-6">
      <div className="relative flex items-center">
        <Search className="w-5 h-5 text-charcoal/40 absolute left-4 pointer-events-none" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-3 rounded-2xl bg-ivory border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3.5 p-1 text-charcoal/40 hover:text-charcoal transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
