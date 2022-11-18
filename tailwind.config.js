/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '300px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      fontFamily: {
        sans:["Gothic A1", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    
  ],
}
