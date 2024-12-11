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
      backgroundImage: {
        JobCardGradient:
          "linear-gradient(160deg, rgba(0, 56, 240, 0.94) 5.04%, rgba(41, 157, 242, 0.75) 98.97%)",
        JobCardHove: " linear-gradient(180deg, #554CA7 0%, #211E41 100%)",
      },
      colors: {
        primary: {
          lightest: "#D7E4F9",
          lighter: "#A2C5F4",
          light: "#4A83D6",
          base: "#0146B1",
          dark: "#013A8E",
          darker: "#00296A",
          darkest: "#001945",
        },
        secondary: {
          lightest: "#D6F7F5",
          lighter: "#A2EDE9",
          light: "#4ED5C9",
          base: "#00A79D",
          dark: "#007F78",
          darker: "#005C58",
          darkest: "#003D3B",
        },
        black: {
          lightest: "#E6E6E7",
          lighter: "#B8B8BA",
          light: "#7A7A7D",
          base: "#131517",
          dark: "#0F1112",
          darker: "#0A0C0D",
          darkest: "#050606",
        },
        "light-blue": {
          lightest: "#F4F9FF",
          lighter: "#EAF4FE",
          light: "#CEE4FC",
          base: "#E4EEFC",
          dark: "#B0C9F5",
          darker: "#8BAAE8",
          darkest: "#6589D1",
        },
        background: "#111b21",
        foreground: "#FFFFFF",
        "tx-color": "#C5C9D6",
      },
      screens: {
        "2xl": "1400px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3200px",
        "6xl": "4096px",
        "7xl": "5120px",
        "8xl": "6144px",
        "9xl": "7296px",
        "10xl": "8192px",
      },
      fontSize: {
        "4xs": "0.375rem", // 6px
        "3xs": "0.5rem", // 8px
        "2xs": "0.625rem", // 10px
      },
    },
  },
  plugins: [],
} satisfies Config;
