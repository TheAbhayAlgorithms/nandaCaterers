import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { detailedServices, getDetailedService } from "@/data/services";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { RelatedPages } from "@/components/ui/RelatedPages";
import { MandalaWatermark } from "@/components/ui/MandalaWatermark";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return detailedServices.map((srv) => ({
    service: srv.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getDetailedService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Nanda Caterers",
    };
  }

  return {
    title: `${service.title} in Mumbai | 100% Pure Veg`,
    description: `${service.shortDesc} Nanda Caterers provides benchmark ${service.title.toLowerCase()} across Mumbai, Thane, Navi Mumbai, Pune & Goa.`,
    openGraph: {
      title: `${service.title} | Nanda Caterers Mumbai`,
      description: service.shortDesc,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getDetailedService(slug);

  if (!service) {
    notFound();
  }

  const whatsappHref = buildWhatsAppLink({
    serviceType: service.serviceTypeParam,
    customMessage: `Hello Nanda Caterers, I would like to inquire about your ${service.title} services.`,
  });

  const faqItems = service.faqs.map((faq) => ({
    title: faq.question,
    content: <p className="text-sm text-charcoal/80 leading-relaxed">{faq.answer}</p>,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "CateringBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone.display,
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://nandacaterers.com",
    },
    areaServed: siteConfig.areasServed,
    description: service.fullDesc,
  };

  return (
    <div className="flex flex-col w-full pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-maroon-dark text-cream pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-maroon-dark/80 to-maroon/70" />
        </div>

        <MandalaWatermark
          size={500}
          opacity={0.06}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            className="text-cream/70 mb-6 px-0"
          />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-saffron text-charcoal text-xs font-bold uppercase tracking-wider">
              100% Pure Veg
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
              <Users className="w-3.5 h-3.5 text-turmeric" />
              {service.guestRange}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium">
              Mumbai · Thane · Navi Mumbai · Pune · Goa
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-cream/90 max-w-3xl leading-relaxed">
            {service.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href={`/quote?service=${encodeURIComponent(service.serviceTypeParam)}`}
              variant="primary"
              size="lg"
            >
              <span>Get Per-Plate Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Plan</span>
            </a>

            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-turmeric" />
              <span>{siteConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & What's Included */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon block">
              About This Service
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
              Flawless Banqueting Tailored For Your Milestone
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Inclusions Card */}
            <div className="mt-8 bg-ivory rounded-3xl p-6 sm:p-8 border border-turmeric/30 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-maroon mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                What&apos;s Included In Every Package
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.whatsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal/85 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Consultation Sidebar Card */}
          <div className="lg:col-span-5 bg-cream rounded-3xl p-6 sm:p-8 border border-turmeric/40 shadow-warm sticky top-28 space-y-6">
            <div className="border-b border-charcoal/10 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block">
                Direct Planner Assistance
              </span>
              <h3 className="font-serif text-xl font-bold text-maroon mt-1">
                Book a Tasting Session
              </h3>
              <p className="text-xs text-charcoal/70 mt-1">
                Experience our signature dishes and review course variations with our master culinary consultant.
              </p>
            </div>

            <div className="space-y-3 text-xs text-charcoal/80">
              <div className="flex items-center justify-between py-2 border-b border-charcoal/5">
                <span className="font-medium text-charcoal/60">Response Time:</span>
                <span className="font-semibold text-charcoal">Under 2 hours</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-charcoal/5">
                <span className="font-medium text-charcoal/60">Advance Booking:</span>
                <span className="font-semibold text-charcoal">2 – 8 weeks recommended</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-charcoal/5">
                <span className="font-medium text-charcoal/60">Guest Capacities:</span>
                <span className="font-semibold text-charcoal">{service.guestRange}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="font-medium text-charcoal/60">Culinary Standard:</span>
                <span className="font-bold text-emerald-700">100% Pure Vegetarian</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                href={`/quote?service=${encodeURIComponent(service.serviceTypeParam)}`}
                variant="primary"
                className="w-full justify-center"
              >
                <span>Customize This Package</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Planner on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Course Menu */}
      <section className="py-16 bg-ivory border-y border-turmeric/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon block mb-1">
              Curated Gastronomy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
              Sample Banqueting Course
            </h2>
            <p className="mt-2 text-sm text-charcoal/70">
              A glimpse into a customized royal menu. Every item is interchangeable across our 13 cuisine categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.sampleMenu.map((course, idx) => (
              <div
                key={idx}
                className="bg-cream/70 rounded-2xl p-6 border border-turmeric/30 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-turmeric/30 pb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-maroon">
                      Course {idx + 1}
                    </span>
                    <span className="text-xs text-charcoal/50">
                      {course.items.length} Options
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                    {course.course}
                  </h3>
                  <ul className="space-y-2">
                    {course.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-bold text-maroon hover:text-charcoal underline"
            >
              <span>Explore all 13 Cuisines and 500+ Dishes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our 4-Step Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-maroon block mb-1">
            Seamless Execution
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
            How We Organize Your Banquet
          </h2>
          <p className="mt-2 text-sm text-charcoal/70">
            From your first telephone inquiry to the final celebration dessert, our disciplined workflow ensures perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-ivory rounded-2xl p-6 border border-charcoal/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-saffron/20 text-maroon font-bold font-serif text-lg mb-4">
                  0{step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 bg-cream/60 border-t border-turmeric/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-maroon block mb-1">
                Visual Experience
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
                Event Setup & Presentation
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-bold text-maroon hover:text-charcoal uppercase tracking-wider underline shrink-0"
            >
              View Full Banquet Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xs group"
              >
                <Image
                  src={img}
                  alt={`${service.title} presentation photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs.length > 0 && (
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-maroon mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-gold" />
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal">
              Questions About {service.title}
            </h2>
          </div>

          <Accordion items={faqItems} defaultOpenIndex={0} />
        </section>
      )}

      {/* Cross-linking to Related Pages */}
      <RelatedPages
        title="Explore Related Menus & Packages"
        subtitle="Pair this service with curated menus and custom per-plate quotations"
        links={service.relatedPages.map((link) => ({
          title: link.title,
          description: link.description,
          href: link.href,
          tag: "Recommended",
        }))}
      />
    </div>
  );
}
