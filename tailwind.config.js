/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#B06D5D",
        secondary: "#B16E61",
        "body-color": "#462C64",
        "gray-color": "",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
      },
    },
  },
}