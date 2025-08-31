/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        velvet: "#0b0b0c",
        gold: "#C5A880",
        rose: "#e6c6d8"
      },
    },
  },
  plugins: [],
};
