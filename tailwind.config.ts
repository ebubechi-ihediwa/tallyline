import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdf6ec",
        parchment: "#faf0dd",
        terracotta: {
          DEFAULT: "#c2542d",
          dark: "#a3431f",
          light: "#e0703f",
        },
        gold: {
          DEFAULT: "#e0a458",
          dark: "#c98735",
          light: "#efc48b",
        },
        ink: {
          DEFAULT: "#3a2b21",
          light: "#6b5647",
          faint: "#8f7a69",
        },
      },
      maxWidth: {
        "7xl": "80rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
