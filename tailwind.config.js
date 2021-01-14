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
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideBack: {
          '0%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        slide1: 'slide 0.5s forwards',
        slide2: 'slide 0.7s forwards',
        slide3: 'slide 0.3s ease-in forwards',
        slide4: 'slideBack 0.3s ease-in forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
