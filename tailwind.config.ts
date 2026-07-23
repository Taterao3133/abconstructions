import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f2e9",
        linen: "#fbfaf6",
        olive: "#6f7353",
        moss: "#4d553b",
        charcoal: "#20211d",
        gold: "#c99a38"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(32, 33, 29, 0.10)",
        line: "0 1px 0 rgba(32, 33, 29, 0.08)"
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
