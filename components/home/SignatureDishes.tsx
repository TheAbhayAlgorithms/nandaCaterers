"use client";

import React from "react";
import Image from "next/image";
import { Plus, Check, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useQuoteSelection } from "@/context/QuoteSelectionContext";

interface FeaturedDish {
  name: string;
  category: string;
  desc: string;
  image: string;
}

const featuredDishes: FeaturedDish[] = [
  {
    name: "Paneer Tikka",
    category: "Starter Speciality",
    desc: "Fresh cottage cheese cubes marinated in spiced hung curd, bell peppers, and slow-roasted over charcoal.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dal Makhani",
    category: "Royal Main Course",
    desc: "Slow-cooked black lentils simmered overnight with fresh churned white butter, tomatoes, and aromatic spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Malai Kofta",
    category: "Vegetable Special",
    desc: "Melt-in-mouth cottage cheese and mawa dumplings cooked in an opulent creamy cashew gravy.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rasmalai",
    category: "Festive Sweet",
    desc: "Soft cottage cheese patties soaked in saffron-infused chilled sweet milk with pistachio slivers.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
  },
];

export function SignatureDishes() {
  const { isDishSelected, toggleDish } = useQuoteSelection();

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <Reveal variant="fadeUp">
            <SectionHeading
              align="left"
              eyebrow="Popular Dishes"
              title="Make Your Event Memorable"
              subtitle="Signature delicacies loved by wedding hosts and banquet guests across Mumbai."
              className="mb-0 max-w-xl"
            />
          </Reveal>

          {/* Variety of Packages block */}
          <Reveal variant="fadeUp" delay={0.15}>
            <div className="mt-6 md:mt-0 p-5 rounded-2xl bg-ivory border border-turmeric/40 shadow-sm flex items-center justify-between gap-6 max-w-md">
              <div>
                <p className="font-heading font-bold text-base text-maroon">
                  Variety of Packages Available
                </p>
                <p className="text-xs text-charcoal/70 mt-0.5">
                  Silver, Gold & Royal Wedding Menus
                </p>
              </div>
              <Button href="/packages" variant="primary" size="sm">
                <span>See Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish, idx) => {
            const selected = isDishSelected(dish.name);
            return (
              <Reveal key={dish.name} variant="fadeUp" delay={idx * 0.09} className="h-full">
                <div className="rounded-2xl bg-ivory border border-charcoal/10 overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-white text-[11px] font-medium">
                      <span className="w-2 h-2 rounded-full bg-leaf" />
                      <span>{dish.category}</span>
                    </div>

                    {/* Add to Selection Button */}
                    <button
                      onClick={() => toggleDish(dish.name)}
                      aria-label={selected ? `Remove ${dish.name} from menu selection` : `Add ${dish.name} to menu selection`}
                      className={`absolute top-3 right-3 w-8 h-8 min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] aspect-square p-0 rounded-full flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer ${
                        selected
                          ? "bg-accent text-white"
                          : "bg-white/95 text-ink hover:bg-accent hover:text-white border border-accent/20"
                      }`}
                    >
                      {selected ? <Check className="w-4 h-4 shrink-0" /> : <Plus className="w-4 h-4 shrink-0" />}
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-xl text-maroon group-hover:text-saffron transition-colors">
                        {dish.name}
                      </h4>
                      <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                        {dish.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-charcoal/5 mt-4 flex items-center justify-end">
                      <button
                        onClick={() => toggleDish(dish.name)}
                        className="text-xs font-semibold text-maroon hover:text-saffron transition-colors"
                      >
                        {selected ? "In Selection Tray" : "+ Add to Selection"}
                      </button>
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
