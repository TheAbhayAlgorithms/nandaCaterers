"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export interface BentoTileProps {
  type: "photo" | "accent";
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function BentoTile({
  type,
  imageSrc,
  imageAlt = "Catering showcase",
  href,
  onClick,
  className,
  children,
}: BentoTileProps) {
  const isAccent = type === "accent";

  const content = (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3] flex flex-col justify-center items-center text-center p-5 select-none shadow-soft border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-warm-lg group",
        isAccent
          ? "bg-accent text-white border-accent-dark/20 hover:brightness-105"
          : "bg-paper text-ink border-black/5",
        className
      )}
    >
      {type === "photo" && imageSrc && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      )}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="block w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl cursor-pointer">
        {content}
      </button>
    );
  }

  return content;
}
