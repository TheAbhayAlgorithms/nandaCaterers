export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  pricePerPlateText: string;
  guestRange: string;
  welcomeDrinks: string;
  starters: string;
  liveCounters: string;
  saladsAndAccompaniments: string;
  mainCourseCurries: string;
  breadsAndRice: string;
  dalsAndKadhis: string;
  dessertsAndSweets: string;
  iceCreamAndKulfi: string;
  decorationIncluded: string;
  serviceStaff: string;
  crockeryAndCutlery: string;
  highlights: string[];
  recommendedFor: string;
  colorTheme: string;
}

export const packagesData: PackageTier[] = [
  {
    id: "silver",
    name: "Silver Package",
    subtitle: "Essential Celebration Spread",
    pricePerPlateText: "₹650 – ₹850 / plate*",
    guestRange: "50 – 1,000+ Guests",
    welcomeDrinks: "2 Refreshing Coolers / Mocktails",
    starters: "3 Veg Starters (2 Dry + 1 Tikki)",
    liveCounters: "1 Live Chaat or Dosa Station",
    saladsAndAccompaniments: "2 Salads + Papad, Achar & 2 Chutneys",
    mainCourseCurries: "2 Royal Curries (1 Paneer + 1 Seasonal Veg)",
    breadsAndRice: "Assorted Rotis / Puris + 1 Pulav / Jeera Rice",
    dalsAndKadhis: "1 Dal (Dal Tadka or Gujarati Kadhi)",
    dessertsAndSweets: "1 Warm Sweet / Mithai (Gulab Jamun / Jalebi)",
    iceCreamAndKulfi: "1 Premium Ice Cream Scoop",
    decorationIncluded: "Standard clean buffet skirtings & warm chafing stations",
    serviceStaff: "Uniformed stewards + 1 station supervisor",
    crockeryAndCutlery: "High-grade melamine or eco-friendly palmware",
    highlights: [
      "100% Pure Vegetarian Segregated Kitchen",
      "Jain / Swaminarayan Options Available",
      "Freshly Prepared On-Site Refills",
      "Punctual Delivery & Complete Cleanup",
    ],
    recommendedFor: "Intimate family functions, poojas, birthday parties & corporate high-tea.",
    colorTheme: "border-charcoal/20 bg-ivory",
  },
  {
    id: "gold",
    name: "Gold Package",
    subtitle: "Grand Wedding & Banquet Feast",
    badge: "Most Popular",
    pricePerPlateText: "₹950 – ₹1,250 / plate*",
    guestRange: "100 – 3,000+ Guests",
    welcomeDrinks: "3 Signature Mocktails & Thick Mango Lassi",
    starters: "5 Starters (2 Tandoor Skewers + 2 Tikkis + 1 Chinese)",
    liveCounters: "2 Interactive Stations (Live Chaat + Italian Pasta / Pizza)",
    saladsAndAccompaniments: "4 Gourmet Salads + Roasted Papads & 3 Chutneys",
    mainCourseCurries: "3 Curries (1 Paneer Special + 1 Kofta + 1 Undhiyu / Regional)",
    breadsAndRice: "Tandoori Naans, Kulchas & Roomali + Dum Biryani",
    dalsAndKadhis: "2 Dals (Dal Makhani + Gujarati / Punjabi Kadhi)",
    dessertsAndSweets: "2 Royal Sweets (Rabdi Jalebi + Gajar / Moong Dal Halwa)",
    iceCreamAndKulfi: "2 Artisanal Kulfi / Ice Cream Varieties",
    decorationIncluded: "Themed floral buffet counter setup & designer copper chafing dishes",
    serviceStaff: "Trained hospitality stewards + dedicated banquet floor manager",
    crockeryAndCutlery: "Premium bone-china crockery & stainless-steel cutlery",
    highlights: [
      "Dedicated On-Site Banquet Floor Manager",
      "Live Interactive Chef Stations",
      "Custom Regional Taste Tuning (Gujarati, Marwari, Punjabi)",
      "Continuous Piping Hot Counter Refills",
    ],
    recommendedFor: "Wedding Sangeet, Grand Receptions, Anniversaries & Corporate Dinners.",
    colorTheme: "border-turmeric bg-gradient-to-b from-amber-50/50 to-ivory ring-2 ring-turmeric/50",
  },
  {
    id: "royal",
    name: "Royal Diamond Feast",
    subtitle: "Opulent Imperial Banquet Experience",
    badge: "Bespoke Luxury",
    pricePerPlateText: "Price On Request (Tailored Bespoke)",
    guestRange: "200 – 5,000+ Guests",
    welcomeDrinks: "4 Artisanal Mocktails, Sherbets & Exotic Fruit Cooler Bar",
    starters: "7 Gourmet Starters (Paneer Malai Tikka, Tandoori, Dimsums, Rolls)",
    liveCounters: "3 Interactive Stations (Live Tandoor + Exotic Pasta + Chaat Bazaar)",
    saladsAndAccompaniments: "6 Global & Regional Salads + Assorted Papads & Artisan Dips",
    mainCourseCurries: "4 Curries (Paneer Pasanda, Kaju Curry, Surti Undhiyu, Seasonal Veg)",
    breadsAndRice: "Full Live Tandoori Bread Basket + Kashmiri Pulav & Dum Biryani",
    dalsAndKadhis: "2 Slow-Cooked Dals (18-Hour Dal Makhani + Signature Kadhi)",
    dessertsAndSweets: "3 Royal Sweets (Akhrot/Butterscotch Halwa + Rasmalai + Live Jalebi)",
    iceCreamAndKulfi: "Full Artisanal Kulfi & Falooda Counter with Natural Flavors",
    decorationIncluded: "Full luxury catering decor: canopy stalls, brass/copper chafing, floral displays",
    serviceStaff: "Full captaincy service team, master chefs, and VIP table attendants",
    crockeryAndCutlery: "Royal gold-rimmed fine bone china and heavy brass cutlery",
    highlights: [
      "Executive Head Chef On-Site Supervision",
      "Custom Tasting Session Included Before Event",
      "VIP Table Steward Service Available",
      "End-to-End Waste Disposal & Zero Mess Guarantee",
    ],
    recommendedFor: "Lavish Destination Weddings, Elite High-Profile Receptions & Corporate Galas.",
    colorTheme: "border-maroon bg-gradient-to-b from-rose-50/40 to-ivory ring-2 ring-maroon/30",
  },
];

