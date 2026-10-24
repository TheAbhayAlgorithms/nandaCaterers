export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Weddings" | "Buffets" | "Live Counters" | "Desserts" | "Decorations";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Royal Wedding Banquet Setup in Mumbai",
    title: "Grand Wedding Banquet Setup",
    category: "Weddings",
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    alt: "Lavish Buffet Presentation with Floral Decoration",
    title: "Festive Buffet Presentation",
    category: "Buffets",
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Tandoori Skewers and Starters Live Counter",
    title: "Tandoori Starters Live Station",
    category: "Live Counters",
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional South Indian Breakfast Feast",
    title: "Authentic South Indian Breakfast",
    category: "Buffets",
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
    alt: "Assorted Indian Wedding Sweets & Mithai",
    title: "Traditional Mithai & Halwa Counter",
    category: "Desserts",
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    alt: "Outdoor Catering and Evening Table Decoration",
    title: "Outdoor Gala Dinner Decor",
    category: "Decorations",
  },
  {
    id: "gal-7",
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    alt: "Rich Indian Curries & Fresh Breads",
    title: "Royal Main Course Delicacies",
    category: "Buffets",
  },
  {
    id: "gal-8",
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    alt: "Handcrafted Festive Kulfi & Ice Cream Station",
    title: "Festive Ice Cream & Kulfi Bar",
    category: "Desserts",
  },
];
