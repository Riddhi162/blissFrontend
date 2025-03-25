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
          darkest: 'var(--color-primary-darkest)',
          darker: 'var(--color-primary-darker)',
          main: 'var(--color-primary-main)',
          lighter: 'var(--color-primary-lighter)',
          accent: 'var(--color-primary-accent)',
        },
      },
      fontFamily: {
        'heading': ['"Josefin Sans"', 'sans-serif'],
        'body': ['"Josefin Slab"', 'serif'],
      },
    },
  },
  plugins: [],
} 