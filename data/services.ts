// Services data per Section 9.2

export interface ServiceItem {
  slug: string;
  title: string;
  iconName: "wedding" | "corporate" | "family" | "party" | "decoration" | "social";
  short: string; // max 110 chars for clamped card
  long: string[]; // 2 to 3 short paragraphs for modal
  highlights: string[]; // 3 to 4 bullets
  image: string;
  guestRange: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "wedding",
    title: "Wedding Catering",
    iconName: "wedding",
    short: "We provide catering services for wedding events with fine and newer menu ideas as per your requirement.",
    long: [
      "We provide catering services for wedding events. To serve with newer ideas, we have fine and different menus ready as per your requirement.",
      "From intimate pre-wedding rituals like Haldi and Mehendi to grand receptions with thousands of esteemed guests, our operations team ensures that hot food, impeccable hygiene, and gracious hospitality make your family's biggest day truly unforgettable.",
    ],
    highlights: [
      "Sangeet, mehendi, engagement and reception menus",
      "Custom menu planning with authentic regional touch",
      "Matching table decoration and brass chafing warmers",
      "Trained, uniformed hospitality and banquet service staff",
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    guestRange: "150 – 5,000+ Guests",
  },
  {
    slug: "corporate",
    title: "Corporate Catering",
    iconName: "corporate",
    short: "We are proud to serve reputed, high-profile corporate firms for meetings, breakfast, lunch or dinners.",
    long: [
      "We are proud to serve reputed, high-profile corporate firms that organise meetings with breakfast, lunch or evening dinners.",
      "Whether it is an executive boardroom luncheon, an annual corporate seminar, or a celebratory office gala, our catering is structured for punctuality, sophisticated presentation, and wholesome, energizing nutrition.",
    ],
    highlights: [
      "Executive buffet spreads and packaged corporate meals",
      "Punctual setup aligned strictly with your event schedule",
      "Hygienic live counters for high-tea and client mixers",
      "Custom billing, GST invoicing and flexible corporate packages",
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    guestRange: "50 – 2,000+ Attendees",
  },
  {
    slug: "family",
    title: "Family Functions",
    iconName: "family",
    short: "Warm traditional feasts and pooja meals prepared with devotional purity and homely love for your loved ones.",
    long: [
      "Cherished family milestones deserve food cooked with genuine warmth, care, and sacred respect. We cater to Griha Pravesh, Vastu poojas, Upanayanam, and milestone wedding anniversaries with authentic traditional recipes.",
      "Our chefs honor authentic cooking practices, using cold-pressed oils, pure desi ghee, and time-tested spices that carry the nostalgic flavors of grandmother's kitchen.",
    ],
    highlights: [
      "Traditional satvik, Jain and Swaminarayan menu selections",
      "Authentic brass thaali and banana leaf service options",
      "Warm, hospitable stewards respectful of family rituals",
      "Custom portioning tailored for gatherings of any size",
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    guestRange: "40 – 1,500+ Relatives",
  },
  {
    slug: "party",
    title: "Birthday & Party Catering",
    iconName: "party",
    short: "Vibrant menus, fun live stations and irresistible treats covering birthdays, kitty parties, and farewells.",
    long: [
      "Make your celebration the talk of the town with energetic live food stations, crisp savory bites, and handcrafted dessert stations. We cover kids' birthdays, themed teenage parties, kitty party luncheons, and touching farewell gatherings.",
      "From sizzling live pizza and pasta counters to mini sliders and colorful mocktail bars, our menus are interactive, delicious, and tailored to all age groups.",
    ],
    highlights: [
      "Interactive live pasta, chaat, and waffle dessert stations",
      "Customized finger foods, sliders, and mocktail dispensers",
      "Flexible table setups fitting living rooms, clubhouses, or lawns",
      "Fast, seamless cleanup so hosts can enjoy their party",
    ],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    guestRange: "30 – 1,000+ Guests",
  },
  {
    slug: "decoration",
    title: "Event Decoration",
    iconName: "decoration",
    short: "We offer all types of event catering and decorations, with different types of catering decoration in our own style.",
    long: [
      "We offer all types of event catering and decorations, with different types of catering decoration served in our own style.",
      "A feast is as much for the eyes as it is for the palate. Our decor designers complement the culinary presentation with tasteful floral canopies, royal copper food warmers, carved fruit centerpieces, and luminous ambient buffet lighting.",
    ],
    highlights: [
      "Thematic buffet canopy styling (Royal Heritage, Floral, Minimalist)",
      "Brass, copper, and luxury porcelain display ware",
      "Live counter backdrop and personalized entrance displays",
      "Seamless coordination between kitchen and banquet setup",
    ],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    guestRange: "Complete Venue Styling",
  },
  {
    slug: "social",
    title: "Social Events & Festivals",
    iconName: "social",
    short: "Authentic community feasts for Indian festivals, outdoor seasonal parties, and cultural gatherings.",
    long: [
      "Whether it is Navratri Mahotsav, Diwali Milan, Ganeshotsav banquets, or annual community conclaves, Nanda Caterers brings deep expertise in feeding large crowds with flawless rhythm and joyous festive taste.",
      "We are committed to maintaining high standards of taste and hygiene in food preparation across every festive feast.",
    ],
    highlights: [
      "Large-scale festive menus (Farsan, sweets, hot regional curries)",
      "High-speed buffet flow systems handling thousands comfortably",
      "Special fasting / Upvas delicacies on religious calendar days",
      "Strict food safety and quality inspections on all bulk prep",
    ],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    guestRange: "100 – 10,000+ Community Members",
  },
];

// Why Nanda Caterers 4-icon items per Section 9.2
export const whyChooseUs = [
  {
    title: "Fast Delivery",
    desc: "Punctual setup and prompt table replenishment at your venue.",
    icon: "delivery",
  },
  {
    title: "Professional Team",
    desc: "Trained banquet stewards and experienced kitchen supervisors.",
    icon: "team",
  },
  {
    title: "Quick Booking",
    desc: "Hassle-free quotation and menu confirmation within hours.",
    icon: "booking",
  },
  {
    title: "Food Quality",
    desc: "100% pure vegetarian dishes cooked with freshest market produce.",
    icon: "quality",
  },
];

export const commitmentStatement =
  "We are committed to maintaining high standards of taste and hygiene in food preparation.";

// Map backward compatibility for old slug aliases
export const detailedServices = servicesData;

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.toLowerCase();
  return servicesData.find(
    (s) =>
      s.slug === normalized ||
      (normalized === "family-functions" && s.slug === "family") ||
      (normalized === "birthday-and-parties" && s.slug === "party") ||
      (normalized === "social-events" && s.slug === "social")
  );
}

export const getDetailedService = getServiceBySlug;

export const occasionsList: string[] = [
  "Wedding",
  "Kitty & Birthday Parties",
  "Family Functions",
  "Indian Festivals",
  "Sangeet",
  "Mehendi",
  "Engagement",
  "In-House Parties",
  "Farewell",
];

