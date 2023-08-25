/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      colors: {
        darkBlue: 'hsl(205, 100%, 9%)',
      },
    },
  },
  plugins: [],
}

