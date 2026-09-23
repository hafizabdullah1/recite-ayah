import type { Metadata } from "next";
import { Aoboshi_One, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const aoboshi = Aoboshi_One({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quran Expert | Master the Quran Online",
  description: "Learn Tajweed, Hifz, and Arabic in a supportive, flexible online environment designed for your spiritual journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aoboshi.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/20">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
