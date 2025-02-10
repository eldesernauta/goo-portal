/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-purple-goo': 'var(--light-purple-goo)',
        'dark-purple-goo': 'var(--dark-purple-goo)',
        'dark-blue-goo': 'var(--dark-blue-goo)',
        'dark-blue-goo': '#0d1623',
        'blue-goo': '#6EBBF9',
        'green-goo': '#67F4B8',
        'yellow-goo': '#FCFC8B',
        'black-goo': '#0A0118',
        'white-goo': '#FFFFFF',
        'grey-goo': '#EBEBEB',
        'dark-goo': '#0A0118'
      },
      fontFamily: {
        'Syne': "Syne",
        'Montserrat': "Montserrat"
      }
    }
  },
  plugins: [],
};