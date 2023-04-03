const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
