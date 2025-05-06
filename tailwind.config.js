/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add the Inter font here
      },
      colors: {
        customBlue: '#2D57A7', // Add your custom colors here
        customRed: '#A72D2D',
        // You can add more custom colors as needed
      },
    },
  },
  plugins: [],
}
