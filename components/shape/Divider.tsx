import React from "react";

interface DividerProps {
  align?: "center" | "left" | "right";
  className?: string;
  color?: string; // e.g. "bg-accent"
}

export function Divider({ align, className, color }: DividerProps) {
  // Removed decorative dot-line underline per user request
  return null;
}
