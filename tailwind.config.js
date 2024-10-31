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
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
      textStroke: {
        gray: "1px #b0b0b0",
        red: "1px #ff4d4f",
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"),
    function ({ addUtilities }) {
      addUtilities({
        ".outline-gray": {
          color: "transparent",
          "-webkit-text-stroke": "1px #b0b0b0",
        },
        ".outline-red": {
          color: "transparent",
          "-webkit-text-stroke": "1px #ff4d4f",
        },
      });
    },
  ],
};
