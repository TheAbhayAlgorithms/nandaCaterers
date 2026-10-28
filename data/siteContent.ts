/**
 * Single source of truth for demo content across Nanda Caterers.
 * Demo content is rendered only when SHOW_DEMO_CONTENT is true, or items have isDemo: false.
 */

export const SHOW_DEMO_CONTENT = true;

// ============================================================================
// B2. GOOGLE RATING & TESTIMONIALS
// ============================================================================

// DEMO - replace with real data
// TODO: add real Google Maps link
export const demoGoogleRating = {
  rating: 4.8,
  reviewCount: 120,
  mapsUrl: "https://maps.google.com/?q=Nanda+Caterers+Mumbai",
  isDemo: true,
};

export interface TestimonialItem {
  id: string;
  name: string;
  eventType: string;
  text: string;
  isDemo: boolean;
}

export const demoTestimonials: TestimonialItem[] = [
  // DEMO - replace with real data
  {
    id: "demo-t1",
    name: "Demo Client 1",
    eventType: "Wedding Reception",
    text:
      "The catering was executed with great taste, authentic flavours, and punctuality. Our guests loved the live counters and sweets.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "demo-t2",
    name: "Demo Client 2",
    eventType: "Corporate Luncheon",
    text:
      "Professional setup and hygienic catering spread delivered on time. Highly recommended for corporate events.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "demo-t3",
    name: "Demo Client 3",
    eventType: "Family Function",
    text:
      "Homely taste and devotional purity in every preparation. Gracious hospitality that made our celebration memorable.",
    isDemo: true,
  },
];

// ============================================================================
// B3. NUMBERS STRIP
// ============================================================================

export interface StatItem {
  id: string;
  value: string;
  label: string;
  isDemo: boolean;
}

export const numbersStripStats: StatItem[] = [
  {
    id: "stat-years",
    value: "20+",
    label: "Years of Experience",
    isDemo: false,
  },
  // DEMO - replace with real data
  {
    id: "stat-events",
    value: "500+",
    label: "Events Served",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "stat-guests",
    value: "100,000+",
    label: "Guests Served",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "stat-cities",
    value: "3 Cities",
    label: "Mumbai, Pune, Goa",
    isDemo: true,
  },
];

// ============================================================================
// B4. SAMPLE PACKAGES
// ============================================================================

export interface PackageCardItem {
  id: string;
  name: string;
  vegPriceText: string;
  nonVegPriceText: string;
  badge?: string;
  includedItems: string[];
  isDemo: boolean;
}

export const demoPackages: PackageCardItem[] = [
  // DEMO - replace with real data
  {
    id: "silver",
    name: "Silver Package",
    vegPriceText: "Veg: Starting from ₹650 / plate",
    nonVegPriceText: "Non-Veg: Starting from ₹850 / plate",
    includedItems: [
      "2 Welcome Drinks / Mocktails",
      "3 Starters & Fritters",
      "1 Live Chaat Counter",
      "2 Fresh Salads & Papad Basket",
      "2 Main Course Curries (1 Paneer + 1 Seasonal Special)",
      "Assorted Indian Breads & Steamed Rice",
      "1 Dal / Authentic Kadhi",
      "1 Warm Traditional Sweet",
      "1 Premium Ice Cream Scoop",
    ],
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "gold",
    name: "Gold Package",
    vegPriceText: "Veg: Starting from ₹950 / plate",
    nonVegPriceText: "Non-Veg: Starting from ₹1,200 / plate",
    badge: "Most Popular",
    includedItems: [
      "3 Welcome Drinks & Fresh Juices",
      "5 Gourmet Starters & Charcoal Tikkas",
      "2 Interactive Live Stations (Pasta / Chaat)",
      "Artisanal Salad & Accompaniment Bar",
      "3 Royal Curries (Paneer Lababdar + 2 Regional Specialties)",
      "Assorted Tandoori Breads & Signature Pulao",
      "Dal Makhani & Gujarati Kadhi",
      "2 Royal Desserts (Hot Desi Ghee Halwa + Bengali Mithai)",
      "Gourmet Ice Cream & Kulfi Bar",
    ],
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "premium",
    name: "Premium Package",
    vegPriceText: "Veg: Starting from ₹1,450 / plate",
    nonVegPriceText: "Non-Veg: Starting from ₹1,750 / plate",
    badge: "Grand Feast",
    includedItems: [
      "4 Signature Mocktails & Hot Kadai Brews",
      "6 Luxury Starters & Baked Cheese Bites",
      "3 Thematic Live Counters (Wok, Italian & Tawa)",
      "Exotic Fruit Carvings & Global Salad Spread",
      "4 Masterpiece Curries with Cashew & Saffron Gravies",
      "Full Tandoor & Artisanal Bread Selection",
      "2 Dal Specialties & Dum Biryani",
      "3 Grand Sweets & Live Warm Jalebi-Rabdi Station",
      "Fusion Dessert Counter & Kulfi Sticks",
    ],
    isDemo: true,
  },
];

// ============================================================================
// B5. FAQ (accordion on /contact, below the form)
// ============================================================================

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isDemo: boolean;
}

