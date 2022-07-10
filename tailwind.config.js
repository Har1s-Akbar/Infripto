/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens :{
      'sm' : '280px',
      'lg' : '1024px'
    },
  },
  plugins: [],
}
