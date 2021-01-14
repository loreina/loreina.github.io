const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
    },
    extend: {
      colors: {
        malibu: {
          50: '#F1F6FF',
          100: '#DAE7FE',
          200: '#B5D0FD',
          300: '#92B9FD',
          400: '#6DA2FC',
          500: '#5D8AD6',
          600: '#5279BD',
          700: '#416197',
          800: '#36517E',
          900: '#2C4165',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
