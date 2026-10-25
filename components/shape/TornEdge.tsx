import React from "react";
import { generateTornPath } from "@/lib/tornPath";
import { cn } from "@/lib/cn";

interface TornEdgeProps {
  position?: "top" | "bottom";
  color?: string; // color of the fill, e.g. "text-paper" or "text-night" or hex
  variant?: number;
  className?: string;
}

export function TornEdge({
  position = "bottom",
  color = "var(--paper)",
  variant = 0,
  className,
}: TornEdgeProps) {
  const isTop = position === "top";
  const pathD = generateTornPath(variant, isTop);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full overflow-hidden leading-none pointer-events-none select-none z-20",
        isTop ? "absolute top-0 inset-x-0" : "absolute bottom-0 inset-x-0",
        className
      )}
      style={{ height: "clamp(16px, 2.8vw, 36px)" }}
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ fill: color }}
      >
        <path d={pathD} />
      </svg>
    </div>
  );
}
