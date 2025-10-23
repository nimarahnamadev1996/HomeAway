import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeAway",
  description: "HomeAway — Find, book, and love your perfect hotel stay.",
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
