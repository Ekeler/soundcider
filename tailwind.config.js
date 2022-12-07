/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      "fontFamily": {
        "body": "RM Typerighter old, sans-serif"
      },
      "colors": {
        "dark": "#4d433c",
        "light": "#fffef1",
      }
    },
  },
  plugins: [],
}