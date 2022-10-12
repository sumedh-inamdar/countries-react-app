/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "500px",
      md: "700px",
      lg: "1024px",
    },
    extend: {
      colors: {
        "very-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
      },
      backgroundColor: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      borderColor: {
        "dark-blue": "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};
