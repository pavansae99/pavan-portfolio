import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#111c25",
        paper: "#f4f5f1",
        lime: "#c7f36b",
        orange: "#ff7657",
        blue: "#b9d8ff",
        line: "#d9ddd5",
      },
      boxShadow: {
        card: "0 24px 70px rgba(17, 28, 37, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
