import React from "react";
import { cn } from "@/lib/cn";

interface VegBadgeProps {
  className?: string;
}

export function VegBadge({ className }: VegBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-leaf border border-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm select-none",
        className
      )}
    >
      {/* Indian Veg Symbol (Green square with green circle) */}
      <div className="w-4 h-4 rounded-[3px] border-2 border-leaf flex items-center justify-center p-[2px]">
        <div className="w-2 h-2 rounded-full bg-leaf" />
      </div>
      <span>100% Vegetarian</span>
    </div>
  );
}
