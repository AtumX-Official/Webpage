/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "titan-one": ["Titan One", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
