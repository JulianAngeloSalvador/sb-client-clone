import type { Config } from "tailwindcss";

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
      title: "clamp(1.5rem, 4vw + 1rem, 2.5rem)",
      main: "clamp(1rem, 1vw + 1rem, 1.0125rem)",
      small: "clamp(.8125rem, 1vw + 1rem, .9rem)",
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
        "marcellus-sc": ["var(--font-marcellus-sc)"],
      },
    },
  },
  plugins: [],
};
export default config;
