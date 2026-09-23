export const metadata = {
  title: "Terms and Conditions | Quran Expert",
  description: "Terms and conditions of service for Quran Expert.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          
          <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl mb-10">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:text-foreground/80">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>Welcome to Quran Expert. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions.</p>

            <h2>2. Enrollment and Classes</h2>
            <p>Students must maintain decorum and respect during online classes. Scheduling is done based on mutual agreement. Any cancellations must be communicated at least 24 hours in advance to be eligible for a make-up class.</p>

            <h2>3. Payments and Refunds</h2>
            <p>Fees are collected on a monthly basis in advance. We offer a full refund within the first week of paid classes if you are unsatisfied with our service. After this period, fees are non-refundable.</p>

            <h2>4. Privacy</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your visit to our website, to understand our practices.</p>

            <h2>5. Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page and are effective immediately upon posting.</p>
          </div>

        </div>
      </main>
    </div>
  );
}
