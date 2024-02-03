/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        bgColor: '#CECDDF',
        bgColor2: '#CBDAEA',
        btnbg: '#009DE4',
      },
    },
  },
  plugins: [require("daisyui")],
}

