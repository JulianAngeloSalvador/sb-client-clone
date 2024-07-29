import { Inter, Lato, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export { inter, lato, poppins };
