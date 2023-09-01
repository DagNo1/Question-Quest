/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"],
      },
      colors: {
        darkBg: "#231042",
        textColor: "#ffffff",
        primary: "#6023C0",
        tertiary: "#E5DAF8",
        netural: "#1E1E1E",
        purple: "8952E0",
        lightBg: "#171A1D",
        lightText: "#52555A",
        first: "rgba(204, 183, 237, 0.1)",
        second: "rgba(96, 35, 192, 0.2)",
        ufirst: "rgba(82, 85, 90, 0.8)",
        usecond: "rgba(255, 255, 255, 0.2)",
        outputCopy: "rgba(137, 82, 224, 1)",
        lightText: "#52555A",
        darkGradientStart: "#ccb7ed",
        purple: "#8952E0",
        textGradientEnd: "#CCB7ED",
        loaderGradientVia: "#6A21DF",
        loaderGradientEnd: "#6300FF",
      },
      screens: {
        tiny: "400px",
      },
    },
  },
  plugins: [],
};
