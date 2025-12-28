import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B4C7A",
          blueDark: "#083A5D",
          blueSoft: "#EAF5FF",
          yellow: "#F7E255",
          yellowSoft: "#FFF7C7",
          ink: "#0B1020",
          muted: "#4B5563",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
