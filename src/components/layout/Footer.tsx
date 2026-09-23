import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <BookOpen className="h-6 w-6" />
          <span className="font-serif text-2xl font-bold tracking-tight">Quran Expert</span>
        </div>
        
        <div className="flex gap-6 text-sm text-white/60">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>

        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Quran Expert. All rights reserved.</p>
      </div>
    </footer>
  );
}
