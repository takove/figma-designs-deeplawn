/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#03150B',
        'greenish-gray':'#F5FAF7',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}