import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <BookOpen className="h-6 w-6" />
          </div>
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
            Quran Expert
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About Us</Link>
          <Link href="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Courses</Link>
          <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Pricing</Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/contact">Book Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
