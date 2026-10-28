// About page copy and structured data per Section 9.3

export interface TimelineNode {
  year: string;
  title: string;
  description: string;
}

export interface CrewMember {
  role: string;
  name: string;
  experience: string;
  initials: string;
}

export const aboutData = {
  // Our Story paragraphs
  story: [
    "Nanda Caterers makes every occasion memorable, just for you. We believe in leaving lasting impressions with over 20 years of experience. We are committed to maintaining high standards of taste and hygiene in food preparation. Our operations are carried out by our trained chefs, staff and team members, who have well-equipped, best-in-class kitchen facilities, ensuring tasty treats that are always fresh and safe to consume.",
    "Nanda Caterers was founded in 2005 and, throughout the decades, has specialised in wedding function catering as well as corporate catering, event catering services and party catering.",
  ],

  // Timeline mini (3 nodes)
  timeline: [
    {
      year: "2005",
      title: "Founded in Mumbai",
      description: "Started with a vision for lavish wedding feasts.",
    },
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Extended catering operations across Thane, Navi Mumbai, Pune & destination weddings in Goa.",
    },
    {
      year: "2026",
      title: "20+ Years of Trust",
      description: "Celebrated 5,000+ happy hosts with 500+ authentic delicacies.",
    },
  ] as TimelineNode[],

  // Our Reach
  reachParagraph:
    "Over the past 20 years we have been working hard to give the best service across Mumbai, Thane, Navi Mumbai, Pune and Goa. Reaching out to each community has also been of utmost importance to us. Nanda Caterers is taking its legacy further with the same passion and commitment.",

  locations: ["Mumbai", "Thane", "Navi Mumbai", "Pune", "Goa"],

  // "What we do" occasions chip cloud
  occasions: [
    "Wedding",
    "Kitty & Birthday Parties",
    "Family Functions",
    "Indian Festivals",
    "Sangeet",
    "Mehendi",
    "Engagement",
    "In-House Parties",
    "Farewell",
  ],

  // Indian catering specialty
  specialtyCopy:
    "We specialise in a wide range of Indian Punjabi, Maharashtrian, Gujarati and South Indian food catering, as well as Mughlai, Chinese and continental food catering.",

  // Crew: 3 role-based placeholder cards, flagged // PLACEHOLDER
  crew: [
    {
      // PLACEHOLDER: Replace with verified team member before launch
      role: "Head Chef",
      name: "Master Chef Rajesh",
      experience: "20+ Years in Traditional Royal Banquets",
      initials: "RC",
    },
    {
      // PLACEHOLDER: Replace with verified team member before launch
      role: "Event Manager",
      name: "Pooja Sharma",
      experience: "12+ Years in Luxury Wedding Hospitality",
      initials: "PS",
    },
    {
      // PLACEHOLDER: Replace with verified team member before launch
      role: "Kitchen Lead",
      name: "Suresh Patil",
      experience: "15+ Years in Quality & Food Safety Control",
      initials: "SP",
    },
  ] as CrewMember[],
};
