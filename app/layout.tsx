import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { QuoteTray } from "@/components/layout/QuoteTray";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { SplashLoader } from "@/components/layout/SplashLoader";
import { QuoteSelectionProvider } from "@/context/QuoteSelectionContext";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#7A1F2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nandacaterers.com"),
  title: {
    default: "Nanda Caterers | Best Wedding Caterers in Mumbai (100% Pure Veg)",
    template: "%s | Nanda Caterers – Wedding Caterers in Mumbai",
  },
  description:
    "Nanda Caterers: Benchmark 100% pure vegetarian catering in Mumbai, Thane, Navi Mumbai, Pune & Goa. Specializing in lavish wedding feasts, Gujarati & Punjabi delicacies, and corporate events.",
  keywords: [
    "caterers in mumbai",
    "wedding caterers mumbai",
    "pure veg caterers",
    "gujarati caterers bandra",
    "nanda caterers",
    "corporate catering mumbai",
    "best wedding catering pune goa",
  ],
  authors: [{ name: "Nanda Caterers" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nandacaterers.com",
    siteName: "Nanda Caterers",
    title: "Nanda Caterers – Wedding Caterers in Mumbai",
    description:
      "A Perfect Blend of Sensational Food. Benchmark 100% pure vegetarian catering for weddings and celebrations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nanda Caterers Royal Wedding Banquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanda Caterers – Wedding Caterers in Mumbai",
    description:
      "A Perfect Blend of Sensational Food. Benchmark 100% pure vegetarian catering for weddings and celebrations.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["CateringBusiness", "LocalBusiness"],
    name: siteConfig.name,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
    url: "https://nandacaterers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.offices[0].address,
      addressLocality: "Mumbai",
      postalCode: "400051",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-21:00",
    foundingDate: "2005",
    areaServed: siteConfig.areasServed,
    priceRange: "$$",
    servesCuisine: ["Indian", "Vegetarian", "Gujarati", "Punjabi", "Continental", "Chinese", "Italian"],
  };

  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${poppins.variable} ${caveat.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-saffron selection:text-charcoal">
        <QuoteSelectionProvider>
          {/* Top Scroll Progress Indicator */}
          <ScrollProgress />

          {/* First Load Splash Screen */}
          <SplashLoader />

          {/* Header & Sticky Navigation */}
          <Navbar />

          {/* Main Landmark with safe padding for mobile bottom bar */}
          <main id="main-content" className="min-h-screen pb-16 lg:pb-0">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Actions */}
          <QuoteTray />
          <ScrollToTop />
          <WhatsAppFab />
          <MobileBottomBar />
        </QuoteSelectionProvider>
      </body>
    </html>
  );
}
