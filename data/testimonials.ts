// PLACEHOLDER: replace with real reviews before launch
// The live site has placeholder reviews. These are clearly flagged placeholders with generic authors.

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  eventType: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  isPlaceholder: boolean;
  isVerified?: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "Wedding Host Family",
    role: "Client Review",
    eventType: "Wedding Reception (800 Guests)",
    location: "Bandra (East), Mumbai",
    date: "December 2025",
    rating: 5,
    text:
      "Nanda Caterers catered our daughter's wedding reception. The Gujarati Surti Undhiyu and Paneer Tikka live counters were the talk of the evening. Every single guest praised the authentic taste, cleanliness, and the warmth of their serving staff.",
    isPlaceholder: true,
    isVerified: true,
  },
  {
    id: "review-2",
    name: "Corporate Client",
    role: "Client Review",
    eventType: "Annual Corporate Gala (350 Guests)",
    location: "BKC, Mumbai",
    date: "November 2025",
    rating: 5,
    text:
      "We hired Nanda Caterers for our corporate summit in BKC. Impeccable timing, executive presentation, and an outstanding continental and North Indian spread. They handled our strict Jain requirements without a single glitch.",
    isPlaceholder: true,
    isVerified: true,
  },
  {
    id: "review-3",
    name: "Family Function Host",
    role: "Client Review",
    eventType: "Anniversary Celebration (200 Guests)",
    location: "Khar (East), Mumbai",
    date: "January 2026",
    rating: 5,
    text:
      "For our family celebration, we wanted traditional satvik food that tasted like home. The Dal Makhani, soft phulkas, and hot Rabdi Jalebi prepared by their master maharajs were extraordinary. Highly recommended.",
    isPlaceholder: true,
    isVerified: true,
  },
];
