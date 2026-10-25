export interface FAQCategory {
  category: string;
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const detailedFaqData: FAQCategory[] = [
  {
    category: "Bookings & Planning",
    items: [
      {
        id: "faq-min-guests",
        question: "What is the minimum and maximum number of guests you cater for?",
        answer:
          "We cater for gatherings starting from 30 to 40 guests for intimate home poojas, birthdays, and kitty parties, up to grand wedding banquets and corporate conferences with 5,000+ guests. Our kitchen infrastructure and mobile equipment are designed to scale smoothly.",
      },
      {
        id: "faq-advance-booking",
        question: "How far in advance should we reserve our catering date?",
        answer:
          "For peak Mumbai wedding season dates (November through February), we advise booking 2 to 4 months in advance to ensure date exclusivity and kitchen bandwidth. For corporate seminars or family gatherings, 1 to 2 weeks advance notice is typically sufficient.",
      },
      {
        id: "faq-after-quote",
        question: "What happens after I submit a quote request on your website?",
        answer:
          "Our senior banquet manager reviews your requirements and calls or WhatsApps you within 2 working hours with a customized itemized proposal. Once aligned on the menu framework, we schedule a complimentary tasting session and venue walkthrough before formalizing the booking.",
      },
    ],
  },
  {
    category: "Menus, Taste & Dietary Standards",
    items: [
      {
        id: "faq-jain-food",
        question: "Do you provide authentic strict Jain and Swaminarayan food?",
        answer:
          "Yes, absolutely. Being a 100% pure vegetarian caterer since 2005, we have dedicated sections in our kitchens with segregated utensils, kadhais, and ladles specifically reserved for strict Jain and Swaminarayan cooking—completely free from onion, garlic, potatoes, and root vegetables.",
      },
      {
        id: "faq-customization",
        question: "Can we mix and match cuisines (e.g. Gujarati sabzi with Italian live pasta)?",
        answer:
          "Yes! Every menu we formulate is completely bespoke. You can pair traditional Gujarati undhiyu and dal makhani with an interactive live pasta counter, Mumbai chaat bazaar, and Mexican nachos station.",
      },
      {
        id: "faq-tasting",
        question: "Can we arrange a food tasting session before confirming our booking?",
        answer:
          "Yes. For confirmed wedding and large banquet enquiries (100+ guests), we host a comprehensive tasting session at our kitchen facility in Bandra/Khar so the host family can taste their shortlisted curries, tandoori starters, and royal sweets.",
      },
    ],
  },
  {
    category: "Logistics, Decor & Service Staff",
    items: [
      {
        id: "faq-areas-served",
        question: "Which geographic areas and cities do you serve?",
        answer:
          "We regularly cater across Mumbai (South Mumbai to Western and Central suburbs), Thane, and Navi Mumbai. For destination weddings and weekend retreats, we have dedicated mobile kitchen caravans that serve Pune, Lonavala, Khandala, Alibaug, and Goa.",
      },
      {
        id: "faq-decor-staff",
        question: "Do your catering packages include serving staff, crockery, and buffet decor?",
        answer:
          "Yes. All our catering packages come complete with trained, uniformed hospitality stewards, a dedicated floor supervisor, fine bone-china or areca palmware crockery, cutlery, and clean buffet table skirtings with warm chafing dishes.",
      },
    ],
  },
  {
    category: "Payments, Pricing & Policies",
    items: [
      {
        id: "faq-payment-terms",
        question: "What are your payment terms and booking deposit policies?",
        answer:
          "We require an initial 25% advance deposit to block and lock your event date on our master calendar. 50% is payable 7 days prior to the event date following the final menu sign-off, and the remaining 25% balance is settled on the event day upon successful service completion.",
      },
      {
        id: "faq-cancellation",
        question: "What is your cancellation and date postponement policy?",
        answer:
          "In case of unforeseen circumstances, we permit date postponements at no additional penalty if notified at least 21 days prior to the original date, subject to calendar availability. Full cancellation details are outlined transparently in your official quotation agreement.",
      },
    ],
  },
];

export const flatFaqList = detailedFaqData.flatMap((cat) => cat.items);
export const faqList = flatFaqList;

// 5 general Q&As per Section 9.5: minimum guests, advance booking, customised menus, areas served, decoration services
export const fivePrimaryFaqs = [
  flatFaqList.find((f) => f.id === "faq-min-guests") || flatFaqList[0],
  flatFaqList.find((f) => f.id === "faq-advance-booking") || flatFaqList[1],
  flatFaqList.find((f) => f.id === "faq-customization") || flatFaqList[2],
  flatFaqList.find((f) => f.id === "faq-areas-served") || flatFaqList[3],
  flatFaqList.find((f) => f.id === "faq-decor-staff") || flatFaqList[4],
];

