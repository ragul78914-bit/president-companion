import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f9fafb",
        cyber: {
          dark: "#050b14",
          card: "rgba(13, 22, 41, 0.65)",
          border: "rgba(56, 189, 248, 0.2)",
          cyan: "#06b6d4",
          blue: "#3b82f6",
          purple: "#8b5cf6",
          pink: "#ec4899",
          neon: "#00f0ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-spin": "glowSpin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 15s ease infinite alternate",
      },
      keyframes: {
        glowSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        "neon-blue": "0 0 25px -5px rgba(59, 130, 246, 0.5)",
        "neon-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.5)",
        "neon-purple": "0 0 25px -5px rgba(139, 92, 246, 0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;
