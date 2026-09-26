import { startingPrice, plans } from "@/data/pricing";
import { courses } from "@/data/courses";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Star, Clock, Globe } from "lucide-react";
import { testimonials } from "@/data/testimonials";


export const metadata = pageMetadata("Online Quran Classes in USA | Free Trial", "One-to-one online Quran lessons for kids and adults in the USA. Explore USD plans, US-friendly scheduling, and a free 30-minute trial.", "/usa/online-quran-classes");

export default function USALandingPage() {
  const usaTestimonials = testimonials.filter(t => t.role.includes("USA"));

  return (
    <div className="flex min-h-screen flex-col bg-background">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:px-12 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>🇺🇸</span> One-to-one Quran learning for US families
            </div>
            
            <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl mb-8">
              Premium Online Quran Classes in the USA
            </h1>
            
            <p className="text-xl leading-relaxed text-foreground/80 mb-10 max-w-2xl">
              Learn Quran, Tajweed, and Islamic Studies from the comfort of your home. Share your preferred times in Eastern, Central, Mountain, or Pacific time when requesting a trial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg">
                <Link href="/contact">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Localized Features */}
        <section className="bg-white py-24 border-t border-primary/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Flexible US Timing</h3>
                <p className="text-foreground/70">Tell us whether after-school, evening, or weekend sessions suit you. Our team will confirm availability in your time zone.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Discuss Your Learning Goals</h3>
                <p className="text-foreground/70">Tell us your reading level, preferred teaching language, and whether you would like a male or female tutor.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Clear USD Pricing</h3>
                <p className="text-foreground/70">Plans start at {startingPrice} USD per month. Compare class frequency and session length before requesting your free trial.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 lg:px-12">
          <h2 className="font-serif text-3xl mb-6">Choose a course for your starting point</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map(course => <article key={course.slug} className="rounded-3xl bg-white p-8 border border-primary/10">
              <h3 className="font-serif text-2xl mb-3"><Link href={`/courses/${course.slug}`} className="text-primary underline underline-offset-4">{course.title}</Link></h3>
              <p className="text-foreground/80">{course.shortDescription}</p>
            </article>)}
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl mb-6">Monthly plans in US dollars</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map(plan => <div key={plan.name} className="rounded-3xl bg-background p-8">
                <h3 className="font-serif text-2xl mb-3">{plan.name}</h3>
                <p className="text-xl font-medium">{plan.price} USD / month</p>
                <p className="mt-3 text-foreground/80">{plan.features[0]} &middot; {plan.features[1]}</p>
              </div>)}
            </div>
            <Link href="/pricing" className="inline-block mt-6 text-primary underline">Compare all plan details</Link>
          </div>
        </section>
        <section className="container mx-auto px-6 py-16 lg:px-12 max-w-4xl">
          <h2 className="font-serif text-3xl mb-6">Planning your first online lesson</h2>
          <div className="space-y-6 text-foreground/80">
            <div><h3 className="font-medium text-xl mb-2">How do US time zones work?</h3><p>Select your time zone on the trial form and include your preferred days and times. We record named time zones so daylight-saving changes can be considered when arranging your session. Your request is not a confirmed appointment; our team will contact you to agree on a time.</p></div>
            <div><h3 className="font-medium text-xl mb-2">What should a parent share?</h3><p>Include your child&apos;s age, reading experience, and learning goals in the notes. You can also request a female tutor and discuss how you would like to support practice between lessons.</p></div>
            <div><h3 className="font-medium text-xl mb-2">What is included in the trial?</h3><p>The free 30-minute evaluation is a chance to discuss your level, goals, and course choice. No credit card is required to request a trial.</p></div>
          </div>
          <Button asChild size="lg" className="mt-8 rounded-full"><Link href="/contact">Request a free trial</Link></Button>
        </section>
        {/* USA Testimonials */}
        {usaTestimonials.length > 0 && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-serif text-4xl font-medium mb-12">Hear from Parents in the US</h2>
              <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-sm border border-primary/5">
                <div className="flex justify-center text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
                </div>
                <p className="text-xl text-foreground/80 italic mb-8">&quot;{usaTestimonials[0].content}&quot;</p>
                <div className="font-medium text-foreground">{usaTestimonials[0].name}</div>
                <div className="text-sm text-foreground/60">{usaTestimonials[0].role}</div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
