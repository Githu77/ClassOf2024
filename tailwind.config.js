/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'fleur-de-leah': ['"Fleur De Leah"', 'serif'], // Add Fleur De Leah font
        'delius': ['"Delius"', 'cursive'],            // Add Delius font
      },
    },
  },
  plugins: [],
};
