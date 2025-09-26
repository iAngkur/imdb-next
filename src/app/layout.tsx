import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "This is a movie data clone app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter}`}
      >
        {children}
      </body>
    </html>
  );
}
