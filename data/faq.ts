export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the minimum number of guests you cater for?",
    answer: "We cater for events ranging from intimate family functions of 30–50 guests to grand wedding celebrations and corporate events with several thousand attendees.",
  },
  {
    id: "faq-2",
    question: "How far in advance should we book your catering services?",
    answer: "For wedding ceremonies and peak festive seasons, we recommend booking 2 to 4 months in advance to secure your desired dates. For smaller corporate gatherings or birthday parties, 1 to 2 weeks advance notice is typically sufficient.",
  },
  {
    id: "faq-3",
    question: "Can menus be customized for dietary preferences or specific regional cuisines?",
    answer: "Yes, absolutely! Every event menu is completely customizable. We specialize in authentic Gujarati, Marwari/Jain, South Indian, Punjabi, and International cuisines, accommodating specific dietary requirements such as strict Jain preparations with separate vessels.",
  },
  {
    id: "faq-4",
    question: "Which geographic areas do you serve?",
    answer: "We proudly serve clients across Mumbai, Thane, Navi Mumbai, Pune, and Goa. For destination celebrations across Maharashtra and Goa, our dedicated team handles transport, mobile setups, and on-site culinary execution.",
  },
  {
    id: "faq-5",
    question: "Do you provide catering decoration and service staff?",
    answer: "Yes. In addition to preparing authentic dishes, we provide end-to-end catering decorations including theme buffet stalls, elegant chafing dish setups, live cooking stations, and well-trained, uniformed hospitality staff.",
  },
];
