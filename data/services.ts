export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  serviceTypeParam: "Wedding" | "Corporate Event" | "General Event" | "Party / Function" | "Others";
}

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-event",
    title: "Wedding Event",
    shortDesc: "Complete culinary hospitality for Sangeet, Mehendi, Haldi, Phere, and Grand Receptions.",
    fullDesc: "We are committed to maintaining high standards of taste and hygiene in food preparation. From intimate Mehendi & Sangeet counters to lavish multi-course reception banquets, our royal wedding catering creates memories cherished for generations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    features: ["Dedicated Banquet Manager", "Live Interactive Counters", "Custom Royal Menus", "Trained Uniformed Staff"],
    serviceTypeParam: "Wedding",
  },
  {
    id: "family-function",
    title: "Family Function",
    shortDesc: "Warm, traditional spreads for anniversaries, poojas, baby showers, and family get-togethers.",
    fullDesc: "Celebrating milestones with loved ones calls for food that tastes like home, elevated with celebratory elegance. We craft heartwarming regional menus served with authentic hospitality and care.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    features: ["Homestyle Flavors", "Prompt Courteous Service", "All Group Sizes Catered", "Flexible Menu Options"],
    serviceTypeParam: "Party / Function",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    shortDesc: "Executive breakfasts, high-tea buffets, annual day spreads, and summit dining for reputed firms.",
    fullDesc: "We are proud to serve reputed, high-profile corporate firms that organise meetings with breakfast, lunch or evening dinners. Impeccable timing, pristine hygiene, and professional corporate presentations.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    features: ["Punctual Setup", "Dietary Customizations", "Bento & Buffet Setups", "Seamless Invoice & Billing"],
    serviceTypeParam: "Corporate Event",
  },
  {
    id: "outdoor-party",
    title: "Outdoor Party",
    shortDesc: "Garden parties, farmhouse celebrations, and open-air festive catering setups.",
    fullDesc: "We are committed to maintaining high standards of taste and hygiene in food preparation across open-air venues. Our mobile kitchen stations and weatherproof food displays keep every delicacy piping hot and fresh.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
    features: ["Mobile Live Stoves", "Weatherproof Food Warmers", "Eco-friendly Tableware", "Complete Venue Cleanup"],
    serviceTypeParam: "General Event",
  },
  {
    id: "birthday-party",
    title: "Birthday Party",
    shortDesc: "Vibrant live snack counters, mocktail bars, mini treats, and finger-food feasts.",
    fullDesc: "From kids' theme birthdays with cheerful mini pizzas, pasta bars, and fruit shakes to grand 50th jubilee celebrations, we bring energy, visual flair, and delicious treats that delight every guest.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
    features: ["Kid-Friendly Menus", "Interactive Chaat Bar", "Custom Dessert Tables", "Fast Refill Service"],
    serviceTypeParam: "Party / Function",
  },
  {
    id: "social-events",
    title: "Social Events",
    shortDesc: "Kitty parties, festive gatherings, farewells, housewarmings, and clubhouse banquets.",
    fullDesc: "Kitty parties, Diwali & Navratri gatherings, farewells, and in-house parties tailored with finesse. Whether a 30-guest penthouse gathering or a society-wide celebration, we provide immaculate setups.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    features: ["Intimate & Large Gatherings", "Regional Specialties", "Table Setup & Floral Accent", "End-to-End Coordination"],
    serviceTypeParam: "Others",
  },
];

export const occasionsList: string[] = [
  "Wedding",
  "Kitty & Birthday Parties",
  "Family Functions",
  "Indian Festivals",
  "Sangeet & Mehendi",
  "Engagement",
  "In-House Parties",
  "Farewell & Get-Togethers",
  "Corporate Meetings",
  "Housewarming (Griha Pravesh)",
];

export const whyChooseUsFeatures = [
  {
    title: "Fast Delivery",
    desc: "Precision schedule management ensuring steaming hot meals are served right on time for your guests.",
    icon: "Truck",
  },
  {
    title: "Professional Team",
    desc: "Experienced culinary chefs, courteous stewards, and supervisory leads dedicated to seamless hospitality.",
    icon: "Users",
  },
  {
    title: "Quick Booking",
    desc: "Hassle-free quotation, transparent menu pricing, and quick response within a couple of hours.",
    icon: "CalendarCheck",
  },
  {
    title: "Food Quality",
    desc: "100% vegetarian, premium farm-fresh produce, authentic spices, and certified stringent kitchen hygiene.",
    icon: "ShieldCheck",
  },
];
