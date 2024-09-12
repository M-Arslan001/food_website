/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      filter: {
        // invert(90%) sepia(100%) saturate(1000%) hue-rotate(60deg)
        primary:
          " invert(24%) sepia(100%) saturate(1000%) hue-rotate(-33deg) brightness(88%) contrast(100%)",
      },
      colors: {
        primary: "#EAB71A",
        secondary: "#c42900",
      },
      fontFamily: {
        custom: ["Rowdies", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
