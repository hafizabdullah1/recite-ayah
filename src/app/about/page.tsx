import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen, Globe, Heart, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Quran Expert",
  description: "Learn about our mission to spread the light of the Quran globally with expert, certified tutors.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              At Quran Expert, our goal is to make high-quality, authentic Islamic education accessible to everyone, everywhere. We connect eager students with certified scholars to learn the Book of Allah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="aspect-square rounded-[3rem] bg-secondary/10 flex items-center justify-center p-12 border border-secondary/20">
              <BookOpen className="w-full h-full text-secondary opacity-50" />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-medium text-foreground">Why We Started</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Many Muslims living in the West or busy with modern life struggle to find qualified, engaging, and flexible Quran tutors. We founded Quran Expert to bridge this gap, ensuring that time zones, locations, and busy schedules never stand in the way of your spiritual growth.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 mt-4">
                <Link href="/contact">Join Our Academy</Link>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-primary/5">
              <ShieldCheck className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Certified Tutors</h3>
              <p className="text-foreground/70">Our teachers are meticulously vetted and hold Ijazah from renowned Islamic institutions.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-primary/5">
              <Globe className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Global Reach</h3>
              <p className="text-foreground/70">We serve thousands of students across the USA, UK, Canada, Australia, and beyond.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-primary/5">
              <Heart className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium mb-3">Student-Centric</h3>
              <p className="text-foreground/70">We focus on patience, encouragement, and building a lifelong love for the Quran.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
