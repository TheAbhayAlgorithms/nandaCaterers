export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DetailedService {
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  galleryImages: string[];
  guestRange: string;
  serviceTypeParam: "Wedding" | "Corporate Event" | "General Event" | "Party / Function" | "Others";
  whatsIncluded: string[];
  sampleMenu: {
    course: string;
    items: string[];
  }[];
  processSteps: ProcessStep[];
  faqs: ServiceFAQ[];
  relatedPages: { title: string; href: string; description: string }[];
}

export const detailedServices: DetailedService[] = [
  {
    slug: "wedding",
    title: "Royal Wedding Catering",
    tagline: "Unforgettable multi-course feasts for Sangeet, Mehendi, Haldi, Phere & Grand Receptions",
    shortDesc: "Lavish 100% pure vegetarian wedding feasts with live interactive food stations, royal mithai, and attentive hospitality.",
    fullDesc: "Your wedding is a once-in-a-lifetime celebration. Since 2005, Nanda Caterers has crafted regal wedding dining experiences across Mumbai, Pune, and destination venues in Goa. From intimate 150-guest Mehendi chaat counters to 3,000+ guest grand wedding reception banquets, our master chefs and disciplined banquet stewards orchestrate seamless service with benchmark taste and uncompromised kitchen hygiene.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    ],
    guestRange: "150 – 5,000+ Guests",
    serviceTypeParam: "Wedding",
    whatsIncluded: [
      "Dedicated Senior Banquet Floor Captain & Kitchen Operations Head",
      "Complete live interactive stations: Chaat Bazaar, Tandoori Skewers & Italian Pasta",
      "Full traditional Gujarati, Punjabi, Marwari or South Indian course menus",
      "Strict Jain & Swaminarayan segregated preparations upon request",
      "Themed brass & copper chafing dishes with floral table accents",
      "Uniformed, experienced catering stewards with attentive hospitality",
      "Complimentary pre-wedding tasting session for the host family",
      "Complete post-event waste disposal and venue cleanliness assurance",
    ],
    sampleMenu: [
      {
        course: "Welcome Drinks & Coolers",
        items: ["Ratnagiri Alphonso Mango Lassi", "Kairi Aam Panna", "Fresh Lime Soda", "Exotic Tropical Fruit Punch"],
      },
      {
        course: "Live Tandoori & Street Starters",
        items: ["Paneer Tikka Hariyali", "Paneer Malai Tikka Skewers", "Harabhara Kabab", "Corn Cheese Balls", "Raj Kachori Live Counter"],
      },
      {
        course: "Royal Main Course Curries",
        items: ["Paneer Makhanwala", "Surti Undhiyu (Winter Special)", "Malai Kofta in White Gravy", "Kaju Curry"],
      },
      {
        course: "Breads & Rice Specialties",
        items: ["Assorted Live Tandoori Naans & Kulchas", "Roomali Roti", "Royal Dum Biryani with Burani Raita", "Kaju Kishmish Pulav"],
      },
      {
        course: "Slow-Simmered Dals",
        items: ["18-Hour Dal Makhani", "Traditional Gujarati Kadhi", "Yellow Dal Tadka"],
      },
      {
        course: "Mithai & Dessert Finale",
        items: ["Warm Butter Scotch Halwa (Extra Rs.30/-)", "Hot Rabdi Jalebi Live Station", "Kesar Pista Rasmalai", "Artisanal Sitaphal Kulfi Bar"],
      },
    ],
    processSteps: [
      { step: 1, title: "Initial Consultation", description: "Share your wedding date, venue, expected guest count, and regional culinary preferences." },
      { step: 2, title: "Custom Menu Formulation", description: "Our chef curates a tailored menu balancing starters, live counters, main gravies, and desserts." },
      { step: 3, title: "Tasting Session", description: "Visit our kitchen setup for a guided tasting to fine-tune spice levels and presentation." },
      { step: 4, title: "Logistics & Site Inspection", description: "Our floor manager inspects the venue 3 days prior for water, power, and layout flow." },
      { step: 5, title: "Flawless Event Day Execution", description: "Kitchen teams arrive 4 hours early to set up live stations and ensure steaming hot food on time." },
    ],
    faqs: [
      { question: "Can you provide strict Jain food without root vegetables?", answer: "Yes. We maintain completely separate preparation utensils, burners, and cutting boards for 100% strict Jain catering, ensuring zero onion, garlic, or root vegetable contamination." },
      { question: "How early should we book our wedding caterer?", answer: "For peak Mumbai wedding seasons (November to February), we recommend reserving your date 2 to 4 months in advance to guarantee date exclusivity." },
      { question: "Do you supply crockery, cutlery, and table runners?", answer: "Yes. All our wedding packages include luxury bone-china crockery, polished cutlery, themed buffet skirting, and brass/copper chafing warmers." },
    ],
    relatedPages: [
      { title: "View Wedding Packages", href: "/packages", description: "Explore Silver, Gold, and Royal wedding package inclusions and per-plate pricing." },
      { title: "Wedding Photo Gallery", href: "/gallery?filter=Weddings", description: "Browse real photos from our wedding setups across Bandra, BKC, and Juhu banquets." },
      { title: "Explore Main Course Menu", href: "/menu/main-course", description: "See all 60+ North Indian gravies, slow-cooked dals, and fragrant biryanis." },
    ],
  },
  {
    slug: "corporate",
    title: "Corporate & Executive Catering",
    tagline: "Punctual, hygienic, and professional culinary hospitality for summits, annual meetings & board luncheons",
    shortDesc: "Prompt executive breakfast spreads, working buffet lunches, and multi-cuisine dinners for reputed Mumbai corporate firms.",
    fullDesc: "Nanda Caterers is proud to serve reputed corporations, banks, and technology firms across BKC, Lower Parel, Andheri, and Navi Mumbai. Corporate dining demands impeccable timing, pristine hygiene, non-messy gourmet options, and seamless corporate billing. Whether it is a 50-person board meeting or a 2,000-employee annual gala, we deliver fresh, energizing pure vegetarian spreads.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    ],
    guestRange: "40 – 2,500+ Guests",
    serviceTypeParam: "Corporate Event",
    whatsIncluded: [
      "Punctual setup guaranteed at least 45 minutes prior to session schedule",
      "Dietary tags clearly marked on all chafing dishes (Jain, Gluten-free, Low-oil)",
      "High-speed buffet design ensuring 300+ guests can dine within 25 minutes",
      "Executive finger foods, bento options, and complete buffet lines",
      "Trained, discreet, uniformed corporate stewards",
      "Formal corporate invoicing with full GST compliance",
    ],
    sampleMenu: [
      {
        course: "Executive Arrival Drinks",
        items: ["Fresh Tender Coconut Water", "Cold-Pressed Valencia Orange Juice", "Fresh Mint Mojito"],
      },
      {
        course: "Light Appetizers",
        items: ["Paneer Malai Tikka", "Cocktail Harabhara Kabab", "Crispy Sesame Corn Toast"],
      },
      {
        course: "Gourmet Salad Bar",
        items: ["Waldorf Apple & Walnut Salad", "Mediterranean Chickpea Salad", "Sprouted Moong Salad with Lemon"],
      },
      {
        course: "Executive Luncheon Main Course",
        items: ["Paneer Tikka Masala", "Vegetable Jalfrezi", "Dal Makhani", "Jeera Rice", "Assorted Butter Rotis & Parathas"],
      },
      {
        course: "Dessert Finish",
        items: ["Mini Kesari Rasgulla", "Warm Moong Dal Halwa", "Fresh Cut Seasonal Fruits"],
      },
    ],
    processSteps: [
      { step: 1, title: "Requirement Brief", description: "Specify session schedule, venue access rules, expected head count, and billing requirements." },
      { step: 2, title: "Executive Menu Proposal", description: "Receive a transparent, per-person itemized quote tailored for executive dining." },
      { step: 3, title: "On-Time Dispatch", description: "Prepared fresh in insulated thermal cambros and transported in sanitized delivery vehicles." },
      { step: 4, title: "Rapid Buffet Deployment", description: "Discreet setup in designated dining hall without disturbing ongoing conference sessions." },
    ],
    faqs: [
      { question: "Do you accept formal corporate purchase orders and provide GST invoices?", answer: "Yes. We work regularly with corporate procurement teams and provide itemized GST tax invoices with standard credit terms for registered corporate clients." },
      { question: "Can you cater multi-day summits with different menus each day?", answer: "Yes, we regularly cater 2 to 5 day symposiums with zero menu repetition, rotating between North Indian, Continental, Gujarati, and Chinese spreads." },
    ],
    relatedPages: [
      { title: "Corporate Packages", href: "/packages", description: "Review corporate high-tea and buffet pricing tiers." },
      { title: "Service Areas in Mumbai", href: "/service-areas", description: "Serving BKC, Lower Parel, Powai, Nariman Point, and Navi Mumbai IT parks." },
      { title: "Instant Corporate Quote", href: "/quote?service=Corporate+Event", description: "Submit event details and receive a proposal within 2 hours." },
    ],
  },
  {
    slug: "birthday-and-parties",
    title: "Birthday & Celebration Parties",
    tagline: "Vibrant live food stalls, interactive chaat bazaars, mocktail bars, and kid-friendly finger feasts",
    shortDesc: "Exciting party catering featuring stone-baked mini pizzas, loaded nachos, live dosa stations, and dessert bars.",
    fullDesc: "Birthdays and milestone celebrations deserve food that brings joyful excitement. Whether you are hosting a 1st birthday theme party with gentle, child-friendly mini bites or a grand 50th golden jubilee celebration with friends, Nanda Caterers brings lively interactive counters, customized dessert stations, and fresh, piping-hot dishes.",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    ],
    guestRange: "30 – 1,000+ Guests",
    serviceTypeParam: "Party / Function",
    whatsIncluded: [
      "Live interactive fun stalls (Pani Puri, Dosa, Pasta, Nachos)",
      "Child-safe, low-spice options designed specifically for young guests",
      "Bespoke themed dessert displays and sundae ice-cream counters",
      "Courteous staff attentive to young children and senior family members",
      "Disposal bins and ongoing table clearing during the entire party",
    ],
    sampleMenu: [
      {
        course: "Party Welcome Coolers",
        items: ["Chilled Blue Curacao Mocktail", "Fresh Watermelon Mint Slush", "Creamy Chocolate Milkshake"],
      },
      {
        course: "Interactive Live Chaat Station",
        items: ["Kolkata Style Puchka / Pani Puri (5 Flavors)", "Dahi Puri with Sweet Curd", "Delhi Papdi Chaat"],
      },
      {
        course: "Finger Treats & Kids Favorites",
        items: ["Cheesy Nachos with Warm Salsa", "Crispy Corn & Cheese Balls", "Mini Vegetable Margherita Pizza", "Spring Roll Slices"],
      },
      {
        course: "Celebration Dinner Course",
        items: ["Paneer Makhanwala", "Veg Hakka Noodles", "Veg Fried Rice with Manchurian Gravy", "Soft Butter Naans"],
      },
      {
        course: "Sundae Dessert Station",
        items: ["Warm Chocolate Brownie with Vanilla Ice Cream", "Royal Kulfi Falooda", "Mini Gulab Jamun"],
      },
    ],
    processSteps: [
      { step: 1, title: "Theme & Age Group Discussion", description: "We understand the age demographic and party theme to balance fun finger food and hearty dinner items." },
      { step: 2, title: "Station Selection", description: "Pick your favorite 2 or 3 live counters (e.g. Pasta, Chaat, Tacos)." },
      { step: 3, title: "On-Site Celebration Cooking", description: "Our team sets up cheerful, colorful food stalls ready to serve guests as they arrive." },
    ],
    faqs: [
      { question: "What is the minimum guest size for home birthday parties?", answer: "We cater for intimate parties starting from 30 guests onwards with dedicated service staff." },
      { question: "Can live counters be accommodated in residential clubhouses or apartments?", answer: "Yes, our mobile electric and induction live counters are compact, smokeless, and compliant with residential society guidelines." },
    ],
    relatedPages: [
      { title: "Italian & Pasta Menu", href: "/menu/italian", description: "Explore pasta and pizza live station options." },
      { title: "Mexican Fiesta Menu", href: "/menu/mexican", description: "Loaded nachos, quesadillas, and salsa counters." },
      { title: "Party Quotation", href: "/quote?service=Party+%2F+Function", description: "Request custom party pricing for your upcoming birthday celebration." },
    ],
  },
  {
    slug: "family-functions",
    title: "Family Functions & Traditional Poojas",
    tagline: "Homestyle authentic spreads for Griha Pravesh, Baby Showers, Anniversaries & Vastu Poojas",
    shortDesc: "Pure, satvik, and traditional regional menus served with genuine Indian hospitality.",
    fullDesc: "When hosting a Griha Pravesh (Housewarming), Godh Bharai (Baby Shower), Upanayana (Thread Ceremony), or milestone anniversary, the food must taste as wholesome and soul-satisfying as home cooking. We prepare revered traditional dishes with pure cow ghee, unadulterated spices, and complete reverence for auspicious rituals.",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    ],
    guestRange: "40 – 1,500+ Guests",
    serviceTypeParam: "Party / Function",
    whatsIncluded: [
      "Satvik preparation options without onion and garlic",
      "Traditional brass thali or leaf service options available",
      "Auspicious prasad sweets prepared in dedicated pure ghee vessels",
      "Homestyle Gujarati, Maharashtrian, Marwari, or South Indian recipes",
      "Respectful, courteous service staff attuned to religious ceremonies",
    ],
    sampleMenu: [
      {
        course: "Traditional Welcome Drink",
        items: ["Kesar Elaichi Masala Milk", "Fresh Rose Sharbat", "Spiced Buttermilk (Chaas)"],
      },
      {
        course: "Auspicious Farsan & Starters",
        items: ["Khaman Dhokla with Green Chutney", "Khandvi Pinwheels", "Moong Dal Kachori with Sweet Imli Chutney"],
      },
      {
        course: "Homestyle Celebration Sabzi",
        items: ["Surti Undhiyu", "Shahi Paneer in Cashew Cream Gravy", "Sev Tameta Nu Shaak", "Dudhi Chana Dal"],
      },
      {
        course: "Puffed Breads & Dal",
        items: ["Hot Ghee Phulkas", "Puri with Elaichi Shrikhand", "Gujarati Sweet-Sour Kadhi", "Moong Dal Khichdi with Ghee"],
      },
      {
        course: "Auspicious Sweets",
        items: ["Sooji Halwa (Rava Shira Prasad)", "Puran Poli with Ghee", "Amrakhand with Puri"],
      },
    ],
    processSteps: [
      { step: 1, title: "Pooja Timings Coordination", description: "Align food service strictly with your auspicious muhurat and puja completion." },
      { step: 2, title: "Dietary & Satvik Guidelines", description: "Establish whether onion/garlic or strict fasting ingredients are required." },
      { step: 3, title: "Warm Service", description: "Hot puras and phulkas served directly onto plates by attentive stewards." },
    ],
    faqs: [
      { question: "Can you provide traditional seated Pangkat / leaf service?", answer: "Yes, we regularly arrange traditional seated Pangkat service on banana leaves or eco-friendly patravali with dedicated servers serving hot rotis and dal refills." },
      { question: "Are sweet prasad items prepared in pure desi ghee?", answer: "Yes, all our festive halwas, shira, and laddoos are prepared exclusively with branded Agmark pure cow ghee." },
    ],
    relatedPages: [
      { title: "Gujarati Menu", href: "/menu/gujarati", description: "Undhiyu, dhokla, and regional farsan selections." },
      { title: "South Indian Menu", href: "/menu/south-indian", description: "Traditional payasam, avial, and curd rice." },
      { title: "Request Pooja Quote", href: "/quote?service=Party+%2F+Function", description: "Plan an auspicious family feast with customized pricing." },
    ],
  },
  {
    slug: "decoration",
    title: "Catering Decoration & Buffet Stalls",
    tagline: "Royal copper chafing displays, thematic canopy stalls, floral dining backdrops & luxury table runners",
    shortDesc: "Elevating great food with artistic visual presentation, thematic buffet architecture, and designer tableware.",
    fullDesc: "Exceptional catering is a visual and sensory art. Beyond our benchmark recipes, Nanda Caterers transforms banquet dining spaces into festive palaces. We provide antique hammered copper chafing dishes, carved brass counters, fresh floral centerpieces, illuminated wooden canopy stalls, and coordinated thematic linen that harmonize with your wedding decor.",
    heroImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    ],
    guestRange: "100 – 5,000+ Guests",
    serviceTypeParam: "General Event",
    whatsIncluded: [
      "Hammered brass, copper, and stainless-steel chafing warmers",
      "Custom wooden & metal canopy stalls for interactive live stations",
      "Fresh marigold, rose, and orchid floral arrangements on buffet lines",
      "Coordinated tablecloths, runners, and matching cloth napkins",
      "Illuminated menu signage and calligraphy dish labels",
      "Eco-friendly options including areca palmware and brass cutlery",
    ],
    sampleMenu: [
      {
        course: "Decor Elements Included",
        items: ["Royal Rajasthani Hand-Carved Canopy Stalls", "Hammered Copper Chafing Stations", "Floral Rangoli Buffet Centerpieces", "Carved Watermelon & Fruit Art"],
      },
    ],
    processSteps: [
      { step: 1, title: "Venue Theme Alignment", description: "We collaborate with your wedding decorator to ensure buffet styling complements the overall color palette." },
      { step: 2, title: "Floor Plan Optimization", description: "Design an efficient crowd-flow blueprint eliminating long queues and congestion." },
      { step: 3, title: "Artistic Installation", description: "Our setup crew installs stalls, lighting, warmers, and floral accents hours prior to guest arrival." },
    ],
    faqs: [
      { question: "Is buffet decoration included in the catering packages?", answer: "Basic clean buffet decoration is included in our Silver package. Full thematic floral and copper canopy decoration is included in our Gold and Royal packages." },
      { question: "Can we request a specific color theme for the dining setup?", answer: "Yes, we can customize buffet table skirting and counter runners to match your event theme (e.g. Royal Maroon & Gold, Ivory & Emerald, or Pastel Peach)." },
    ],
    relatedPages: [
      { title: "Browse Photo Gallery", href: "/gallery?filter=Decoration", description: "View real photos of our themed buffet stalls and copper setups." },
      { title: "Compare Packages", href: "/packages", description: "See decoration inclusions across Silver, Gold, and Royal tiers." },
      { title: "Consult on Decor Setup", href: "/quote?service=General+Event", description: "Talk to our event manager about your venue layout." },
    ],
  },
  {
    slug: "social-events",
    title: "Social Events & Festival Banquets",
    tagline: "Diwali gatherings, Navratri fast feasts, kitty parties, farewells & clubhouse celebrations",
    shortDesc: "Vibrant catering tailored for festive occasions, society celebrations, and cultural get-togethers.",
    fullDesc: "Mumbai's social calendar is full of vibrant occasions: Navratri garba nights, Diwali gatherings, society annual days, ladies' kitty parties, and farewell get-togethers. Nanda Caterers brings flavorful regional spreads, interactive chaat stalls, and celebratory sweets that unite friends and communities in shared culinary joy.",
    heroImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    ],
    guestRange: "40 – 2,000+ Guests",
    serviceTypeParam: "Others",
    whatsIncluded: [
      "Fast-friendly (Farali / Upvas) menus for Navratri & Mahashivratri",
      "High-energy live snack stalls (Dosa, Chaat, Pav Bhaji)",
      "Flexible timing options accommodating evening garba or late gatherings",
      "Discreet and prompt refill management throughout the event",
    ],
    sampleMenu: [
      {
        course: "Social Arrival Coolers",
        items: ["Kesari Masala Chaas", "Fresh Guava Chilli Cooler", "Pomegranate Mint Spritzer"],
      },
      {
        course: "Live Festive Stations",
        items: ["Amritsari Chole Kulche", "Mumbai Pav Bhaji with Dollops of Butter", "Pani Puri Counter (6 Waters)"],
      },
      {
        course: "Main Course Comfort",
        items: ["Paneer Pasanda", "Veg Kolhapuri", "Dal Fry with Jeera Rice", "Puri Bhaji"],
      },
      {
        course: "Festive Sweets",
        items: ["Hot Motichur Ladoo", "Kesar Jalebi with Rabdi", "Malai Kulfi"],
      },
    ],
    processSteps: [
      { step: 1, title: "Event Type Discussion", description: "Select between casual live stall setup or full buffet dining." },
      { step: 2, title: "Custom Festival Menu", description: "Incorporate traditional regional sweets and snacks matching the festival." },
      { step: 3, title: "Seamless Execution", description: "Enjoy your gathering while our staff takes care of all serving and clearing." },
    ],
    faqs: [
      { question: "Do you offer Farali (fasting) catering for Navratri and Ekadashi?", answer: "Yes, we specialize in authentic Farali catering including Sabudana Khichdi, Moraiyo Khichdi, Rajgira Puris, Singhadha Halwa, and Farali Patties." },
      { question: "Can you cater events in residential society clubhouses?", answer: "Yes, we have catered hundreds of clubhouse celebrations across Mumbai and Thane, respecting all building noise and safety protocols." },
    ],
    relatedPages: [
      { title: "View Full Food Menu", href: "/menu", description: "Explore all 13 pure vegetarian culinary categories." },
      { title: "Photo Gallery", href: "/gallery", description: "See photos of past community banquets." },
      { title: "Book Your Social Event", href: "/quote?service=Others", description: "Get a quick price quote for your upcoming gathering." },
    ],
  },
];

