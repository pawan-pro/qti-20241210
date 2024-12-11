// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Ensure all app content is included for tailwind scanning
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Century Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography')],
}