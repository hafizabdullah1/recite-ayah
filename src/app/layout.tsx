import type { Metadata } from "next";
import { site, absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
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
  metadataBase: new URL(site.url), title: site.name, description: site.description,
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
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", "@id": absoluteUrl("/#organization"), name: site.name, url: site.url }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
