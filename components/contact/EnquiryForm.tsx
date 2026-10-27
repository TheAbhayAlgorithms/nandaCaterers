"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Family Function",
  "Birthday/Party",
  "Festival",
  "Other",
] as const;

interface FormState {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  city: string;
  message: string;
  botTrap: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  guests?: string;
  city?: string;
}

export function EnquiryForm({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    guests: "",
    city: "Mumbai",
    message: "",
    botTrap: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Validate form
  const validate = (): boolean => {
    const errs: FormErrors = {};

    // 1. Name required
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }

    // 2. 10-digit Indian phone
    const cleanedPhone = formData.phone.replace(/[\s\-+]/g, "").replace(/^91/, "").replace(/^0/, "");
    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      errs.phone = "Please enter a valid 10-digit Indian phone number.";
    }

    // 3. Event date not in the past
    if (!formData.eventDate) {
      errs.eventDate = "Please select an event date.";
    } else {
      const selected = new Date(formData.eventDate);
      selected.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.eventDate = "Event date cannot be in the past.";
      }
    }

    // 4. Guests a positive number
    const guestNum = parseInt(formData.guests, 10);
    if (!formData.guests || isNaN(guestNum) || guestNum <= 0) {
      errs.guests = "Please enter a valid guest count (e.g. 150).";
    }

    // 5. City required
    if (!formData.city.trim()) {
      errs.city = "Please enter your event city (e.g. Mumbai, Thane).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if bot filled this, silently ignore
    if (formData.botTrap) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmittedSuccess(true);

    const messageLines = [
      "New Catering Enquiry - Nanda Caterers",
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Event: ${formData.eventType}`,
      `Date: ${formData.eventDate}`,
      `Guests: ${formData.guests.trim()}`,
      `City: ${formData.city.trim()}`,
      `Message: ${formData.message.trim() || "None"}`,
    ];

    const waText = messageLines.join("\n");
    const waUrl = `https://wa.me/919967894979?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div
      id="enquiry"
      className={`rounded-3xl bg-paper border border-ink/10 p-6 sm:p-8 md:p-10 shadow-warm relative ${className}`}
    >
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-accent block mb-1">
          FAST WHATSAPP QUOTE
        </span>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
          Send Your Event Enquiry
        </h2>
        <p className="text-xs sm:text-sm text-ink/70 mt-1">
          Share your celebration details below. We connect directly via WhatsApp to discuss menus, pricing, and tasting arrangements.
        </p>
      </div>

      {submittedSuccess && (
        <div
          role="status"
          className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 text-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-semibold">Opening WhatsApp...</p>
            <p className="text-xs text-emerald-700">
              Your details are ready to send directly to our team on WhatsApp.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field (hidden from view) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_bot_trap">Do not fill this</label>
          <input
            id="company_bot_trap"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.botTrap}
            onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
          />
        </div>

        {/* 2-col Row: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-semibold text-ink mb-1.5">
              Your Name <span className="text-accent">*</span>
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              placeholder="e.g. Rahul Mehta"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-ink mb-1.5">
              Phone Number <span className="text-accent">*</span>
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* 2-col Row: Event Type & Event Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiry-event" className="block text-xs font-semibold text-ink mb-1.5">
              Event Type <span className="text-accent">*</span>
            </label>
            <select
              id="enquiry-event"
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer"
            >
              {EVENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="enquiry-date" className="block text-xs font-semibold text-ink mb-1.5">
              Event Date <span className="text-accent">*</span>
            </label>
            <input
              id="enquiry-date"
              type="date"
              required
              value={formData.eventDate}
              onChange={(e) => {
                setFormData({ ...formData, eventDate: e.target.value });
                if (errors.eventDate) setErrors({ ...errors, eventDate: undefined });
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            {errors.eventDate && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.eventDate}</span>
              </p>
            )}
          </div>
        </div>

        {/* 2-col Row: Guests & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiry-guests" className="block text-xs font-semibold text-ink mb-1.5">
              Number of Guests <span className="text-accent">*</span>
            </label>
            <input
              id="enquiry-guests"
              type="number"
              min="10"
              required
              placeholder="e.g. 200"
              value={formData.guests}
              onChange={(e) => {
                setFormData({ ...formData, guests: e.target.value });
                if (errors.guests) setErrors({ ...errors, guests: undefined });
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            {errors.guests && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.guests}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="enquiry-city" className="block text-xs font-semibold text-ink mb-1.5">
              City <span className="text-accent">*</span>
            </label>
            <input
              id="enquiry-city"
              type="text"
              required
              placeholder="e.g. Mumbai, Thane, Pune"
              value={formData.city}
              onChange={(e) => {
                setFormData({ ...formData, city: e.target.value });
                if (errors.city) setErrors({ ...errors, city: undefined });
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            {errors.city && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.city}</span>
              </p>
            )}
          </div>
        </div>

        {/* Message (Optional) */}
        <div>
          <label htmlFor="enquiry-message" className="block text-xs font-semibold text-ink mb-1.5">
            Special Requests / Dietary Preferences (Optional)
          </label>
          <textarea
            id="enquiry-message"
            rows={3}
            placeholder="e.g. Require Jain menu options, interested in live pasta and chaat counters."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-ink/60">
            Directly opens WhatsApp with pre-filled message.
          </span>
          <Button
            type="submit"
            variant="filled"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Enquiry via WhatsApp</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
