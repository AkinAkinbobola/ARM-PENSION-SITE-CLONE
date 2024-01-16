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
        yellow: '#f5b42d40',
        footerBlack: '#1f1f1f',
        footerGrey: '#6c757d',
        hamburger: '#0000001a',
        burgerInner: '#00000080'
      }
    },
  },
  plugins: [],
};
