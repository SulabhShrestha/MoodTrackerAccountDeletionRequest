/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-green": "#21CA94",
        "app-yellow": "#E4C34E",
      },
    },
  },
  plugins: [],
};
