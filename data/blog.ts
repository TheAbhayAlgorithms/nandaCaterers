export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  category: "Weddings" | "Planning" | "Dietary" | "Corporate";
  author: string;
  coverImage: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wedding-catering-checklist-mumbai",
    title: "The Ultimate Wedding Catering Checklist for Mumbai Weddings",
    excerpt: "From booking timelines to live counters and Jain dietary requirements, here is how to plan an unforgettable wedding banquet in Mumbai.",
    publishedDate: "January 15, 2026",
    readTime: "6 min read",
    category: "Weddings",
    author: "Nanda Banquet Team",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Planning a wedding feast in Mumbai requires balancing rich tradition with contemporary culinary expectations. With thousands of wedding venues from Bandra clubhouses to BKC convention halls, orchestrating hot, hygienic food on time is the single most critical factor in guest satisfaction.",
      "1. Book 2–4 Months in Advance: Mumbai's auspicious wedding muhurats fill up fast. Securing your caterer early allows dedicated menu planning and guarantees that master maharajs are reserved for your celebration.",
      "2. Balance Live Counters with Seated Comfort: Live chaat, tandoori skewers, and Italian pasta counters create vibrant energy during pre-reception hours, while hearty North Indian and Gujarati curries satisfy senior family members.",
      "3. Account for Segregated Jain Preparations: Ensure your caterer has separate vessels, cutting boards, and chefs for root-vegetable-free Jain and Swaminarayan cooking.",
      "4. Schedule a Tasting Session: Always taste your shortlisted Dal Makhani, paneer gravies, and halwas before giving final sign-off.",
    ],
  },
  {
    slug: "how-much-food-per-guest-guide",
    title: "How Much Food Do You Need Per Guest? A Practical Catering Guide",
    excerpt: "Avoid food wastage and ensure nobody leaves hungry with our master chef formula for calculating portions for 100 to 1,000+ guests.",
    publishedDate: "January 28, 2026",
    readTime: "5 min read",
    category: "Planning",
    author: "Head Chef, Nanda Caterers",
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    content: [
      "One of the most common worries for any event host is running out of food or suffering excessive wastage. Over 20 years and 5,000+ catered events, Nanda Caterers has perfected the science of banquet portion planning.",
      "Appetizers & Starters: If serving appetizers during a 90-minute cocktail or sangeet session before dinner, budget 4 to 6 appetizer pieces per guest. For evening parties where starters ARE the main meal, increase to 8 to 10 pieces across 4 to 5 varieties.",
      "Main Course Curries: For a 3-curry spread, plan approximately 180g to 220g of cooked vegetable and paneer curry per guest in total. Paneer dishes typically experience 20% higher pickup.",
      "Breads & Rice: Expect an average of 2 to 2.5 rotis/naans per person, accompanied by 75g to 100g of biryani or pulav.",
      "Desserts & Sweets: Warm halwas should be portioned at 60g–75g per guest, complemented by 1 scoop of kulfi or ice cream.",
    ],
  },
  {
    slug: "jain-catering-menu-ideas",
    title: "Creative Wedding & Jain Menu Ideas for Modern Receptions",
    excerpt: "Proving that strict Jain catering without onion, garlic, or potatoes can be as decadent, rich, and visually stunning as any gourmet spread.",
    publishedDate: "February 10, 2026",
    readTime: "4 min read",
    category: "Dietary",
    author: "Nanda Culinary Team",
    coverImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Jain catering is an art of flavor balance. While strict dietary rules eliminate root vegetables, mushrooms, and onion/garlic, authentic spices and premium ingredients produce extraordinarily opulent dishes.",
      "Raw Banana as the Secret Star: Tender steamed raw banana effortlessly replaces potatoes in samosa fillings, tikkis, and Gujarati sabzis while retaining wonderful texture.",
      "Opulent Gravies: Silky cashew pastes, white poppy seeds, fresh tomato reduction, and unadulterated saffron create velvety paneer gravies that rival any traditional restaurant curry.",
      "Interactive Jain Counters: Live Italian pasta in pink sauce, stone-baked thin crust Margherita pizza with fresh basil, and sweet corn chaat baskets delight young and old alike.",
    ],
  },
  {
    slug: "live-counters-wedding-trends",
    title: "5 Live Counter Trends Dominating Mumbai Weddings This Season",
    excerpt: "Discover why interactive food stations—from Tandoori skewer bars to artisanal Kulfi Falooda counters—are essential for guest engagement.",
    publishedDate: "February 18, 2026",
    readTime: "5 min read",
    category: "Weddings",
    author: "Event Operations Team",
    coverImage: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Gone are the days when wedding guests waited patiently for the buffet to open. Modern celebrations feature lively interactive stations that prepare fresh, piping-hot delicacies right before their eyes.",
      "1. The 6-Water Pani Puri Street: Featuring pudina, hing, amchur, jeera, sweet tamarind, and guava-chili waters served with warm ragda or sprout filling.",
      "2. Live Charcoal Tandoor Skewers: Smoking Paneer Malai Tikka, char-grilled baby corn, and tandoori stuffed bell peppers served straight from skewers to cocktail plates.",
      "3. Hand-Tossed Stone-Baked Pizzas: Thin crust sourdough pizzas baked on site in compact countertop ovens with bubbling mozzarella and fresh basil.",
      "4. The Live Rabdi Jalebi Station: Saffron jalebi spirals fried crisp, dipped in sweet syrup, and capped with chilled, slow-reduced rabdi.",
    ],
  },
  {
    slug: "corporate-catering-planning",
    title: "How to Plan Corporate Luncheon Catering Without Disrupting Schedules",
    excerpt: "Essential tips for administrative heads and HR planners in BKC, Lower Parel, and Powai for executing seamless corporate conference dining.",
    publishedDate: "March 2, 2026",
    readTime: "4 min read",
    category: "Corporate",
    author: "Corporate Relations Lead",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Corporate catering has zero tolerance for delays. When 400 conference delegates break for lunch at exactly 1:00 PM, food must be steaming hot, stations must be fully staffed, and the line must move with clockwork efficiency.",
      "Double-Sided Buffet Design: Always request double-sided buffet stations. A single-sided buffet handles 70 guests efficiently; double-sided configurations easily accommodate 150+ guests in under 20 minutes.",
      "Clear Dietary Signage: Executive guests should never have to guess what contains dairy, gluten, or spices. Clear calligraphy labels prevent bottleneck questions.",
      "Non-Messy Menu Selections: Avoid overly runny curries that threaten business suits. Focus on thick rich gravies, bite-sized appetizers, and easy-to-manage rotis.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
