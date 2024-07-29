import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionDuration: {
      slow: ".75s",
      medium: ".5s",
      fast: ".25s",
    },
    fontSize: {
      headline: "clamp(2rem, 4vw + 1rem, 4rem)",
      subheadline: "clamp(1.85rem, 4vw + 1rem, 3.25rem)",
      title: "clamp(1.35rem, 4vw + 1rem, 1.75rem)",
      main: "clamp(1rem, 1vw + 1rem, 1.0125rem)",
      small: "clamp(.8125rem, 1vw + 1rem, .9rem)",
    },
    fontWeight: {
      DEFAULT: "300",
      semibold: "500",
      bold: "700",
      extrabold: "900",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#121212",
        secondary: "#EAEAEA",
        brand: "#00603F",
      },
      fontFamily: {
        "red-rose": ["var(--font-red-rose)"],
        lato: ["var(--font-lato)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
    }),
  ],
};
export default config;
