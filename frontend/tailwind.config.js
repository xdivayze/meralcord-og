/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontSize: {
      '2xs': '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
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

