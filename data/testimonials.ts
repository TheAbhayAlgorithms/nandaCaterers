// PLACEHOLDER: replace with real client reviews before launch

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  occasion: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    quote: "The live counters at our daughter's wedding reception in Bandra were sensational! The Gujarati undhiyu and paneer specialities were praised by every single guest. Flawless hospitality from start to finish.",
    author: "Rajesh S.",
    role: "Wedding Host",
    location: "Bandra, Mumbai",
    rating: 5,
    occasion: "Wedding Reception",
  },
  {
    id: "review-2",
    quote: "We hired Nanda Caterers for our quarterly corporate summit in BKC. The continental spread and desserts were impeccable. Everything was set up right on schedule and the staff was extremely courteous.",
    author: "Pooja M.",
    role: "Corporate Client",
    location: "BKC, Mumbai",
    rating: 5,
    occasion: "Corporate Summit",
  },
  {
    id: "review-3",
    quote: "For our family's 50th anniversary celebration in Thane, Nanda Caterers delivered delicious pure vegetarian food with benchmark taste and hygienic presentation. Truly lived up to their 15+ years reputation.",
    author: "Amit K.",
    role: "Family Client",
    location: "Thane",
    rating: 5,
    occasion: "Golden Anniversary",
  },
  {
    id: "review-4",
    quote: "Outstanding breakfast and lunch catering for our Sangeet ceremony. Guests are still asking about their signature Rabdi Jalebi and Mysore Masala Dosa! Highly recommended for all wedding functions.",
    author: "Sneha P.",
    role: "Wedding Client",
    location: "Khar, Mumbai",
    rating: 5,
    occasion: "Sangeet Ceremony",
  },
];
