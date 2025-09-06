/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'theme-bubble-grow': {
          '0%': { clipPath: 'circle(0px at var(--x) var(--y))' },
          '100%': { clipPath: 'circle(var(--r) at var(--x) var(--y))' },
        },
      },
      animation: {
        'theme-bubble-grow': 'theme-bubble-grow 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
