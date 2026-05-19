/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#031120',
        navySoft: '#071c31',
        gold: '#c5a16b',
        goldLight: '#d1b990',
        sand: '#bdb3a5',
        ivory: '#f7f5f1',
        ink: '#161616'
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      maxWidth: {
        page: '1180px'
      }
    }
  },
  plugins: []
}
