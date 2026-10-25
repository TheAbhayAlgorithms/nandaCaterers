import React from "react";
import { cn } from "@/lib/cn";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3.5 sm:gap-4.5 w-full max-w-[540px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
