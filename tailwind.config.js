/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0C",
          900: "#0B0B0C",
          800: "#16171A",
          700: "#1F2125",
          600: "#2A2D33",
          500: "#42464D",
          400: "#6B6F77",
          300: "#9CA0A8",
          200: "#D6D8DD",
          100: "#EDEEF1",
          50:  "#F6F7F8",
        },
        gold: {
          DEFAULT: "#C9A24B",
          dark:    "#A98532",
          light:   "#E2C173",
          soft:    "#F4E7C4",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,12,0.04), 0 8px 24px rgba(11,11,12,0.06)",
        cardHover: "0 2px 6px rgba(11,11,12,0.08), 0 24px 48px rgba(11,11,12,0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenburns: {
          "0%":   { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        loaderBar: {
          "0%":   { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeUp:    "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeIn:    "fadeIn 0.6s ease-out both",
        kenburns:  "kenburns 8s ease-out both",
        loaderBar: "loaderBar 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
    },
  },
  plugins: [],
};
