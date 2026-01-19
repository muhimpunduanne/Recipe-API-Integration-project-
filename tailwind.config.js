/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff8f1',
          100: '#ffefd9',
          200: '#ffd9a8',
          300: '#ffb366',
          400: '#ff8533',
          500: '#ff6b00',
          600: '#e65100',
          700: '#cc4700',
          800: '#b33d00',
          900: '#993300',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#404040',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
