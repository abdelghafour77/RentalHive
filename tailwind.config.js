/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        gold: '#e3b04b',
        lightGold: '#ffcd69',
        transparentBlack: '#00000066',
      }
    },
    container: {
      padding: '2rem',
    },
    fontFamily: {
      'Smooch': ['Smooch, cursive'],
      'PoorStory': ['Poor Story, cursive'],
      'Poppins': ['Poppins, sans-serif'],
    },
  },
  plugins: [],
}

