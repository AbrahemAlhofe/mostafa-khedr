/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-00": "hsl(0 0 0)",
        "black-40": "hsl(0 0% 40%)",
        "green-5": "hsl(160 100 5)",
        "green-40": "hsl(160 100% 40%)",
        "turquoise-75": "hsl(175 100% 75%)",
        "orange-50": "hsl(40 100 50)",
        "transparent": "hsl(0 0% 0% / 0)"
      },
      fontFamily: {
        "laxr": ['Laxr', 'system-ui'],
        "cairo": ['Cairo', 'system-ui']
      },
      spacing: {
        '0.4': '0.08rem',
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
}

