/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}", // for HeroUI
  ],
  theme: {
    extend: {
      colors: {
        gradientText1: "#655DF4",
        gradientText2: "#986DD0",
      },
      backgroundImage: {
        "introvera-gradient": "linear-gradient(to right, #655DF4, #986DD0)",
      },
    },
  },
  plugins: [],
};