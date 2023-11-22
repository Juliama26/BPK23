// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#2e4053",
        tertiary: "#d5d8dc",
        test: " #ebedef",
        err: "#e74c3c",
        ring: "#3498db",
        inring: "#abb2b9",
      },
      fontFamily: {
        romans: ["times new roman", "sans-serif"],
      },
    },
  },
  plugins: [],
});
