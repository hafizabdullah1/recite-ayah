export const site = {
  name: "Recite Ayah",
  url: "https://reciteayah.com",
  description: "One-to-one online Quran lessons for kids and adults. Explore Noorani Qaida, Tajweed, Hifz, and Islamic studies, and request a free trial.",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
