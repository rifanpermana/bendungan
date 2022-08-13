const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '390px',
      ...defaultTheme.screens,
      'sm': '480px',
    },
    extend: {
      textColor: {
        water: {
          theme: 'var(--color-text-theme)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          tittle: 'var(--color-text-tittle)',
          base: 'var(--color-text-base)',
          footer: 'var(--color-text-footer)',
          nav: 'var(--color-text-nav)',
        }
      },
      backgroundColor: {
        water: {
          theme: 'var(--color-theme)',
          fill: 'var(--color-fill)',
          base: 'var(--color-base)',
          footer: 'var(--color-footer)',
          nav: 'var(--color-nav)',
          dd: 'var(--color-dd)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
        },
      },
      gradientColorStop: {
        water: {
          hue: 'var(--color-fill)'
        }
      },
      borderColor: {
        water: {
          theme: 'var(--color-border-theme)',
          base: 'var(--color-border-base)',
        },
      },
      ringColor: {
        water: {
          theme: 'var(--color-ring-theme)',
          active: 'var(--color-ring-active)',
        }
      },
      colors:{
        theme0: 'var(--color-theme0)',
        theme1: 'var(--color-theme1)',
        theme2: 'var(--color-theme2)',
        theme3: 'var(--color-theme3)',
        theme4: 'var(--color-theme4)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
        danger: 'var(--color-danger)',
        darkmode: {
          50: 'var(-color-darkmode-50)',
          100: 'var(-color-darkmode-100)',
          200: 'var(-color-darkmode-200)',
          300: 'var(-color-darkmode-300)',
          400: 'var(-color-darkmode-400)',
          500: 'var(-color-darkmode-500)',
          600: 'var(-color-darkmode-600)',
          700: 'var(-color-darkmode-700)',
          800: 'var(-color-darkmode-800)',
          900: 'var(-color-darkmode-900)',
        },
      },
      gridTemplateRows: {
        'fv': 'auto 1fr auto',
      },
      gridTemplateColumns: {
        'topbar': 'max-content minmax(50px, 1fr) max-content',
      },
      zIndex: {
        '500': '500',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
};
