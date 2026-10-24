"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

export function WhatsAppFab() {
  const { selectedDishes } = useQuoteSelection();

  const href = buildWhatsAppLink({
    selectedDishes: selectedDishes.length > 0 ? selectedDishes : undefined,
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Pulse ring wrapper */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 group-hover:opacity-100 pointer-events-none" />
        
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Nanda Caterers on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          <MessageCircle className="w-7 h-7 fill-white/20" />
        </a>

        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-charcoal text-white text-xs font-medium whitespace-nowrap shadow-md pointer-events-none">
          {selectedDishes.length > 0
            ? `Enquire with ${selectedDishes.length} selected dishes`
            : "Chat on WhatsApp"}
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-charcoal" />
        </div>
      </div>
    </div>
  );
}
