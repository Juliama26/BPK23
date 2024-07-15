const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        50: "#FFFFFF",
        100: "#e0f5fe",
        200: "#bae8fd",
        400: "#38bcf8",
        700: "#0284c7",
        g400: "#4ade80",
        r400: "#f87171",
        500: "#0ea5e9",
        g500: "#22c55e",
        r500: "#ef4444",
        900: "#0c506e",
        950: "#1e293b",
      },
    },
  },
  plugins: [],
});
