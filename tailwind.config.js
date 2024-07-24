/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./shared/**/*.{js,vue,ts}",
  ],
  theme: {
    colors: {
      main: "var(--main-color)",
      accent: "var(--accent-color)",
      frame: "var(--frame-color)",
      "frame-darked": "var(--frame-darked-color)",
      bg: "var(--bg-color)",
      white: "var(--white-color)",
      dark: "var(--dark-color)",
      grey: "var(--grey-color)",
      expense: "var(--expense-color)",
      income: "var(--income-color)",
      red: "var(--red-color)",
      "red-fade": "var(--red-fade-color)",
      link: "var(--link-color)",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
