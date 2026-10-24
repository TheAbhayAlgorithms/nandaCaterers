"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, HeartHandshake, Briefcase, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeOffer() {
  const offerings = [
    {
      title: "Indian Catering Food",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
      description:
        "We specialise in a wide range of Indian Punjabi, Maharashtrian, Gujarati and South Indian food catering, as well as Mughlai, Chinese and continental food catering.",
      link: "/menu/main-course",
    },
    {
      title: "Wedding Catering",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      description:
        "We provide catering services for wedding events. To serve with newer ideas, we have a list of fine and different menus ready as per your requirement.",
      link: "/services",
    },
    {
      title: "Corporate Catering",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      description:
        "We are proud to serve reputed, high-profile corporate firms that organise meetings with breakfast, lunch or evening dinners.",
      link: "/services",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fadeUp">
          <SectionHeading
            eyebrow="What we offer"
            title="In Catering"
            subtitle="Our multi catering specialty offers you all-in-one solution. Designed for weddings, families, and elite corporate banquets."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fadeUp" delay={idx * 0.12} className="h-full">
                <div className="group rounded-3xl bg-ivory border border-charcoal/10 overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    
                    {/* Floating Icon badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-gold-gradient text-charcoal flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="font-heading font-bold text-2xl text-maroon group-hover:text-saffron transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-charcoal/5 mt-6">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-saffron transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
