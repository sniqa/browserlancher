/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-10rem': 'repeat(auto-fill, 10rem)'
      },
      gridTemplateRows: {
        'auto-9rem': 'repeat(auto-fill, 9rem)'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
