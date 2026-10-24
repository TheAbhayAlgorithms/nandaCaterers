import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 select-none" aria-label="Loading content">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Dual concentric spinner rings */}
        <div className="absolute inset-0 rounded-full border-2 border-turmeric/20 border-t-maroon animate-spin" />
        <div className="w-10 h-10 rounded-full border-2 border-dashed border-saffron/40 animate-spin-slow [animation-direction:reverse]" />
        
        {/* Subtle Central Gold Monogram */}
        <div className="w-6 h-6 rounded-md bg-maroon flex items-center justify-center shadow-sm">
          <span className="font-heading font-extrabold text-xs text-cream">N</span>
        </div>
      </div>
    </div>
  );
}
