"use client";

import Link from "next/link";
import { timezones } from "@/data/timezones";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { courses } from "@/data/courses";
import { useState, useTransition } from "react";
import { submitLeadAction } from "@/actions/submitLead";

export default function ContactForm({ initialCourse = "" }: { initialCourse?: string }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error", message?: string }>({ type: "idle" });

  const [customTimezone, setCustomTimezone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    startTransition(async () => {
      try {
        const result = await submitLeadAction(formData);
        if (result.success) {
          setStatus({ type: "success", message: "Alhamdulillah! Your request has been received. Our team will contact you shortly." });
          // Reset form
          form.reset();
          setCustomTimezone(false);
        } else {
          setStatus({ type: "error", message: result.error || "An error occurred. Please try again." });
        }
      } catch {
        setStatus({ type: "error", message: "We could not send your request. Please try again." });
      }
    });
  };

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
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:support@reciteayah.com" className="text-primary text-sm mt-1 underline">support@reciteayah.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Online lessons</p>
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
                
                {status.type === "success" ? (
                  <div role="status" aria-live="polite" className="flex flex-col items-center justify-center text-center h-full py-12">
                    <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-foreground mb-4">Request Received!</h3>
                    <p className="text-foreground/80">{status.message}</p>
                    <Button onClick={() => setStatus({ type: "idle" })} variant="outline" className="mt-8 rounded-full">
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isPending}>
                    <div hidden aria-hidden="true">
                      <label htmlFor="website">Leave this field empty</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    {status.type === "error" && (
                      <div role="alert" className="p-4 rounded-xl bg-red-50 text-red-600 text-sm border border-red-200">
                        {status.message}
                      </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                        <input type="text" id="name" name="name" autoComplete="name" maxLength={100} className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" placeholder="John Doe" required disabled={isPending} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                        <input type="email" id="email" name="email" autoComplete="email" maxLength={254} className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" placeholder="john@example.com" required disabled={isPending} />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp Number</label>
                        <input type="tel" id="phone" name="phone" autoComplete="tel" maxLength={40} className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" placeholder="+1 234 567 8900" required disabled={isPending} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="country" className="text-sm font-medium text-foreground">Country</label>
                        <input type="text" id="country" name="country" autoComplete="country-name" maxLength={100} className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" placeholder="USA, UK, etc." required disabled={isPending} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="course" className="text-sm font-medium text-foreground">Course of Interest</label>
                      <select id="course" name="course" defaultValue={initialCourse} className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" required disabled={isPending}>
                        <option value="">Select a course...</option>
                        {courses.map(course => (
                          <option key={course.id} value={course.slug}>{course.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="timezone-choice" className="text-sm font-medium text-foreground">Your time zone</label>
                      <select id="timezone-choice" name={customTimezone ? undefined : "timezone"} defaultValue="" onChange={event => setCustomTimezone(event.target.value === "other")} className="w-full h-12 rounded-xl px-4 border border-gray-300 bg-white" required disabled={isPending}>
                        <option value="">Select your time zone...</option>
                        {timezones.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                        <option value="other">Another time zone</option>
                      </select>
                      {customTimezone && <>
                        <label htmlFor="timezone" className="text-sm font-medium">Time zone name</label>
                        <input id="timezone" name="timezone" list="all-timezones" maxLength={100} placeholder="e.g. Europe/Paris" required disabled={isPending} className="w-full h-12 rounded-xl px-4 border border-gray-300" />
                        <datalist id="all-timezones">{Intl.supportedValuesOf("timeZone").map(zone => <option key={zone} value={zone} />)}</datalist>
                      </>}
                      <p className="text-sm text-foreground/60">Include your preferred days and times in the notes. We will contact you to confirm availability.</p>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Notes (Optional)</label>
                      <textarea id="message" name="message" maxLength={2000} rows={4} className="w-full rounded-xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" placeholder="Any specific requirements (e.g. female tutor required, specific time zone...)" disabled={isPending}></textarea>
                    </div>

                    <Button size="lg" className="w-full rounded-xl h-14 text-lg shadow-lg" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                    <p className="text-center text-xs text-foreground/50 mt-4">
                      By submitting this form, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
