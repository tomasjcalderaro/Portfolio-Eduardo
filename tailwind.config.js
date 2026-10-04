/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D4B46",
        secondary: "#062F2C",
        soft: "#F5F8F7",
        dark: "#1A1A1A",
        accent: "#E9DCC9",
      },
    },
  },
  plugins: [],
};