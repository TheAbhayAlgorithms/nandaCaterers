import React from "react";

interface OrnamentalDividerProps {
  className?: string;
  theme?: "maroon" | "gold" | "white";
}

export function OrnamentalDivider({ className, theme = "maroon" }: OrnamentalDividerProps) {
  // Removed decorative underline divider per user request
  return null;
}
