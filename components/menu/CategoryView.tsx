"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { MenuCategory, menuCategories, Dish } from "@/data/menu";
import { SubTabs } from "./SubTabs";
import { DishList } from "./DishList";
import { SectionShell } from "@/components/shape/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/shape/Divider";
import { NextStepStrip } from "@/components/shape/NextStepStrip";

interface CategoryViewProps {
  category: MenuCategory;
}

export function CategoryView({ category }: CategoryViewProps) {
  const [activeSectionTitle, setActiveSectionTitle] = useState(
    category.sections[0]?.title || ""
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Sub-section tab items with counts
  const subSectionTabs = useMemo(() => {
    return category.sections.map((s) => ({
      title: s.title,
      count: s.dishes.length,
    }));
  }, [category.sections]);

  // Current active section dishes
  const activeSection = useMemo(() => {
    return (
      category.sections.find((s) => s.title === activeSectionTitle) ||
      category.sections[0]
    );
  }, [category.sections, activeSectionTitle]);

  // If search query is non-empty, search across all sections of this category
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];

    const allDishes: Dish[] = [];
    category.sections.forEach((sec) => {
      sec.dishes.forEach((d) => {
        const text = `${d.name} ${d.description || ""}`.toLowerCase();
        if (text.includes(q)) {
          allDishes.push(d);
        }
      });
    });
    return allDishes;
  }, [category.sections, searchQuery]);

  const router = useRouter();

  // Previous & Next cuisine navigation
  const currentIndex = menuCategories.findIndex((c) => c.slug === category.slug);
  const prevCategory =
    currentIndex > 0
      ? menuCategories[currentIndex - 1]
      : menuCategories[menuCategories.length - 1];
  const nextCategory =
    currentIndex < menuCategories.length - 1
      ? menuCategories[currentIndex + 1]
      : menuCategories[0];

  // Section navigation (Previous / Next)
  const currentSectionIndex = category.sections.findIndex(
    (s) => s.title === activeSectionTitle
  );
  const hasPrevSection = currentSectionIndex > 0;
  const hasNextSection = currentSectionIndex < category.sections.length - 1;

  const handlePrev = () => {
    setSearchQuery("");
    if (hasPrevSection) {
      setActiveSectionTitle(category.sections[currentSectionIndex - 1].title);
    } else {
      router.push(`/menu/${prevCategory.slug}`);
    }
  };

  const handleNext = () => {
    setSearchQuery("");
    if (hasNextSection) {
      setActiveSectionTitle(category.sections[currentSectionIndex + 1].title);
    } else {
      router.push(`/menu/${nextCategory.slug}`);
    }
  };

  const prevLabel = hasPrevSection
    ? category.sections[currentSectionIndex - 1].title
    : prevCategory.title;
  const nextLabel = hasNextSection
    ? category.sections[currentSectionIndex + 1].title
    : nextCategory.title;

  return (
    <div className="w-full bg-cream/40">
      {/* Sticky Sub-section Tabs */}
      <SubTabs
        sections={subSectionTabs}
        activeSection={activeSectionTitle}
        onSelectSection={(title) => {
          setSearchQuery("");
          setActiveSectionTitle(title);
        }}
      />

      <SectionShell className="pt-8 sm:pt-12 pb-16">
        {/* Search dishes input per Section 6.5 */}
        <div className="relative w-full max-w-lg mx-auto mb-8 sm:mb-12">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-ink/40 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search dishes in ${category.title}...`}
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-paper border border-ink/15 text-base sm:text-sm text-ink placeholder:text-ink/45 shadow-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 p-1 text-ink/40 hover:text-ink transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Dish List View */}
        {searchQuery ? (
          <div>
            <div className="text-center mb-6">
              <Eyebrow text="SEARCH RESULTS" />
              <h2 className="font-heading font-bold text-2xl text-ink mt-1">
                Matching dishes for &ldquo;{searchQuery}&rdquo;
              </h2>
              <Divider align="center" className="my-2" />
              <p className="text-xs text-ink/60">
                Found {searchResults.length} matching items across all sections
              </p>
            </div>

            <DishList dishes={searchResults} searchQuery={searchQuery} />
          </div>
        ) : (
          <div>
            <div className="text-center mb-6 sm:mb-8">
              <Eyebrow text={category.title.toUpperCase()} />
              
              <div className="flex items-center justify-center gap-2.5 sm:gap-6 mt-1.5 mb-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={`Previous: ${prevLabel}`}
                  title={`Previous: ${prevLabel}`}
                  className="group/btn p-2 sm:p-2.5 rounded-full border border-ink/15 bg-paper text-ink/75 hover:text-accent hover:border-accent hover:bg-peach/30 transition-all shadow-xs active:scale-95 cursor-pointer shrink-0"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight">
                  {activeSection?.title}
                </h2>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={`Next: ${nextLabel}`}
                  title={`Next: ${nextLabel}`}
                  className="group/btn p-2 sm:p-2.5 rounded-full border border-ink/15 bg-paper text-ink/75 hover:text-accent hover:border-accent hover:bg-peach/30 transition-all shadow-xs active:scale-95 cursor-pointer shrink-0"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <Divider align="center" className="my-2" />
              <p className="text-xs text-ink/60">
                {activeSection?.dishes.length} hand-crafted delicacies prepared fresh
              </p>
            </div>

            {activeSection && (
              <DishList
                dishes={activeSection.dishes}
                sectionTitle={activeSection.title}
              />
            )}
          </div>
        )}

        {/* Category Switcher Strip (Previous / Next cuisine) per Section 6.5 */}
        <div className="flex items-center justify-between border-t border-ink/10 mt-16 pt-8 text-sm">
          <Link
            href={`/menu/${prevCategory.slug}`}
            className="group flex items-center gap-2 font-medium text-ink/75 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-ink/40 block font-normal">
                Previous Cuisine
              </span>
              <span className="font-semibold text-xs sm:text-sm">
                {prevCategory.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/menu/${nextCategory.slug}`}
            className="group flex items-center gap-2 font-medium text-ink/75 hover:text-accent transition-colors text-right"
          >
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-ink/40 block font-normal">
                Next Cuisine
              </span>
              <span className="font-semibold text-xs sm:text-sm">
                {nextCategory.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionShell>

      {/* One-strip NextStepStrip CTA strip per Section 6.5 & Rule 5 */}
      <NextStepStrip
        headline="Ready to curate your celebration menu?"
        primaryButtonText="Connect"
        primaryAction="enquiry"
        secondaryButtonText="All Cuisines"
        secondaryHref="/menu"
      />
    </div>
  );
}
