import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { courses } from "@/data/courses";

export const metadata = {
  title: "Book Free Trial | Quran Expert",
  description: "Start your journey today with a free online Quran class.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-12 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl mb-6">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Fill out the form below to schedule your free 30-minute evaluation session with one of our expert tutors. No credit card required.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-primary/5">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6">Contact Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone / WhatsApp</p>
                      <p className="text-foreground/70 text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-foreground/70 text-sm mt-1">support@quranexpert.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-foreground/70 text-sm mt-1">Available Globally (Remote)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                      <input type="text" id="name" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                      <input type="email" id="email" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp Number</label>
                      <input type="tel" id="phone" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+1 234 567 8900" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium text-foreground">Country</label>
                      <input type="text" id="country" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="USA, UK, etc." required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="course" className="text-sm font-medium text-foreground">Course of Interest</label>
                    <select id="course" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" required>
                      <option value="">Select a course...</option>
                      {courses.map(course => (
                        <option key={course.id} value={course.slug}>{course.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Notes (Optional)</label>
                    <textarea id="message" rows={4} className="w-full rounded-xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Any specific requirements (e.g. female tutor required, specific time zone...)"></textarea>
                  </div>

                  <Button size="lg" className="w-full rounded-xl h-14 text-lg">
                    Submit Request
                  </Button>
                  <p className="text-center text-xs text-foreground/50 mt-4">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
