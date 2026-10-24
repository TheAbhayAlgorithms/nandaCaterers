export interface QuoteWhatsAppDetails {
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

export function buildWhatsAppLink(details?: QuoteWhatsAppDetails): string {
  const baseNumber = "919967894979";
  
  if (!details) {
    const defaultText = "Hello Nanda Caterers! I would like to enquire about your catering services.";
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines: string[] = [
    "✨ *New Catering Enquiry - Nanda Caterers*",
    "--------------------------------------",
  ];

  if (details.firstName || details.lastName) {
    lines.push(`👤 *Name:* ${[details.firstName, details.lastName].filter(Boolean).join(" ")}`);
  }
  if (details.phone) {
    lines.push(`📞 *Phone:* ${details.phone}`);
  }
  if (details.email) {
    lines.push(`📧 *Email:* ${details.email}`);
  }
  const srv = details.service || details.serviceType;
  if (srv) {
    lines.push(`🎉 *Event / Service:* ${srv}`);
  }
  if (details.eventDate) {
    lines.push(`📅 *Date:* ${details.eventDate}`);
  }
  if (details.guestCount) {
    lines.push(`👥 *Estimated Guests:* ${details.guestCount}`);
  }
  if (details.location) {
    lines.push(`📍 *Location:* ${details.location}`);
  }
  if (details.selectedDishes && details.selectedDishes.length > 0) {
    lines.push("");
    lines.push(`🍽️ *Selected Menu Items (${details.selectedDishes.length}):*`);
    details.selectedDishes.forEach((dish) => {
      lines.push(`  • ${dish}`);
    });
  }
  const msg = details.message || details.customMessage;
  if (msg) {
    lines.push("");
    lines.push(`💬 *Notes:* ${msg}`);
  }

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
