import { courses, getCourseBySlug } from "@/data/courses";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const course = getCourseBySlug((await params).slug);
  if (!course) notFound();
  return pageMetadata(`Online ${course.title}`, course.shortDescription, `/courses/${course.slug}`);
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-12 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <nav aria-label="Breadcrumb" className="mb-12 text-sm text-primary">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="underline">Home</Link><span aria-hidden="true"> /</span></li>
              <li><Link href="/courses" className="underline">Courses</Link><span aria-hidden="true"> /</span></li>
              <li aria-current="page">{course.title}</li>
            </ol>
          </nav>
          <JsonLd data={{
            "@context": "https://schema.org", "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Courses", item: absoluteUrl("/courses") },
              { "@type": "ListItem", position: 3, name: course.title, item: absoluteUrl(`/courses/${course.slug}`) },
            ],
          }} />

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                {course.level} Level
              </span>
              <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                {course.fullDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
                  <Link href={`/contact?course=${course.slug}`}>Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto">
                  <Link href="/pricing">View Pricing Plans</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-primary/5 h-fit">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-8">What you will learn</h2>
              <ul className="space-y-6">
                {course.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground/80 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <section className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8">
              <h2 className="font-serif text-2xl mb-4">Before you start</h2>
              <p className="text-foreground/80 leading-relaxed">{course.preparation}</p>
              <p className="mt-4 text-sm text-foreground/70">Course pace: {course.duration}. Progress depends on your starting point and practice time.</p>
            </div>
            <div className="rounded-3xl bg-white p-8">
              <h2 className="font-serif text-2xl mb-4">Make the most of your free trial</h2>
              <p className="text-foreground/80 leading-relaxed">{course.trialFocus}</p>
              <p className="mt-4 text-foreground/80">Learning from the US? <Link href="/usa/online-quran-classes" className="text-primary underline">Explore US scheduling and USD plans</Link>.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