export const demoFaqItems: FaqItem[] = [
  // DEMO - replace with real data
  {
    id: "faq-tasting",
    question: "Do you offer food tasting sessions before booking?",
    answer:
      "Yes, we organize dedicated food tasting sessions for wedding and large banquet clients so you can experience our taste, spice balance, and presentation firsthand before finalizing your menu.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "faq-advance-booking",
    question: "How early in advance should we book your catering services?",
    answer:
      "For peak wedding dates and festival seasons, we recommend booking 3 to 6 months in advance. For corporate events and intimate family functions, a notice of 2 to 4 weeks is generally sufficient.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "faq-menus-available",
    question: "Do you offer veg, non-veg, and Jain menus?",
    answer:
      "Yes, we provide extensive vegetarian and non-vegetarian menus, as well as strict Jain and no-onion-no-garlic preparations with dedicated kitchen segregation.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "faq-min-guests",
    question: "What is your minimum guest count requirement?",
    answer:
      "Our bespoke catering packages typically start from 50 guests for private gatherings and can comfortably scale up to 5,000+ guests for grand wedding receptions and corporate conventions.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "faq-staff-crockery",
    question: "Are service staff, crockery, and live counters included in the catering package?",
    answer:
      "Yes, our comprehensive catering packages include professional uniformed service stewards, premium crockery, cutlery, glassware, live counter setup, and warmers with complete hygiene management.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    id: "faq-cities",
    question: "Which cities do you provide catering services in?",
    answer:
      "We provide full-service catering across Mumbai, Thane, Navi Mumbai, Pune, and destination wedding locations in Goa, supported by mobile refrigerated logistics and kitchen setups.",
    isDemo: true,
  },
];

// ============================================================================
// B6. SOUPS DEMO DISH DESCRIPTIONS (16 dishes)
// ============================================================================

export interface SoupDescriptionItem {
  dishName: string;
  description: string;
  isDemo: boolean;
}

export const demoSoupDescriptions: SoupDescriptionItem[] = [
  // DEMO - replace with real data
  {
    dishName: "Broccoli Almond Soup",
    description: "Creamy pureed fresh broccoli simmered with toasted crushed almonds and herbs.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Soya Broccoli Island Soup",
    description: "Nutritious protein-rich broth featuring tender soya chunks and fresh broccoli florets.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Creamy Italian Soya Bean Soup",
    description: "Velvety Italian-style simmered soya beans infused with rosemary, oregano, and olive oil.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Tomato Coconut Soup",
    description: "Tangy country tomatoes softened with velvety coconut milk and aromatic coastal spices.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Sweet Corn Soup",
    description: "Golden sweet corn kernels slow-cooked into a comforting, mildly seasoned velvety broth.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Popcorn Soup",
    description: "A playful gourmet creation featuring toasted sweetcorn puree and warm buttered popcorn notes.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Veg Garden Soup",
    description: "A nourishing medley of farm-fresh seasonal vegetables gently stewed in a fragrant clear stock.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Veg Cheese Soup",
    description: "A rich, indulgent soup enriched with melted cheddar cheese and finely chopped garden greens.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Macaroni Relito Soup",
    description: "Hearty Italian macaroni in a spiced tomato broth seasoned with Mediterranean herbs.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Behut Black Olive Soup",
    description: "Unique Mediterranean savory broth blended with black olives and sweet bell pepper notes.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Cream of Celery",
    description: "Smooth and delicate cream soup showcasing the crisp, earthy fragrance of fresh garden celery.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Palak Paneer Soup",
    description: "Silky baby spinach puree delicately studded with tender cubes of fresh malai paneer.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Spinach Sorbha with Narangi",
    description: "Traditional spiced spinach shorba enhanced with a bright hint of fresh narangi orange zest.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Green Coconut Celery Soup",
    description: "Tender coconut water and celery leaves brought together in a refreshing, light tropical stew.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Zed Soup",
    description: "A signature chef soup with mixed winter greens, crackled cumin, and a mild peppery kick.",
    isDemo: true,
  },
  // DEMO - replace with real data
  {
    dishName: "Kathiyawadi Soup",
    description: "Authentic Gujarati-style spiced lentil broth tempered with mustard, curry leaves, and asafoetida.",
    isDemo: true,
  },
];

// Helper to look up soup demo description
export function getSoupDemoDescription(dishName: string): string | undefined {
  if (!SHOW_DEMO_CONTENT) return undefined;
  const match = demoSoupDescriptions.find(
    (item) => item.dishName.toLowerCase().trim() === dishName.toLowerCase().trim()
  );
  return match?.description;
}

// ============================================================================
// B7. VIDEO (gallery page)
// ============================================================================

export interface GalleryVideoContent {
  videoUrl: string;
  title: string;
  isDemo: boolean;
}

// DEMO - replace with real data
export const demoGalleryVideo: GalleryVideoContent = {
  videoUrl: "", // Empty so styled "Event video coming soon" card is shown
  title: "Grand Wedding Banquet Highlights",
  isDemo: true,
};
