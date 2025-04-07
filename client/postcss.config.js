/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        viga: ['Viga', 'sans-serif'],   
      },
    },
  },
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
],
};

