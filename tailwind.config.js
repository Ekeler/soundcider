/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      "fontFamily": {
        "body": "EngraversGothicBold, sans-serif"
      },
      "colors": {
        "dark": "#4d433c",
        "light": "#fffef1",
      }
    },
  },
  plugins: [],
}