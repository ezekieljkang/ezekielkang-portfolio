import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EK",
  description: "A Web Developer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link type="image/png" sizes="32x32" rel="icon" href=".../icons8-home-32.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
