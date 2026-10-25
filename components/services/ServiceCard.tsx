"use client";

import React from "react";
import { ServiceItem } from "@/data/services";
import { serviceIconMap, ClocheIcon } from "./ServiceIcons";
import { Button } from "@/components/ui/Button";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const IconComponent = serviceIconMap[service.iconName] || ClocheIcon;

  return (
    <div
      className="bg-paper rounded-2xl p-6 sm:p-7 shadow-soft border border-ink/10 flex flex-col justify-between group hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 transform"
    >
      <div>
        {/* Line Icon in Accent Color */}
        <div className="w-12 h-12 rounded-xl bg-peach text-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>

        {/* Serif Card Title */}
        <h3 className="font-heading font-bold text-lg sm:text-xl text-ink mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>

        {/* Two-line clamped description */}
        <p className="text-xs sm:text-sm text-ink/75 line-clamp-2 leading-relaxed mb-4">
          {service.short}
        </p>
      </div>

      {/* Small text button "Show More" with an arrow */}
      <div className="pt-2 border-t border-black/5">
        <Button
          variant="text"
          withArrow
          onClick={() => onSelect(service)}
          aria-label={`Show more details for ${service.title}`}
        >
          Show More
        </Button>
      </div>
    </div>
  );
}
