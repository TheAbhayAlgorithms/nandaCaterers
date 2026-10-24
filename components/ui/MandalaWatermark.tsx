import React from "react";
import { cn } from "@/lib/cn";

interface MandalaWatermarkProps {
  className?: string;
  size?: number;
  opacity?: number;
  direction?: "normal" | "reverse";
}

export function MandalaWatermark({
  className,
  size = 600,
  opacity = 0.04,
  direction = "normal",
}: MandalaWatermarkProps) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute flex items-center justify-center transition-opacity",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "text-maroon",
          direction === "normal" ? "animate-spin-slow" : "animate-spin-slow [animation-direction:reverse]"
        )}
      >
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 2" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.5" />
        
        {/* Radial Petals */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 100 100)`}>
            <path
              d="M100 30 C95 45 92 65 100 80 C108 65 105 45 100 30 Z"
              fill="currentColor"
              opacity="0.3"
            />
            <circle cx="100" cy="20" r="2.5" fill="currentColor" />
            <path
              d="M100 50 C93 60 93 75 100 85 C107 75 107 60 100 50 Z"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </g>
        ))}

        {/* Outer Lotus Petals */}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 100 100)`}>
            <path
              d="M100 10 C92 30 88 55 100 70 C112 55 108 30 100 10 Z"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              opacity="0.4"
            />
            <polygon points="100,5 103,12 100,10 97,12" fill="currentColor" />
          </g>
        ))}
      </svg>
    </div>
  );
}
