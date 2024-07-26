import { Inter, Marcellus_SC, Red_Rose } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const red_rose = Red_Rose({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-red-rose",
  display: "swap",
  preload: true,
});

const marcellus_sc = Marcellus_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus-sc",
  display: "swap",
  preload: true,
});

export { inter, red_rose, marcellus_sc };
