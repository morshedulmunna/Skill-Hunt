import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#111b21",
        foreground: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
