/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vert: {
          950: '#0d2818',
          900: '#1a3a2a',
          800: '#1a472a',
          700: '#2d6a4f',
          600: '#40916c',
          500: '#52b788',
          400: '#74c69d',
          300: '#95d5b2',
          200: '#b7e4c7',
          100: '#d8f3dc',
          50:  '#f0fdf4',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d2818 0%, #1a472a 40%, #2d6a4f 100%)',
      },
    },
  },
  plugins: [],
}
