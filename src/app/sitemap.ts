import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { absoluteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until real content revision dates are maintained.
  return ["/", "/about", "/courses", "/pricing", "/contact", "/usa/online-quran-classes", "/privacy", "/terms",
    ...courses.map(course => `/courses/${course.slug}`),
  ].map(path => ({ url: absoluteUrl(path) }));
}
