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
        'scale-up': 'scale-up 1s linear infinite',
      },
      keyframes: {
        'scale-up': {
          '20%': {
            transform: 'scaleY(1.5)',
            backgroundColor: '#D0D2E3',
          },
          '40%': {
            transform: 'scaleY(1)',
          },
        },
      },
    },
  },
  plugins: [],
}