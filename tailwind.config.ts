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
        primary: "#1F4E8C",
        secondary: "#183A68",
        background: "#F5F3EF",
        surface: "#EFEDE8",
        accent: "#1F4E8C",
        text: "#141414",
        muted: "#6F6A5F",
        border: "#D7D2C8",
        ashlaur: {
          dark: "#111214",
          surface: "#EFEDE8",
          accent: "#1F4E8C",
          blue: "#1F4E8C",
          darkBlue: "#183A68",
          white: "#F5F3EF",
        },
        ink: "#111214",
        "warm-black": "#111214",
        bone: "#F5F3EF",
        stone: "#B9B2A7",
        brass: "#1F4E8C",
        concrete: "#EFEDE8",
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-big-shoulders)', 'sans-serif'],
        technical: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;