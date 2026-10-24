"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cake, PartyPopper, Briefcase, Flower2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PopularServices() {
  const services = [
    {
      title: "Family Function",
      desc: "Intimate poojas, anniversaries, baby showers, and get-togethers.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
      icon: PartyPopper,
    },
    {
      title: "Event Decoration",
      desc: "Theme buffet displays, floral entrance setups, and chafing dishes.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
      icon: Flower2,
    },
    {
      title: "Corporate Events",
      desc: "Executive seminars, breakfast buffets, and annual board dinners.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      icon: Briefcase,
    },
    {
      title: "Birthday Party",
      desc: "Fun kids live food counters, pizza stations, shakes, and desserts.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
      icon: Cake,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory border-t border-charcoal/10 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="Other services"
            title="Popular Services"
            subtitle="We offer all types of event catering and decorations with customized themes and benchmark presentation."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fadeUp" delay={idx * 0.08} className="h-full">
                <Link
                  href="/services"
                  className="group relative block rounded-2xl overflow-hidden bg-cream border border-charcoal/10 shadow-sm hover:shadow-warm transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-ivory/90 backdrop-blur-md text-maroon flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4 text-saffron" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-maroon group-hover:text-saffron transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-saffron group-hover:text-maroon transition-colors">
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
