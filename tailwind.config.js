const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.{html,html.erb,erb}',
    './app/views/devise/**/*.{html,html.erb,erb}',
    './app/frontend/components/**/*.{vue,js,ts,jsx,tsx}',
    './app/frontend/**/*.{vue,js,ts,jsx,tsx}',
    './app/**/*.{vue,js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}