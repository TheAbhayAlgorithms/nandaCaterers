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
      <div className="relative group">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Nanda Caterers on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-warm-lg hover:brightness-105 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          {/* Blinking notification/beacon dot on top corner */}
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 pointer-events-none">
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white shadow-xs animate-[pulse_1.4s_ease-in-out_infinite]" />
          </span>

          {/* Message speech bubble icon with subtle blinking animation */}
          <MessageCircle className="w-7 h-7 fill-white/20 animate-[pulse_2s_ease-in-out_infinite]" />
        </a>

        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-ink text-white text-xs font-medium whitespace-nowrap shadow-md pointer-events-none">
          {selectedDishes.length > 0
            ? `Enquire with ${selectedDishes.length} selected dishes`
            : "Chat on WhatsApp"}
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink" />
        </div>
      </div>
    </div>
  );
}
