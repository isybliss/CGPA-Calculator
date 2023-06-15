/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    dropShadow: {
      "form-shadow": [
        "0px -1px 0px rgba(0, 0, 0, 0.1)",
        "0px 1-x 3px rgba(11, 19, 36, .1)",
      ],
      "input-shadow": ["0px 1px 2px rgba(16, 24, 40, 0.05)"],
      "account-pill-shadow": ["0px 4px 4px rgba(0, 0, 0, 0.25)"],
      "add-coure-shadow": [
        "0px -1px 0px 0px #0000001A inset",
        "0px 1px 3px 0px #0B13241A",
      ],
      "add-course-form-shadow": [
        "0px -1px 0px 0px #0000001A inset",
        "box-shadow: 0px 1px 3px 0px #0B13241A",
      ],
    },
  },
  plugins: [],
};
