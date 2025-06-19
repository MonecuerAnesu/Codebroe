/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0D1117",
        blue: "#0A84FF",
        darkblue: "#002B5B",
        green: "#00FFAB"
      },
      animation: {
        blink: "blinker 1.5s linear infinite",
      },
      keyframes: {
        blinker: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};