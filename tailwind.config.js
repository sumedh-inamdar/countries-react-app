/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "500px",
      md: "700px",
      lg: "1024px",
    },
    extend: {
      backgroundColor: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
      },
      borderColor: {
        "dark-blue": "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};
