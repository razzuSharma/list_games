import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  colors: {
    primary: {
      "50": "#fff7ed",
      "100": "#ffedd5",
      "200": "#fed7aa",
      "300": "#fdba74",
      "400": "#fb923c",
      "500": "#f97316",
      "600": "#ea580c",
      "700": "#c2410c",
      "800": "#9a3412",
      "900": "#7c2d12",
      "950": "#431407",
    },
  },

  // Correct the typo from 'fontFamilt' to 'fontFamily'
  fontFamily: {
    body: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ],
  },
  plugins: [],
};

export default config;
