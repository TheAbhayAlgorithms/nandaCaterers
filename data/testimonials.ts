export interface Testimonial {
  id: string;
  name: string;
  role: string;
  eventType: string;
  location: string;
  date: string;
  rating: number;
  quote: string;
  isVerified?: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "Rajesh & Meena Shah",
    role: "Parents of the Bride",
    eventType: "Wedding Reception (800 Guests)",
    location: "Bandra (East), Mumbai",
    date: "December 2025",
    rating: 5,
    quote:
      "Nanda Caterers catered our daughter's wedding reception at MIG Cricket Club, Bandra. The Gujarati Surti Undhiyu and Paneer Tikka live counters were the talk of the evening. Every single guest praised the authentic benchmark taste, cleanliness, and the warmth of their serving staff.",
    isVerified: true,
  },
  {
    id: "review-2",
    name: "Vikram Singhania",
    role: "VP Corporate Administration",
    eventType: "Annual Corporate Leadership Gala (350 Guests)",
    location: "BKC, Mumbai",
    date: "November 2025",
    rating: 5,
    quote:
      "We hired Nanda Caterers for our senior leadership summit in BKC. Impeccable timing, non-messy executive presentation, and an outstanding continental and North Indian spread. They handled our strict Jain requirements without a single glitch. Highly recommended for corporate events.",
    isVerified: true,
  },
  {
    id: "review-3",
    name: "Kavita Parekh",
    role: "Host",
    eventType: "Golden Jubilee Anniversary (200 Guests)",
    location: "Khar (East), Mumbai",
    date: "January 2026",
    rating: 5,
    quote:
      "For my in-laws' 50th wedding anniversary, we wanted traditional satvik food that tasted like home. The Dal Makhani, soft phulkas, and hot Rabdi Jalebi prepared by their master maharajs were extraordinary. Truly Mumbai's finest pure vegetarian caterer.",
    isVerified: true,
  },
  {
    id: "review-4",
    name: "Anand & Pooja Kulkarni",
    role: "Wedding Hosts",
    eventType: "Sangeet & Cocktail Evening (400 Guests)",
    location: "Thane West",
    date: "January 2026",
    rating: 5,
    quote:
      "The live chaat counter with 5 flavored waters and the Italian pasta station were super hits with our younger crowd. Their floor captain coordinated everything smoothly so we could dance and enjoy without worrying about food refills.",
    isVerified: true,
  },
  {
    id: "review-5",
    name: "Deepak Mehta",
    role: "Society Secretary",
    eventType: "Navratri Festival Banquet (600 Guests)",
    location: "Goregaon (East), Mumbai",
    date: "October 2025",
    rating: 5,
    quote:
      "Organizing catering for 600 society residents during Navratri is challenging, but Nanda Caterers executed it with clockwork precision. Hot puris, fresh farali snacks, and shrikhand were served seamlessly without any waiting queues.",
    isVerified: true,
  },
  {
    id: "review-6",
    name: "Nilesh & Smita Joshi",
    role: "Homeowner",
    eventType: "Griha Pravesh & Vastu Pooja (120 Guests)",
    location: "Vashi, Navi Mumbai",
    date: "February 2026",
    rating: 5,
    quote:
      "Punctual arrival early in the morning, auspicious pure cow ghee prasad, and respectful stewards who understood our religious rituals. All our relatives from Pune and Gujarat were deeply impressed by the hospitality.",
    isVerified: true,
  },
];
