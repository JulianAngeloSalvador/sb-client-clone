import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter, marcellus_sc, red_rose } from "./ui/fonts";
import Navbar from "./ui/components/Navbar";

export const metadata: Metadata = {
  title: "Starbucks Coffee",
  description: "Starbucks Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${red_rose.variable} ${marcellus_sc.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
