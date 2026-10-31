export interface CateringWhatsAppDetails {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  location?: string;
  service?: string;
  serviceType?: string;
  eventDate?: string;
  guestCount?: string;
  message?: string;
  customMessage?: string;
  selectedDishes?: string[];
}

export function buildWhatsAppLink(details?: CateringWhatsAppDetails): string {
  const baseNumber = "919967894979";
  
  if (!details) {
    const defaultText = "Hello Nanda Caterers! I would like to enquire about your catering services.";
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines: string[] = [
    "*NEW CATERING ENQUIRY*",
    "*Nanda Caterers - Mumbai*",
    "____________________________________",
  ];

  if (details.firstName || details.lastName) {
    const fullName = [details.firstName, details.lastName].filter(Boolean).join(" ");
    lines.push(`*Name:* ${fullName}`);
  }
  if (details.phone) {
    lines.push(`*Phone:* ${details.phone}`);
  }
  const srv = details.service || details.serviceType;
  if (srv) {
    lines.push(`*Occasion:* ${srv}`);
  }
  if (details.eventDate) {
    lines.push(`*Event Date:* ${details.eventDate}`);
  }
  if (details.guestCount) {
    lines.push(`*Estimated Guests:* ${details.guestCount}`);
  }
  if (details.location) {
    lines.push(`*Venue / City:* ${details.location}`);
  }

  if (details.selectedDishes && details.selectedDishes.length > 0) {
    lines.push("");
    lines.push(`*Selected Dishes (${details.selectedDishes.length}):*`);
    details.selectedDishes.forEach((dish) => {
      lines.push(`• ${dish}`);
    });
  }

  const msg = details.message || details.customMessage;
  if (msg) {
    lines.push("");
    lines.push(`*Special Notes:*`);
    lines.push(`_${msg}_`);
  }

  lines.push("____________________________________");
  lines.push("_Sent from nandacaterers.com_");

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
