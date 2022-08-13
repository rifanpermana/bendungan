function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        cute: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        }
      },
      backgroundColor: {
        cute: {
          fill: withOpacity('--color-fill'),
          base: withOpacity('--color-base'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        }
      },
      gradientColorStop: {
        cute: {
          hue: withOpacity('--color-fill'),
        }
      },
      borderColor: {
        cute: {
          base: withOpacity('--color-border-base'),
          muted: withOpacity('--color-border-muted'),
          inverted: withOpacity('--color-border-inverted'),
        },
      },
    },
    colors:{

    }
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
};
