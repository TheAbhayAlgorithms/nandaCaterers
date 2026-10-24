// Single source of truth for business configuration and metadata

export const SITE_URL =
  process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://nandacaterers.com";

// Verified official business email (corrected from previous typo nandacateres.com)
export const CONTACT_EMAIL = "info@nandacaterers.com";

export const siteConfig = {
  name: "Nanda Caterers",
  legalName: "Nanda Caterers Mumbai",
  tagline: "A Perfect Blend of Sensational Food",
  subline: "100% pure vegetarian catering crafted with passion, authentic regional traditions, and exemplary hospitality since 2005.",
  description:
    "Mumbai's trusted 100% pure vegetarian wedding and event caterers since 2005. Serving lavish feasts, live counters, and regional delicacies across Mumbai, Thane, Navi Mumbai, Pune & Goa.",
  canonicalUrl: SITE_URL,
  foundedYear: 2005,
  experienceYears: 15,
  
  // Single confirmed list of service areas
  areasServed: ["Mumbai", "Thane", "Navi Mumbai", "Pune", "Goa"],
  
  phone: {
    display: "+91 99678 94979",
    raw: "+919967894979",
    whatsappNumber: "919967894979",
  },
  
  email: CONTACT_EMAIL,
  
  workingHours: {
    days: "Monday to Saturday",
    time: "9:00 AM to 9:00 PM",
    raw: "Mo-Sa 09:00-21:00",
  },
  
  // Single consistent response guarantee
  responsePromise: "We reply within 2 working hours during business hours (Mon-Sat 9 AM - 9 PM)",
  mapDirectionsUrl: "https://maps.google.com/?q=Nanda+Caterers+Bandra+East+Mumbai",
  mapEmbedUrl: "https://maps.google.com/maps?q=nanda%20caterers&t=m&z=17&output=embed&iwloc=near",
  
  offices: [
    {
      type: "Headquarters",
      name: "Bandra Main Office",
      address: "Siddhart Colony, Service Road, Near Cardinal Gracious High School, W.E. Highway, Bandra (East), Mumbai 400 051",
      city: "Mumbai",
      pinCode: "400051",
      isPrimary: true,
      mapUrl: "https://maps.google.com/?q=Nanda+Caterers+Bandra+East+Mumbai",
      embedUrl: "https://maps.google.com/maps?q=nanda%20caterers&t=m&z=17&output=embed&iwloc=near",
    },
    {
      type: "Branch Office",
      name: "Khar Branch",
      address: "Shop No 1, Prajakta Apartment, Nirmal Nagar, Near Nirmal Nagar Police Station, Khar (East), Mumbai 400 051",
      city: "Mumbai",
      pinCode: "400051",
      isPrimary: false,
      mapUrl: "https://maps.google.com/?q=Shop+No+1+Prajakta+Apartment+Khar+East+Mumbai",
      embedUrl: "https://maps.google.com/maps?q=Nirmal+Nagar+Khar+East+Mumbai&t=m&z=17&output=embed&iwloc=near",
    },
  ],
  
  // Real SSR initial numbers (never renders 0+)
  stats: {
    years: { value: 15, suffix: "+", label: "Years of Excellence" },
    events: { value: 5000, suffix: "+", label: "Celebrations Catered" },
    customers: { value: 5000, suffix: "+", label: "Happy Hosts" },
    dishes: { value: 500, suffix: "+", label: "Pure Veg Dishes" },
    varieties: { value: 500, suffix: "+", label: "Pure Veg Varieties" },
    freshness: { value: 100, suffix: "%", label: "Pure Veg Freshness" },
    rating: { value: 4.9, suffix: "★", label: "Client Satisfaction" },
  },
  
  social: {
    facebook: {
      name: "Facebook",
      url: "https://facebook.com/nandacaterers",
      ariaLabel: "Follow Nanda Caterers on Facebook",
    },
    instagram: {
      name: "Instagram",
      url: "https://instagram.com/nandacaterers",
      ariaLabel: "Follow Nanda Caterers on Instagram",
    },
    youtube: {
      name: "YouTube",
      url: "https://youtube.com/@nandacaterers",
      ariaLabel: "Watch catering setups on YouTube",
    },
  },
};
