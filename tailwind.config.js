/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx,jsx,ts,js}', './components/**/*.{tsx,jsx,ts,js}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#00B37E',
        background: '#202024',
        shape: {
          primary: '#29292E',
          secondary: '#323238',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#71717A',
        },
        brand: {
          primary: '#00B37E',
          secondary: '#323238',
        },
      },
    },
  },
  plugins: [],
}
