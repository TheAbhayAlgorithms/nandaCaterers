import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
        },
        ink: "var(--ink)",
        maroon: {
          DEFAULT: "var(--maroon)",
          dark: "#451213",
          deep: "#2E0A0B",
        },
        paper: "var(--paper)",
        peach: "var(--peach)",
        cream: "var(--cream)",
        night: "var(--night)",
        leaf: "var(--leaf)",
        turmeric: "var(--turmeric)",
        saffron: {
          DEFAULT: "var(--saffron)",
          hover: "#DE8813",
        },
        ivory: "#FFFDF7",
        charcoal: "var(--ink)",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        accent: ["var(--font-caveat)", "cursive"],
        lora: ["var(--font-lora)", "serif"],
      },
      boxShadow: {
        soft: "0 6px 24px -10px rgba(60, 20, 10, 0.18)",
        card: "0 4px 20px -2px rgba(42, 27, 22, 0.06)",
        warm: "0 10px 40px -12px rgba(184, 57, 27, 0.2)",
        "warm-lg": "0 16px 50px -10px rgba(184, 57, 27, 0.3)",
      },
      borderRadius: {
        "2xl": "18px",
      },
    },
  },
  plugins: [],
};

export default config;
