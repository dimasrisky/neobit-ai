/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif']
      },
      colors: {
        'primary-white': '#D0D2E3',
        'primary-black': '#0B0C11',
        'secondary-black': '#161820',
        'primary-blue': '#244DCB'
      },
      animation: {
        bubble: 'bubble 1s infinite ease-in-out',
      },
      keyframes: {
        bubble: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}