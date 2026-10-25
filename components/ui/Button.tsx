"use client";

import React, { forwardRef, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "on-dark" | "text" | "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "filled",
      size = "md",
      href,
      isLoading = false,
      withArrow = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-4 py-1.5 text-xs font-semibold min-h-[38px]",
      md: "px-6 py-2.5 text-sm font-semibold min-h-[44px]",
      lg: "px-8 py-3.5 text-base font-semibold min-h-[50px]",
    };

    const variantClasses = {
      filled:
        "bg-accent text-white border border-transparent shadow-soft hover:bg-accent-dark active:scale-[0.97]",
      primary:
        "bg-accent text-white border border-transparent shadow-soft hover:bg-accent-dark active:scale-[0.97]",
      outline:
        "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200 active:scale-[0.97]",
      secondary:
        "bg-peach border border-accent/20 text-accent hover:bg-accent hover:text-white transition-colors duration-200 active:scale-[0.97]",
      ghost:
        "bg-transparent text-ink/80 hover:bg-peach/60 active:scale-[0.97]",
      "on-dark":
        "bg-transparent border border-white/70 text-white hover:bg-white hover:text-night transition-colors duration-200 active:scale-[0.97]",
      text:
        "bg-transparent p-0 min-h-0 text-accent font-semibold hover:text-accent-dark text-xs sm:text-sm inline-flex items-center gap-1 group",
    };

    const isTextVariant = variant === "text";
    const baseStyles = isTextVariant
      ? "inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent select-none"
      : "relative rounded-full inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none text-center overflow-hidden";

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        <span className="relative z-10 flex items-center gap-1.5">{children}</span>
        {withArrow && (
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
        )}
      </>
    );

    if (href && !disabled && !isLoading) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, !isTextVariant && sizeClasses[size], variantClasses[variant], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, !isTextVariant && sizeClasses[size], variantClasses[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
