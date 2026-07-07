/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#eef6fb',
          100: '#d8ebf5',
          500: '#155e8a',
          600: '#104d73',
          700: '#0c3d5c',
          800: '#0a3049',
          900: '#082539',
          950: '#051a29',
        },
        aqua: {
          50: '#effcfc',
          100: '#d6f5f7',
          200: '#b0e9ee',
          300: '#79d7e0',
          400: '#3cbccb',
          500: '#1ba0b2',
          600: '#158093',
          700: '#156878',
          800: '#175563',
          900: '#174754',
        },
        coral: {
          50: '#fff5ed',
          100: '#ffe8d5',
          400: '#ff9a4d',
          500: '#fb7a1e',
          600: '#ec6011',
          700: '#c4480e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
