/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "baloo-tamma": ["'Baloo Tamma 2'", "system-ui", "sans-serif"],
        "abel": ["'Abel'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        app: "linear-gradient(180deg, #1DAC92 0%, #1DAC92 0.01%, #228E8E 100%)",
      }
    },
  },
  plugins: [
  ],
}
