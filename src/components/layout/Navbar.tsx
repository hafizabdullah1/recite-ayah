"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <BookOpen className="h-6 w-6" />
          </div>
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground" onClick={() => setIsOpen(false)}>
            Recite Ayah
          </Link>
        </div>

        {/* Desktop Nav */}
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-b border-primary/10 shadow-lg md:hidden flex flex-col px-6 py-6 space-y-6">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/courses" className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link href="/pricing" className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/contact" className="text-lg font-medium text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
          <Button asChild className="w-full rounded-full h-12 text-base">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Book Free Trial</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
