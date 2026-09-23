import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Star, Clock, Globe } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Online Quran Classes in USA | Recite Ayah",
  description: "Join the best online Quran academy in the USA. Certified tutors, flexible EST/CST/PST scheduling, and tailored programs for kids and adults.",
};

export default function USALandingPage() {
  const usaTestimonials = testimonials.filter(t => t.role.includes("USA"));

  return (
    <div className="flex min-h-screen flex-col bg-background">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:px-12 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>🇺🇸</span> Trusted by 1000+ Muslim Families in the USA
            </div>
            
            <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl mb-8">
              Premium Online Quran Classes in the USA
            </h1>
            
            <p className="text-xl leading-relaxed text-foreground/80 mb-10 max-w-2xl">
              Learn Quran, Tajweed, and Islamic Studies from the comfort of your home. We offer flexible scheduling aligned with EST, CST, and PST time zones.
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
                <p className="text-foreground/70">Classes available 24/7 to perfectly fit your schedule, whether you are in New York (EST) or California (PST).</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Native Arabic Speakers</h3>
                <p className="text-foreground/70">Learn from certified Egyptian scholars who are fluent in English to ensure clear communication with your kids.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl font-medium mb-4">Secure USD Payments</h3>
                <p className="text-foreground/70">Transparent pricing starting at just $35/month. Pay securely via Stripe using any major US credit card.</p>
              </div>
            </div>
          </div>
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
