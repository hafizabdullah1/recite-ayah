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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://reciteayah.vercel.app"),
  title: "Recite Ayah | Learn Quran Online with Certified Tutors",
  description: "Join thousands of students learning Quran online. Book a free 30-minute trial class with our certified male and female Islamic scholars today. 24/7 flexible scheduling available.",
  openGraph: {
    title: "Recite Ayah | Learn Quran Online",
    description: "Start your Quran learning journey with certified scholars. Book your free trial today.",
    url: "https://www.reciteayah.com",
    siteName: "Recite Ayah",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recite Ayah - Learn Quran Online",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recite Ayah | Learn Quran Online",
    description: "Start your Quran learning journey with certified scholars. Book your free trial today.",
    images: ["/twitter-image.jpg"],
  },
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
