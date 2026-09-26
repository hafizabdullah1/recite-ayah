import ContactForm from "@/components/forms/ContactForm";
import { getCourseBySlug } from "@/data/courses";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Request a Free Quran Class Trial", "Request a free 30-minute online Quran class. Choose your course, share your time zone, and discuss a suitable lesson time with Recite Ayah.", "/contact");

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ course?: string | string[] }> }) {
  const { course } = await searchParams;
  const selected = typeof course === "string" ? getCourseBySlug(course)?.slug : undefined;
  return <ContactForm initialCourse={selected} />;
}
