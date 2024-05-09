/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radiators': "url('./assets/radiator.webp')"
      }
    },
  },
  plugins: [],
}

