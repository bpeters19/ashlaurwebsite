import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Primary blue
        secondary: "#1E40AF", // Darker blue for headings
        background: "#0A0A0A", // Deep charcoal
        surface: "#141414", // Slightly lighter dark
        accent: "#1E1E1E", // Secondary background
        text: "#FFFFFF", // Pure white
        muted: "#64748B", // Medium gray for secondary text
        border: "rgba(37,99,235,0.1)", // Subtle blue borders
        ashlaur: {
          dark: "#0A0A0A",
          surface: "#141414",
          accent: "#1E1E1E",
          blue: "#2563EB",
          darkBlue: "#1E40AF",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;