import React from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  color?: string; // e.g. "text-accent"
}

export function Eyebrow({ children, text, className, color = "text-accent" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-poppins inline-block text-[11px] sm:text-xs uppercase font-bold tracking-[0.14em] mb-2 select-none",
        color,
        className
      )}
    >
      {text || children}
    </span>
  );
}
