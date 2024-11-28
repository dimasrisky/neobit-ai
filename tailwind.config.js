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
        'primary-white': '#AFADAD',
        'primary-black': '#1E1F20',
        'secondary-black': '#282A2C',
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