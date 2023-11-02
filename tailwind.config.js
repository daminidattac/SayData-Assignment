module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9f9fb",
          200: "#efefef",
          400: "#c2c2c2",
          800: "#4c4c4c",
          900: "#101828",
          "900_01": "#121212",
          "800_01": "#404040",
          "900_0c": "#1018280c",
        },
        blue: { 50: "#e0edff", 900: "#0047ad", "50_01": "#eaf3ff" },
        black: { 900: "#000000", "900_66": "#00000066" },
        white: { A700: "#ffffff" },
        colors: "#e0edffff",
        blue_gray: {
          50: "#eff1f4",
          100: "#d0d5dd",
          300: "#98a1b2",
          500: "#667185",
          700: "#475267",
          800: "#344054",
          "100_01": "#d0d4dd",
        },
        indigo: { 50: "#e4e7ec" },
      },
      boxShadow: { bs: "0px 1px  2px 0px #1018280c" },
      fontFamily: { gothampro: "Gotham Pro", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
