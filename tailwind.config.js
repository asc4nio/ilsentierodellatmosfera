/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  // content: [],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cubano: ["Cubano"],
        nunito: ["Nunito Sans 10pt"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "off-white": "#E9F4F8",
      blue: {
        light: "#9CD7E9",
        DEFAULT: "#0082BC",
        dark: "#01477B",
      },
      orange: "#F98949",
      yellow: "#FFD62E",
      green: "#3D8E8F",
      black: "#000000",
      "red-200": "#FF0000",
      "red-500": "#FF0000",
      "yellow-200": "#00FFFF",
      "violet-200": "#FFFF00",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
