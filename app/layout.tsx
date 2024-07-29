import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter, lato, poppins } from "./ui/fonts";
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
        className={`${inter.className} ${poppins.variable} ${lato.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
