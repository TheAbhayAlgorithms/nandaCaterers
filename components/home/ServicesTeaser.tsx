"use client";

import React, { useState } from "react";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceModal } from "@/components/services/ServiceModal";
import { servicesData, ServiceItem } from "@/data/services";

export function ServicesTeaser() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <SectionShell className="bg-food-doodle text-ink relative overflow-visible">
      {/* Sticky Heading Container: waits at top until this section scrolls past */}
      <div className="sticky top-[68px] sm:top-[74px] lg:top-[80px] z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-2 pb-4 mb-6 sm:mb-8 bg-[#FDEFE7]/95 backdrop-blur-md transition-all">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <Eyebrow>OUR SERVICES</Eyebrow>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ink sm:whitespace-nowrap leading-tight mt-1 mb-2">
            Premium Catering Services for Every Occasion
          </h2>
          <Divider align="center" color="bg-accent" />
        </div>
      </div>

      {/* Grid of exactly 6 white cards: 3 cols x 2 rows desktop, 2 cols tablet, 1 col mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
        {servicesData.slice(0, 6).map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            onSelect={(srv) => setSelectedService(srv)}
          />
        ))}
      </div>

      {/* Below the grid: one centred pill button "View All Services" -> /services */}
      <div className="flex justify-center">
        <Button href="/services" variant="filled" size="md">
          View All Services
        </Button>
      </div>

      {/* Service Modal Detail per Section 6.4 */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </SectionShell>
  );
}
