/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a8005b',
        blueText: '#1b365d',
        cream: '#fbf6f2',
        yellow: '#f5b42d40'
      }
    },
  },
  plugins: [],
};
