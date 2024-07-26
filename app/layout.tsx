import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter } from "./ui/fonts";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
