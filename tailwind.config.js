/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

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
      spacing: {
        unset: 'unset',
      },
      maxHeight: {
        screen: 'calc(100svh)',
      },
      fontFamily: {
        sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // h1: `clamp(${defaultTheme.fontSize['5xl'][0]}, 5vw, ${defaultTheme.fontSize['6xl'][0]})`,
        // h2: `clamp(${defaultTheme.fontSize['4xl'][0]} 4vw, ${defaultTheme.fontSize['5xl'][0]})`,
        // h3: `clamp(${defaultTheme.fontSize['4xl'][0]}, 3.5vw, ${defaultTheme.fontSize['4xl'][0]})`,
        base: '1.5rem',
        h1: 'clamp(3rem, 5vw, 3.75rem)',
        h2: 'clamp(2.5rem, 4vw, 3rem)',
        h3: 'clamp(2.25rem, 3.5vw, 2.5rem)',
        h4: 'clamp(1.875rem, 3vw, 2.25rem)',
        h5: 'clamp(1.5rem, 2.5vw, 1.875rem)',
        h6: '1.5rem',
        body1: 'clamp(1.3rem, 2vw, 1.5rem)',
        body2: 'clamp(1.15rem, 2vw, 1.3rem)',
        lead: 'clamp(1.5rem, 3vw, 2.25rem)',
        display1: 'clamp(7.5rem, 12vw, 9rem)',
        display2: 'clamp(6.75rem, 10.5vw, 7.5rem)',
        display3: 'clamp(5.25rem, 9vw, 6.75rem)',
        display4: 'clamp(3rem, 7vw, 5.25rem)',
        subtitle: 'clamp(0.75rem, 1.3vw, 0.975rem)',
        caption: '1.125rem',
      },
      colors: {
        primary: {
          DEFAULT: '#FF9900',
          50: '#FFD08A',
          100: '#FFCA7A',
          200: '#FFBE5C',
          300: '#FFB13D',
          400: '#FFA51F',
          500: '#FF9900',
          600: '#E68A00',
          700: '#CC7A00',
          800: '#B36B00',
          900: '#995C00',
          950: '#8C5400',
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
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      boxShadow: {
        DEFAULT:
          '0 20px 30px 0 rgba(0, 0, 0, 0.08), 0 4px 4px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
