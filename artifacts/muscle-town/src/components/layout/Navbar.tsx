import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Trainers", href: "#trainers" },
  { name: "Transformations", href: "#transformations" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-2 text-primary font-display text-2xl tracking-wider hover:opacity-80 transition-opacity"
        >
          <Dumbbell className="w-8 h-8" />
          <span>MUSCLE TOWN</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button onClick={() => scrollToSection("#pricing")} className="font-display tracking-widest text-lg px-8">
            JOIN NOW
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10 w-[300px] flex flex-col pt-16">
              <nav className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider w-full py-2 text-center"
                  >
                    {link.name}
                  </button>
                ))}
                <Button onClick={() => scrollToSection("#pricing")} className="font-display tracking-widest text-xl px-8 w-full mt-4">
                  JOIN NOW
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}