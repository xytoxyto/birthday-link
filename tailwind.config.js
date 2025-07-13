/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'birthday-blue': '#2e1a47',
        'birthday-purple': '#5e2e91',
        'birthday-gold': '#eab308',
      },
    },
  },
  plugins: [],
}
