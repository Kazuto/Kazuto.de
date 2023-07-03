/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: [
    './components/**/*.{js,vue,ts}',
    './container/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      spacing: {
        unset: 'unset',
      },
      maxHeight: {
        screen: 'calc(100svh)',
      },
      fontFamily: {
        sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#FF8800',
          50: '#FFC88A',
          100: '#FFC17A',
          200: '#FFB35C',
          300: '#FFA53D',
          400: '#FF961F',
          500: '#FF8800',
          600: '#E67A00',
          700: '#CC6D00',
          800: '#B35F00',
          900: '#995200',
          950: '#8C4B00',
        },
        secondary: {
          DEFAULT: '#142534',
          50: '#4178A8',
          100: '#3C6E9B',
          200: '#325C81',
          300: '#284A68',
          400: '#1E374E',
          500: '#142534',
          600: '#11202D',
          700: '#0E1B25',
          800: '#0C151E',
          900: '#091017',
          950: '#070D13',
        },
      },
    },
  },
  plugins: [],
}
