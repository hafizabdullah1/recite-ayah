import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  GraduationCap, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  Video,
  Star,
  CheckCircle2
} from "lucide-react";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pb-20 pt-16 lg:px-12 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex max-w-2xl flex-col items-start gap-8">
              <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-[4.5rem]">
                Master the Art of Reciting the Quran with Guidance
              </h1>
              
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                Unlock the spiritual beauty and depth of the Holy Quran through personalized online lessons with certified expert teachers. Flexible, interactive, and transformative learning from anywhere.
              </p>

              <div className="flex flex-col items-start gap-4">
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact">Book Free Trial</Link>
                </Button>
                <span className="text-sm font-medium text-secondary ml-4">
                  Schedule Your Session
                </span>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground leading-tight">Certified<br />Teachers</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground leading-tight">Flexible<br />times</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground leading-tight">Tajweed<br />Focus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-qari.jpg"
                  alt="Young Quran teacher giving an online lesson"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full border border-secondary/20" />
              <div className="absolute -top-8 -right-8 -z-10 h-32 w-32 rounded-full border border-primary/10 bg-primary/5" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">Why Choose Quran Expert?</h2>
              <p className="mt-4 text-lg text-foreground/70">Experience the best online Islamic education with our core benefits.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "Certified Scholars", desc: "Learn from highly qualified tutors from Egypt and top Islamic universities." },
                { icon: Users, title: "Female Tutors Available", desc: "We provide dedicated and qualified female teachers for sisters and kids." },
                { icon: Video, title: "Interactive 1-on-1 Classes", desc: "Live, private video sessions ensuring complete focus on your progress." },
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-start gap-4 rounded-3xl bg-background p-8 shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">Our Featured Courses</h2>
                <p className="mt-4 text-lg text-foreground/70">Comprehensive programs designed for all ages and levels.</p>
              </div>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {courses.slice(0, 4).map((course) => (
                <Link key={course.id} href={`/courses/${course.slug}`} className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-primary/5 hover:shadow-xl transition-all">
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-medium text-foreground">{course.title}</h3>
                    <p className="text-sm text-foreground/70">{course.shortDescription}</p>
                  </div>
                  <div className="mt-8 flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                    Learn more <span className="ml-2">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Steps */}
        <section className="bg-primary py-24 text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl font-medium md:text-5xl">Start Your Journey in 3 Easy Steps</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto mb-16">It only takes a few minutes to set up your first free trial class.</p>
            
            <div className="grid gap-8 md:grid-cols-3 relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-white/20" />
              {[
                { step: "1", title: "Request a Trial", desc: "Fill out our simple form to book your free evaluation class." },
                { step: "2", title: "Get Evaluated", desc: "Meet your tutor, discuss goals, and get your level assessed." },
                { step: "3", title: "Start Learning", desc: "Choose a pricing plan and schedule that works best for you." },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-3xl font-serif text-white shadow-lg z-10 mb-6 border-8 border-primary">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl mb-16">What Parents & Students Say</h2>
            
            <div className="grid gap-8 md:grid-cols-3 text-left">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="rounded-3xl bg-background p-8 border border-primary/5">
                  <div className="flex text-yellow-400 mb-6">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-8 italic">
                    &quot;Alhamdulillah, my kids love learning from their tutor. The teaching method is very engaging and we have seen massive improvements in their Tajweed within a month.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary font-bold">FA</div>
                    <div>
                      <h4 className="font-medium text-foreground">Fatima A.</h4>
                      <p className="text-sm text-foreground/60">Parent, USA</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Lead Capture */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-[3rem] bg-secondary/10 px-6 py-16 md:py-20 text-center border border-secondary/20 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl mb-6">Ready to Connect with the Quran?</h2>
                <p className="text-lg text-foreground/80 mb-10">Join thousands of students worldwide. Your first class is completely free, with no credit card required.</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 h-14 rounded-full px-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shrink-0 shadow-lg">
                    <Link href="/contact">Book Free Trial</Link>
                  </Button>
                </form>
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-foreground/60">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No obligation</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 30-min evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}