export const packageComparisonFeatures = [
  { label: "Welcome Drinks", silver: "2 Varieties", gold: "3 Varieties", royal: "4 Varieties + Fruit Bar" },
  { label: "Appetizers / Starters", silver: "3 Dishes", gold: "5 Dishes", royal: "7 Dishes" },
  { label: "Live Food Counters", silver: "1 Counter", gold: "2 Counters", royal: "3 Counters" },
  { label: "Main Course Curries", silver: "2 Curries", gold: "3 Curries", royal: "4 Curries" },
  { label: "Live Breads & Naans", silver: "2 Breads", gold: "3 Breads", royal: "Full Live Tandoori Basket" },
  { label: "Fragrant Rice / Biryani", silver: "1 Rice", gold: "Dum Biryani", royal: "Dum Biryani + Kashmiri Pulav" },
  { label: "Slow-Cooked Dals", silver: "1 Dal", gold: "2 Dals", royal: "2 Signature Dals" },
  { label: "Royal Sweets & Mithai", silver: "1 Sweet", gold: "2 Sweets", royal: "3 Sweets" },
  { label: "Artisanal Kulfi / Ice Cream", silver: "1 Scoop", gold: "2 Varieties", royal: "Full Kulfi & Falooda Bar" },
  { label: "Buffet Table Decoration", silver: "Standard Clean", gold: "Themed Floral & Copper", royal: "Full Luxury Canopy & Brass" },
  { label: "Dedicated Banquet Manager", silver: "Supervisor", gold: "Floor Manager Included", royal: "Executive Chef & Floor Captains" },
  { label: "Pre-Event Menu Tasting", silver: "On Request", gold: "Available", royal: "Complimentary Session" },
];
