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
    "👑 *NANDA CATERERS - CATERING ENQUIRY*",
    "━━━━━━━━━━━━━━━━━━━━━━",
  ];

  if (details.firstName || details.lastName) {
    const fullName = [details.firstName, details.lastName].filter(Boolean).join(" ");
    lines.push(`• *Client Name:* ${fullName}`);
  }
  if (details.phone) {
    lines.push(`• *Contact Number:* ${details.phone}`);
  }
  if (details.email) {
    lines.push(`• *Email:* ${details.email}`);
  }
  const srv = details.service || details.serviceType;
  if (srv) {
    lines.push(`• *Occasion / Service:* ${srv}`);
  }
  if (details.eventDate) {
    lines.push(`• *Event Date:* ${details.eventDate}`);
  }
  if (details.guestCount) {
    lines.push(`• *Expected Guests:* ${details.guestCount}`);
  }
  if (details.location) {
    lines.push(`• *Event Location / Venue:* ${details.location}`);
  }

  if (details.selectedDishes && details.selectedDishes.length > 0) {
    lines.push("");
    lines.push(`🍽️ *Selected Menu Dishes (${details.selectedDishes.length}):*`);
    details.selectedDishes.forEach((dish) => {
      lines.push(`   - ${dish}`);
    });
  }

  const msg = details.message || details.customMessage;
  if (msg) {
    lines.push("");
    lines.push(`📝 *Special Requests / Notes:*`);
    lines.push(`   ${msg}`);
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("_Sent via nandacaterers.com_");

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
