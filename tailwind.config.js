/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        '4-auto': 'repeat(4, auto)',
      },
      colors: {
        blue: {
          400: '#0055FE',
          900: '#14133B'
        },
    },
  },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'a': {
          textDecoration: 'none',
        },
        'a:hover': {
          color: theme('colors.blue.400') // add underline on hover
        },
      });
    }
  ],
}
