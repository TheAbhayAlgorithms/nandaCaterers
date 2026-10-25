import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { servicesData, getServiceBySlug } from "@/data/services";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceDetailActions } from "./ServiceDetailActions";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((srv) => ({
    service: srv.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Nanda Caterers",
    };
  }

  return {
    title: `${service.title} | Nanda Caterers – Wedding Caterers in Mumbai`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Compact Hero with breadcrumbs and torn bottom edge per Section 6 */}
      <PageHero
        title={service.title}
        breadcrumb="Services"
        imageSrc={service.image}
      />

      {/* Main Content Card per Section 6.4 */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="bg-paper rounded-3xl p-6 sm:p-8 shadow-soft border border-accent/15 space-y-6">
          {/* Large Photo with guest range badge */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-night/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
              {service.guestRange}
            </div>
          </div>

          {/* Title */}
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-accent">
              Service Details
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink mt-1">
              {service.title}
            </h2>
          </div>

          {/* 2 to 3 Short Paragraphs */}
          <div className="space-y-3 text-ink/80 text-sm sm:text-base leading-relaxed">
            {service.long.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 3 to 4 Bullet Highlights */}
          <div className="pt-4 border-t border-black/5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-3">
              Key Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-ink/90">
              {service.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two Buttons: "Enquire about this" and "See Menu" */}
          <div className="pt-4 border-t border-black/5">
            <ServiceDetailActions serviceSlug={service.slug} />
          </div>
        </div>

        {/* Compact Next Step Strip */}
        <NextStepStrip
          headline="Looking for tailored dishes for this service?"
          primaryButtonText="Request a Quote"
          secondaryButtonText="Browse All Cuisines"
          secondaryHref="/menu"
        />
      </div>
    </div>
  );
}
