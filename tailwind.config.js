/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "black-00": "hsl(0, 0, 0)",
      "green-40": "hsl(160, 100, 40)",
      "turquoise-75": "hsl(175, 100, 75)",
      "orange-50": "hsl(40, 100, 50)"
    },
    fontFamily: {
      "laxr": ['Laxr'],
      "shamel": ['Shamel'],
      "cairo": ['Cairo']
    }
  },
  plugins: [],
}

