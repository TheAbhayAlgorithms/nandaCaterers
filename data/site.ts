// Site metadata and business details

// TODO: confirm with client if email is indeed info@nandacateres.com or info@nandacaterers.com
export const CONTACT_EMAIL = "info@nandacateres.com";

export const siteConfig = {
  name: "Nanda Caterers",
  tagline: "A Perfect Blend of Sensational Food",
  subline: "Wedding catering with new ideas, made to your requirements, served in our own style.",
  description: "Premier 100% vegetarian wedding and event caterers in Mumbai, Thane, Navi Mumbai, Pune & Goa. Crafting unforgettable culinary feasts since 2005.",
  foundedYear: 2005,
  experienceYears: 15,
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
  
  responsePromise: "We just need a couple of hours! No more than 2 working days since receiving your enquiry.",
  
  offices: [
    {
      type: "Main Office",
      name: "Bandra Headquarters",
      address: "Siddhart Colony, Service Road, Near Cardinal Gracious High School, W.E. Highway, Bandra (East), Mumbai 400 051",
      city: "Mumbai",
      pinCode: "400051",
      isPrimary: true,
    },
    {
      type: "Branch Office",
      name: "Khar Branch",
      address: "Shop No 1, Prajakta Apartment, Nirmal Nagar, Near Nirmal Nagar Police Station, Khar (East), Mumbai 400 051",
      city: "Mumbai",
      pinCode: "400051",
      isPrimary: false,
    },
  ],
  
  // TODO: confirm with client exact numbers for stats counters
  stats: {
    varieties: { value: 500, suffix: "+", label: "Foods Variety" },
    customers: { value: 5000, suffix: "+", label: "Happy Customers" },
    years: { value: 15, suffix: "+", label: "Years Experience" },
    freshness: { value: 100, suffix: "%", label: "Fresh & Tasty Food" },
  },
  
  social: {
    facebook: "https://facebook.com/nandacaterers",
    instagram: "https://instagram.com/nandacaterers",
    twitter: "https://x.com/nandacaterers",
  },
  
  mapEmbedUrl: "https://maps.google.com/maps?q=nanda%20caterers&t=m&z=17&output=embed&iwloc=near",
  mapDirectionsUrl: "https://maps.google.com/?q=Nanda+Caterers+Bandra+Mumbai",
};
