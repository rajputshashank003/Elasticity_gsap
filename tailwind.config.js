/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brandium: ['brandium'],
        helvetica: ['HelveticaNeue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}