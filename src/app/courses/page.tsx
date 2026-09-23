import Link from "next/link";
import { courses } from "@/data/courses";
import { BookOpen, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Map string icon names to Lucide components
const iconMap = {
  "book-open": BookOpen,
  "star": Star,
  "award": Award,
  "users": Users,
};

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="mb-16 max-w-2xl">
            <h1 className="font-serif text-5xl font-medium text-foreground md:text-6xl mb-6">Our Courses</h1>
            <p className="text-lg text-foreground/70">
              Whether you are a complete beginner or looking to perfect your Tajweed, we have a structured program tailored for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {courses.map((course) => {
              const IconComponent = iconMap[course.icon as keyof typeof iconMap] || BookOpen;
              return (
                <div key={course.id} className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-primary/5 hover:shadow-xl transition-shadow">
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h2 className="mb-4 font-serif text-3xl font-medium text-foreground">{course.title}</h2>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-6">{course.shortDescription}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8 font-medium">
                      <span className="bg-background px-3 py-1 rounded-full border border-primary/10">
                        Level: {course.level}
                      </span>
                      <span className="bg-background px-3 py-1 rounded-full border border-primary/10">
                        Duration: {course.duration}
                      </span>
                    </div>
                  </div>
                  
                  <Link href={`/courses/${course.slug}`}>
                    <Button variant="outline" className="w-full h-12 rounded-full text-base">
                      View Course Details
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}
