/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "487px",
      },
      backgroundImage: {
        "background": "url('bg.svg')",
      },
    },
  },
  plugins: [],
};
