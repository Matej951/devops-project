/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // You can add custom theme extensions here if needed
      // Example:
      // colors: {
      //   'custom-blue': '#1234567',
      // },
    },
  },
  plugins: [],
}