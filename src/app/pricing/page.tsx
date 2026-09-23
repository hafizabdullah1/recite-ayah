import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pricing & Plans | Recite Ayah",
  description: "Affordable and flexible online Quran classes. Choose a plan that fits your schedule.",
};

const plans = [
  {
    name: "2 Days / Week",
    price: "$35",
    period: "/ month",
    description: "Perfect for beginners or young children with busy school schedules.",
    features: [
      "8 classes per month",
      "30 mins per session",
      "1-on-1 private classes",
      "Monthly progress report",
      "Male/Female tutors available"
    ],
    popular: false
  },
  {
    name: "3 Days / Week",
    price: "$50",
    period: "/ month",
    description: "Our most balanced plan for steady progress in Reading or Tajweed.",
    features: [
      "12 classes per month",
      "30 mins per session",
      "1-on-1 private classes",
      "Monthly progress report",
      "Male/Female tutors available",
      "Make-up classes allowed"
    ],
    popular: true
  },
  {
    name: "5 Days / Week",
    price: "$75",
    period: "/ month",
    description: "Intensive plan recommended for Hifz (Memorization) students.",
    features: [
      "20 classes per month",
      "30 mins per session",
      "1-on-1 private classes",
      "Weekly progress report",
      "Male/Female tutors available",
      "Make-up classes allowed"
    ],
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-12 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl mb-6">
              Simple & Transparent Pricing
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              No hidden fees, no contracts. Start with a 100% free trial class, and then pick a plan that fits your family&apos;s schedule.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col rounded-[2rem] p-8 md:p-10 transition-transform hover:-translate-y-2 ${
                  plan.popular 
                    ? "bg-primary text-white shadow-xl shadow-primary/20 border-0" 
                    : "bg-white border border-primary/10 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className={`font-serif text-2xl font-medium mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 ${plan.popular ? "text-white/80" : "text-foreground/70"}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-lg ml-1 font-medium ${plan.popular ? "text-white/80" : "text-foreground/60"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${plan.popular ? "text-secondary" : "text-primary"}`} />
                      <span className={plan.popular ? "text-white/90" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  size="lg" 
                  variant={plan.popular ? "secondary" : "default"}
                  className={`w-full rounded-full h-14 text-base ${!plan.popular && "bg-primary/10 text-primary hover:bg-primary hover:text-white"}`}
                >
                  <Link href="/contact">Book Free Trial</Link>
                </Button>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
