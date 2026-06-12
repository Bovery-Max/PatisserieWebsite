/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: "#FFF8F0",
          100: "#FFE8D1",
          200: "#FFD1A3",
          300: "#FFB875",
          400: "#FF9E47",
          500: "#F69D39",
          600: "#E08A2F",
          700: "#C47525",
          800: "#A0601E",
          900: "#7C4B17",
        },
        // Cream & neutrals (pastry-inspired palette)
        cream: "#FEF9F2",
        pastry: {
          50: "#FFFDFA",
          100: "#FEF9F2",
          200: "#FCEFE0",
          300: "#FAD8C4",
          400: "#F8C2A1",
          500: "#F6AC7F",
        },
        // Text colors for proper contrast
        text: {
          primary: "#0F172A", // slate-900
          secondary: "#475569", // slate-600
          muted: "#64748B", // slate-500
        },
      },
      fontFamily: {
        // Elegant font pairing for food brand
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem"
      }
    }
  },
  plugins: []
}