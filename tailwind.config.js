/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:        '#0D2B4E',
        'navy-dark': '#071A30',
        'navy-mid':  '#163660',
        cream:       '#F0EAD6',
        'cream-light': '#F7F3EA',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans:     ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}