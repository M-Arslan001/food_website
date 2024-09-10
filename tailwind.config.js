/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAB71A",
        secondary: "#c42900",
      },
      fontFamily: {
        custom: ["Rowdies", "sans-serif"],
      },
    },
  },
  plugins: [],
};
