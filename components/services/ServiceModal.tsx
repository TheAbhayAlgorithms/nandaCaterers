"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ServiceItem } from "@/data/services";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const { openQuoteSheet } = useQuoteSelection();

  if (!service) return null;

  const handleEnquire = () => {
    onClose();
    // Map service title to quote service category
    const serviceCategoryMap: Record<string, string> = {
      wedding: "Wedding",
      corporate: "Corporate Event",
      family: "Party / Function",
      party: "Party / Function",
      decoration: "General Event",
      social: "General Event",
    };
    openQuoteSheet(serviceCategoryMap[service.slug] || "Wedding");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={service.title}>
      {/* Large photo */}
      <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-soft mb-4">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-night/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          {service.guestRange}
        </div>
      </div>

      {/* Paragraphs */}
      <div className="space-y-2 text-ink/80 text-sm sm:text-base leading-relaxed">
        {service.long.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Highlights */}
      <div className="pt-2">
        <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
          Key Service Highlights
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink/90">
          {service.highlights.map((h, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-black/5 mt-4">
        <Button onClick={handleEnquire} variant="filled" className="w-full sm:w-auto">
          Enquire about this
        </Button>
        <Button href="/menu" variant="outline" className="w-full sm:w-auto">
          See Menu
        </Button>
      </div>
    </Modal>
  );
}
