/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./creative-file.html",
    "./src/**/*.{js,ts,jsx,tsx,hbs}",
  ],
  theme: {
    extend: {
      colors: {
        "black-00": "hsl(0deg 0% 0%)",
        "black-40": "hsl(0deg 0% 40%)",
        "black-65": "hsl(0deg 0% 65%)",
        "green-5": "hsl(160deg 100% 5%)",
        "green-40": "hsl(160deg 100% 40%)",
        "turquoise-75": "hsl(175deg 100% 75%)",
        "orange-50": "hsl(40deg 100% 50%)",
        "transparent": "transparent"
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

