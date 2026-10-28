import React from "react";
import Link from "next/link";
import { Utensils, Star, Image as ImageIcon, Layers, ArrowRight, ExternalLink } from "lucide-react";
import { getDashboardStats } from "./actions";

export default async function AdminDashboardPage() {
  let stats = {
    totalDishes: 0,
    popularDishes: 0,
    totalPhotos: 0,
    totalCategories: 0,
  };

  try {
    stats = await getDashboardStats();
  } catch (err) {
    console.warn("Could not fetch database stats (Supabase not configured or no connection):", err);
  }

  const statCards = [
    {
      title: "Total Menu Dishes",
      count: stats.totalDishes,
      desc: "Live items across all categories",
      icon: Utensils,
      href: "/admin/menu",
      color: "text-[#7A1F2B]",
      bgColor: "bg-[#7A1F2B]/10",
    },
    {
      title: "Popular Dishes",
      count: stats.popularDishes,
      desc: "Flagged with Popular star",
      icon: Star,
      href: "/admin/menu",
      color: "text-amber-600",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Gallery Photos",
      count: stats.totalPhotos,
      desc: "Banquet & decor showcases",
      icon: ImageIcon,
      href: "/admin/gallery",
      color: "text-emerald-700",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Menu Categories",
      count: stats.totalCategories,
      desc: "Beverages, Soups, Sweets, etc.",
      icon: Layers,
      href: "/admin/menu",
      color: "text-blue-700",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-paper p-6 sm:p-8 border border-ink/10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#7A1F2B] block mb-1">
            MANAGEMENT OVERVIEW
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
            Welcome to Nanda Admin
          </h1>
          <p className="text-xs sm:text-sm text-ink/70 mt-1 max-w-xl">
            Manage your food offerings, toggle &ldquo;Popular&rdquo; specialties, and curate your banquet gallery photos.
          </p>
        </div>

        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1F2B] text-white font-semibold text-xs sm:text-sm hover:bg-[#5C1A1B] transition-colors shadow-xs"
        >
          <span>Open Public Site</span>
          <ExternalLink className="w-4 h-4 text-[#C9A227]" />
        </Link>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl bg-paper border border-ink/10 p-5 sm:p-6 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl ${card.bgColor} ${card.color} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-ink/30 group-hover:text-ink group-hover:translate-x-1 transition-all" />
              </div>

              <div>
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-ink block">
                  {card.count}
                </span>
                <h3 className="font-bold text-sm text-ink mt-1">
                  {card.title}
                </h3>
                <p className="text-xs text-ink/60 mt-0.5">
                  {card.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Access Action Hub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Menu Management Card */}
        <div className="rounded-3xl bg-paper p-6 sm:p-8 border border-ink/10 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#7A1F2B]/10 text-[#7A1F2B] flex items-center justify-center mb-3">
              <Utensils className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-xl text-ink">
              Menu &amp; Dish Manager
            </h2>
            <p className="text-xs sm:text-sm text-ink/70 mt-1 leading-relaxed">
              Add new delicacies, mark signature dishes as &ldquo;Popular&rdquo; to highlight them on the homepage, update veg/non-veg tags, and reorder items.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/admin/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1F2B] text-white text-xs sm:text-sm font-bold hover:bg-[#5C1A1B] transition-colors shadow-xs"
            >
              <span>Manage Menu Dishes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Gallery Management Card */}
        <div className="rounded-3xl bg-paper p-6 sm:p-8 border border-ink/10 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-3">
              <ImageIcon className="w-5 h-5" />
            </div>
            <h2 className="font-heading font-bold text-xl text-ink">
              Gallery Photo Manager
            </h2>
            <p className="text-xs sm:text-sm text-ink/70 mt-1 leading-relaxed">
              Upload multi-image photo batches, customize wedding captions, adjust categories, and reorder banquet highlights for the public gallery.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/admin/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 text-white text-xs sm:text-sm font-bold hover:bg-emerald-800 transition-colors shadow-xs"
            >
              <span>Manage Gallery Photos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

