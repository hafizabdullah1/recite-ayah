import { courses, getCourseBySlug } from "@/data/courses";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

type Params = Promise<{ slug: string }>;

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
          
          <Link href="/courses" className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Courses
          </Link>

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
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-primary/5 h-fit">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-8">What you will learn</h3>
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

        </div>
      </main>
    </div>
  );
}
