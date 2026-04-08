import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        bgSoft: "var(--color-bg-soft)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        card: "var(--color-card)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent-2)",
        border: "var(--color-border)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
