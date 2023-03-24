/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm-sc': {'max': '621px'}, //for smaller screens also
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      }
  },
  extend: {},
  plugins: [],
};
