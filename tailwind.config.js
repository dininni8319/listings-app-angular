/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // added this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin.js")// added this line
  ],
}

