import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem"
      }
    },
    fontFamily: {
      sans: ["var(--font-sans)", "Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      display: ["var(--font-display)", "Space Grotesk", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"]
    },
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f38c17",
          600: "#ea7a0b",
          700: "#c75f09",
          800: "#9f4b0d",
          900: "#7c3b10",
          950: "#431b05"
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
        },
        accent: {
          cyan: "#22d3ee",
          blue: "#38bdf8",
          violet: "#8b5cf6",
          pink: "#ec4899",
          orange: "#f38c17"
        },
        ai: {
          ink: "#020617",
          navy: "#07111f",
          panel: "#0b1220",
          line: "#1e3a8a",
          glow: "#22d3ee",
          violet: "#7c3aed"
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
          elevated: "#ffffff",
          dark: "#020617",
          "dark-muted": "#07111f",
          "dark-elevated": "#0f172a"
        }
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 50% 30%, rgba(34, 211, 238, 0.22), transparent 38%), radial-gradient(circle at 80% 10%, rgba(124, 58, 237, 0.20), transparent 32%), linear-gradient(180deg, #020617 0%, #07111f 48%, #020617 100%)",
        "light-grid": "linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
        "dark-grid": "linear-gradient(rgba(148, 163, 184, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.10) 1px, transparent 1px)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
        "ai-gradient": "linear-gradient(135deg, #22d3ee 0%, #3b82f6 42%, #8b5cf6 100%)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        glow: "0 0 60px rgba(34, 211, 238, 0.18)",
        "glow-orange": "0 0 44px rgba(243, 140, 23, 0.22)",
        "glass-dark": "0 24px 90px rgba(0, 0, 0, 0.35)",
        "glass-light": "0 24px 90px rgba(15, 23, 42, 0.10)"
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      maxWidth: {
        "8xl": "88rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.04)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
