/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#2B2E4A',
        'light-clay': '#E84545',
        'dark-clay': '#903749',
        'clay-purple-mix': '#53354A'
      }
    },
  },
  plugins: [],
}

