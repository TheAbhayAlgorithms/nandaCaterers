"use client";

import React, { forwardRef, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-xl min-h-[38px]",
      md: "px-5 py-2.5 text-sm md:text-base font-medium rounded-xl min-h-[44px]",
      lg: "px-7 py-3.5 text-base md:text-lg font-semibold rounded-2xl min-h-[48px]",
    };

    const variantClasses = {
      primary:
        "relative overflow-hidden bg-gold-gradient text-charcoal font-semibold shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-warm-lg active:scale-[0.97] before:absolute before:inset-0 before:w-1/2 before:h-full before:bg-white/30 before:skew-x-[-25deg] before:-translate-x-full hover:before:translate-x-[350%] before:transition-transform before:duration-700",
      secondary:
        "relative overflow-hidden border-2 border-maroon text-maroon font-semibold transition-all duration-300 hover:text-white hover:-translate-y-0.5 active:scale-[0.97] before:absolute before:inset-0 before:bg-maroon before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300 before:-z-10 z-0",
      outline:
        "border border-charcoal/20 text-charcoal hover:bg-cream hover:border-saffron transition-all duration-200 active:scale-[0.97]",
      ghost:
        "text-charcoal hover:text-maroon hover:bg-saffron/10 transition-colors duration-200 active:scale-[0.97]",
    };

    const baseStyles =
      "inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none text-center";

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    );

    if (href && !disabled && !isLoading) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, sizeClasses[size], variantClasses[variant], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeClasses[size], variantClasses[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
