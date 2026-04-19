/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy palette (other pages not yet redesigned)
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
        // New design system
        forest: {
          950: '#080f09',
          900: '#0f2417',
          800: '#1a3525',
          700: '#234d35',
          600: '#2d6a4f',
        },
        sage: {
          500: '#52b788',
          400: '#74c69d',
          300: '#95d5b2',
          100: '#d8f3dc',
        },
        cream: {
          DEFAULT: '#f5efe6',
          dark: '#ede8df',
          darker: '#ddd6cb',
        },
        gold: {
          DEFAULT: '#c9953a',
          light: '#d9a84b',
          dark: '#a67730',
        },
        charcoal: '#1c1c1a',
      },
      fontFamily: {
        // Legacy
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        // New design system
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d2818 0%, #1a472a 40%, #2d6a4f 100%)',
      },
      animation: {
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':  'fadeIn 0.6s ease both',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
