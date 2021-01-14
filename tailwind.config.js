const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      cool: colors.coolGray,
      gray: colors.gray,
      red: colors.red,
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
        mchacks: '#F2463A',
        weav: '#F20951',
        sp: '#765ED4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
