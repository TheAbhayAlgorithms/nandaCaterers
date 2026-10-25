import React from "react";
import { cn } from "@/lib/cn";

interface DividerProps {
  align?: "center" | "left" | "right";
  className?: string;
  color?: string; // e.g. "bg-accent"
}

export function Divider({ align = "center", className, color = "bg-accent" }: DividerProps) {
  const alignClasses = {
    center: "justify-center mx-auto",
    left: "justify-start",
    right: "justify-end ml-auto",
  };

  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-2 my-3 select-none", alignClasses[align], className)}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", color)} />
      <span className={cn("w-10 h-0.5 rounded-full shrink-0", color)} />
      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", color)} />
    </div>
  );
}
