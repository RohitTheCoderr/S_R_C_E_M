/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '1px 2px 3px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}