export function getDetailedService(slug: string): DetailedService | undefined {
  return detailedServices.find((s) => s.slug === slug);
}

// Aliases for compatibility
export const servicesData = detailedServices.map((s) => ({
  id: s.slug,
  slug: s.slug,
  title: s.title,
  tagline: s.tagline,
  shortDesc: s.shortDesc,
  fullDesc: s.fullDesc,
  image: s.heroImage,
  features: s.whatsIncluded.slice(0, 4),
  serviceTypeParam: s.serviceTypeParam,
}));

export const occasionsList = [
  "Weddings & Receptions",
  "Sangeet & Mehendi",
  "Haldi & Ring Ceremony",
  "Corporate AGM & Conferences",
  "Product Launches & Expos",
  "Birthday Celebrations",
  "Housewarming (Griha Pravesh)",
  "Anniversary Dinners",
  "Religious Pujas & Havans",
  "Navratri & Diwali Gatherings",
  "Baby Showers (Godh Bharai)",
  "Alumni & Society Meets",
];

export const whyChooseUsFeatures = [
  {
    icon: "ShieldCheck",
    title: "100% Pure Vegetarian Assurance",
    desc: "Dedicated separate utensils, fresh ingredients, and certified Jain-safe practices without onion or garlic upon request.",
  },
  {
    icon: "Users",
    title: "15+ Years Of Culinary Mastery",
    desc: "Over 5,000 successful banquets catered across Mumbai, Thane, Navi Mumbai, Pune & Goa since 2005.",
  },
  {
    icon: "Truck",
    title: "Live Interactive Cooking Stalls",
    desc: "From sizzling tawa counters and flaming woks to nitrogen dessert bars and freshly baked wood-fired pizzas.",
  },
  {
    icon: "CalendarCheck",
    title: "Zero-Stress Event Management",
    desc: "Dedicated banquet captains, uniformed staff, and strict timeline execution so you can enjoy your guests.",
  },
];
