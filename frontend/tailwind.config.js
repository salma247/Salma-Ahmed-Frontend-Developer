/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'white': '#FFFFFF', 
        'black-opacity-90': 'rgba(18, 18, 18, 0.9)', 
        'gray-900': '#121212', 
        'gray-800': '#1C1C1C', 
        'gray-700': '#1E1E1E',
        'gray-400': '#A0A0A0', 
        'orange-500': '#FFA500', 
        'yellow-500': '#FFD700', 
        'blue-500': '#00BFFF', 
        'cyan-500': '#00FFFF',
        'red-500': '#FF0000', 
        'green-500': '#00FF00',
      },
    },
  },
  plugins: [],
}
