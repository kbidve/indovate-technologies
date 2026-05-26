import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          50: "#f5f8fe",
          100: "#e6edfc",
          200: "#c3d5fa",
          300: "#9bbaf7",
          400: "#f38c17",
          500: "#f38c17", // Royal Blue
          600: "#f38c17",
          700: "#f38c17",
          800: "#1e2d5c",
          900: "#131a2e"
        }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    }
  },
  plugins: []
};
export default config;
