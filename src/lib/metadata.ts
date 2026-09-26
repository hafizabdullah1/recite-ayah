import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: absoluteUrl("/opengraph-image.jpg"), alt: "Recite Ayah - Learn Quran Online" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/twitter-image.jpg")],
    },
  };
}
