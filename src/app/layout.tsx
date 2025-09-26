import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Footer from "@/components/Footer";
import Tab from "@/components/Tab";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "This is a movie data clone app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col justify-between select-none`}
      >
        <Providers>
          <Header />
          <Tab />
          <main className="px-4 select-none transition-colors duration-300 flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
