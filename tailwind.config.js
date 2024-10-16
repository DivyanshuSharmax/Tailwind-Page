/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        '4xl': '2.5rem', // Example custom size
        '5xl': '3rem',
      },
      clipPath:{
        'trap': 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
      }

    },
  },
  plugins: [],
}

