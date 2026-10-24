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
        cream: "#FFF8EC",
        ivory: "#FFFDF7",
        saffron: {
          DEFAULT: "#F29A1F",
          hover: "#DE8813",
        },
        turmeric: "#E8B004",
        maroon: {
          DEFAULT: "#7A1F2B",
          dark: "#5B141E",
          deep: "#420D15",
        },
        chilli: "#C8372D",
        leaf: "#2F6B3C",
        charcoal: "#2A1B16",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        accent: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        warm: "0 10px 40px -12px rgba(122, 31, 43, 0.18)",
        "warm-lg": "0 16px 50px -10px rgba(122, 31, 43, 0.25)",
        card: "0 4px 20px -2px rgba(42, 27, 22, 0.06)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8B004 0%, #F29A1F 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #F29A1F 0%, #DE8813 100%)",
        "maroon-gradient": "linear-gradient(135deg, #7A1F2B 0%, #420D15 100%)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-gentle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
