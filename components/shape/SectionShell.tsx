import React from "react";
import { cn } from "@/lib/cn";

interface SectionShellProps {
  id?: string;
  as?: React.ElementType;
  className?: string; // class for the outer band (e.g. bg-paper, bg-peach, bg-cream, bg-night)
  containerClassName?: string;
  children: React.ReactNode;
}

export function SectionShell({
  id,
  as: Component = "section",
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <Component
      id={id}
      className={cn("w-full relative overflow-hidden", className)}
      style={{
        paddingTop: "clamp(3rem, 6.5vw, 5.5rem)",
        paddingBottom: "clamp(3rem, 6.5vw, 5.5rem)",
      }}
    >
      <div
        className={cn("max-w-[1200px] mx-auto w-full relative z-10", containerClassName)}
        style={{
          paddingLeft: "clamp(1rem, 4vw, 3rem)",
          paddingRight: "clamp(1rem, 4vw, 3rem)",
        }}
      >
        {children}
      </div>
    </Component>
  );
}
