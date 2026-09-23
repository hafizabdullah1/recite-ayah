export const metadata = {
  title: "Privacy Policy | Quran Expert",
  description: "Privacy policy for Quran Expert.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          
          <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl mb-10">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:text-foreground/80">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>At Quran Expert, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights.</p>

            <h2>2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul>
              <li><strong>Identity Data:</strong> First name, last name.</li>
              <li><strong>Contact Data:</strong> Email address and telephone/WhatsApp numbers.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to register you as a new student, process and deliver your classes, and manage our relationship with you.</p>

            <h2>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at support@quranexpert.com.</p>
          </div>

        </div>
      </main>
    </div>
  );
}
