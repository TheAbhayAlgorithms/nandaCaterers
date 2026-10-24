import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-turmeric/20 border-t-maroon animate-spin" />
        <span className="font-heading font-extrabold text-maroon text-lg">N</span>
      </div>
      <p className="font-accent text-xl text-saffron tracking-wide">
        Preparing royal flavors...
      </p>
    </div>
  );
}
