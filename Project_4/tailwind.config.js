/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'red-gradient': 'linear-gradient(to right, #ff0000, #ff7f7f)',
      })
    }
  },
  variants: {},
  plugins: [],
}


