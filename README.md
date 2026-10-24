# Nanda Caterers – Official Website

A production-ready, high-performance, fully responsive website built for **Nanda Caterers**, Mumbai's premier 100% pure vegetarian wedding and event catering company (founded in 2005).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, delivering an authentic, festive, food-first aesthetic that feels like a warm Indian wedding feast.

---

## 🌟 Key Highlights & Architecture

- **100% Pure Vegetarian Focus**: Dedicated badges, green veg indicators, and segregated regional menus.
- **Rich Indian Visual Identity**: Bespoke color palette (Cream, Ivory, Saffron, Turmeric, Maroon, Chilli, Leaf, Charcoal), subtle grain overlays, inline SVG rangoli/mandala watermarks, and ornamental dividers.
- **13 Complete Menu Categories**: Breakfast, Starter, Welcome Drink, Main Course, Gujarati, South Indian, Sweets, Ice Cream, Chinese, Continental, Thai, Italian, Mexican.
- **Interactive "Add to Quote List" Feature**: Allows hosts to browse dishes, select favorite recipes with persistent `localStorage` storage, and hand off selected dishes directly to the quote form and WhatsApp (`wa.me`).
- **Live Search & Highlights**: Client-side dish filtering with dynamic keyword highlighting and empty states.
- **Accessible Interactions**: Accessible Lightbox for photo gallery, keyboard navigation, focus trap in mobile drawer, and reduced-motion support.
- **Rigorous SEO**: JSON-LD `CateringBusiness` / `LocalBusiness` schema, dynamic XML sitemaps, robots.txt, and Open Graph tags.

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js 18+ or 20+
- npm (or yarn / pnpm / bun)

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy the example environment configuration:
```bash
cp .env.example .env.local
```

Configure your variables in `.env.local`:
```env
# Optional: Resend API key for emailing quote enquiries
RESEND_API_KEY=re_your_api_key_here
QUOTE_TO_EMAIL=info@nandacateres.com

# Site URL for canonical and Open Graph metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
> *Note:* If `RESEND_API_KEY` is not provided or left as default, form submissions will seamlessly log details to your terminal in development without throwing errors.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 How to Update Website Content (Data-Driven Architecture)

All content lives strictly in typed data files under `/data`. You never need to touch core component code to edit dishes, texts, or services:

### 1. Business Info, Offices & Stats
Edit `data/site.ts`:
- Change office addresses, phone numbers, WhatsApp lines, or business hours.
- Update stats counters (`varieties`, `customers`, `years`, `freshness`).

### 2. Food Menu Categories & Dishes
Edit `data/menu.ts`:
- Add or modify dishes under any of the 13 categories.
- Mark optional price notes (e.g., `(Extra Rs.30/-)`).
- Update category images and descriptions.

### 3. Catering Services & Occasions
Edit `data/services.ts`:
- Customize the 6 core service cards (Wedding Event, Family Function, Corporate Events, Outdoor Party, Birthday Party, Social Events).
- Update the Occasions chip cloud list and "Why Choose Us" feature points.

### 4. Customer Testimonials
Edit `data/testimonials.ts`:
- Add genuine wedding and corporate reviews with client names, occasions, ratings, and quotes.

### 5. Photo Gallery
Edit `data/gallery.ts`:
- Replace Unsplash imagery with real event photography, adding titles and categories (`Weddings`, `Buffets`, `Live Counters`, `Desserts`, `Decorations`).

### 6. Frequently Asked Questions
Edit `data/faq.ts`:
- Add or modify answers regarding guest capacities, booking policies, or dietary accommodations.

---

## 🎨 Changing Design Tokens (Colours & Typography)

- **Colors & Spacing**: Configured in `tailwind.config.ts` and `app/globals.css` using CSS custom properties:
  - `--cream: #FFF8EC` (Background)
  - `--ivory: #FFFDF7` (Card backgrounds)
  - `--saffron: #F29A1F` (Primary accents & buttons)
  - `--turmeric: #E8B004` (Stars & secondary highlights)
  - `--maroon: #7A1F2B` (Headings & dark bands)
  - `--leaf: #2F6B3C` (100% Veg indicator)
  - `--charcoal: #2A1B16` (Body text & footer)
- **Typography**: Powered by `next/font/google` in `app/layout.tsx`:
  - **Headings**: Playfair Display
  - **Body / UI**: Poppins
  - **Eyebrows / Accents**: Caveat

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select this repository.
4. Add your Environment Variables:
   - `RESEND_API_KEY`
   - `QUOTE_TO_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://nandacaterers.com`)
5. Click **"Deploy"**.

---

## 📝 TODO List for the Client Before Launch

Please review and confirm the following items before taking the site live:

1. **Email Address Spelling**:
   - The live site showed `info@nandacateres.com` (missing the second 'r'). Please confirm whether the official inbox is `info@nandacateres.com` or `info@nandacaterers.com`. This is centralized in `CONTACT_EMAIL` in `data/site.ts`.
2. **Replace Placeholder Testimonials**:
   - Update `data/testimonials.ts` with authentic client feedback, host names, and verified event reviews.
3. **Replace Placeholder Team Cards**:
   - Update `teamMembers` in `components/about/AboutContent.tsx` with actual head chefs, managers, and team member photos.
4. **Confirm Welcome Drink List**:
   - The original source page could not be fetched for Welcome Drinks during initial drafting. We populated standard Indian welcome drinks (Mango Lassi, Jaljeera, Aam Panna, Rose Sharbat, etc.) in `data/menu.ts`. Please verify and edit as desired.
5. **Confirm Business Stats Numbers**:
   - Current counters are set to: 500+ Varieties, 5,000+ Happy Customers, 15+ Years Experience, 100% Fresh Food in `data/site.ts`. Please confirm exact numbers.
6. **Provide Official Social Media Links**:
   - Replace placeholder URLs for Facebook, Instagram, and Twitter in `data/site.ts`.
7. **Replace Stock Photography with Real Photos**:
   - Update `data/gallery.ts`, service photos, and hero backgrounds with high-resolution images of your actual banquet setups and live food stalls.
