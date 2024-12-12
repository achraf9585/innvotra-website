/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Almarena Neue", "sans-serif"], // Set as the primary sans-serif font
      },
      fontWeight: {
        "sans-600": 600, // Custom font weight for sans
      },
      lineHeight: {
        "sans-24": "24px", // Custom line height for sans
      },
    },
  },
  plugins: [],
};
