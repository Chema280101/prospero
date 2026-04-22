/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2B4E',
          dark: '#071A30',
          mid: '#163660',
        },
        cream: {
          DEFAULT: '#F0EAD6',
          light: '#F7F3EA',
        },
        muted: 'rgba(240,234,214,0.5)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        'sm': '2px',
      },
    },
  },
  plugins: [],
}
