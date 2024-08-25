/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '300ms', // Adding a 2-second duration
      },
    },
  },
  plugins: [],
}
