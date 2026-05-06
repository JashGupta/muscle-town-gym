import { useState, useEffect } from "react";
import { Menu, Dumbbell } from "lucide-react";
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIXED scroll (with offset)
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    // 1. Close menu FIRST
    setIsOpen(false);

    // 2. Delay scroll (IMPORTANT FIX)
    setTimeout(() => {
      const yOffset = -60;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300); // wait for sheet animation
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-2 text-primary font-display tracking-wide"
        >
          <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="text-lg sm:text-xl md:text-2xl">MUSCLE TOWN</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-white/80 hover:text-primary transition uppercase tracking-wider"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => scrollToSection("#pricing")}
            className="px-6 py-2"
          >
            JOIN NOW
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="w-10 h-10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black/95 backdrop-blur-xl border-white/10 w-[85%] max-w-[320px] pt-16"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base font-medium text-white hover:text-primary transition uppercase tracking-wider py-4 border-b border-white/5"
                  >
                    {link.name}
                  </button>
                ))}

                <Button
                  onClick={() => scrollToSection("#pricing")}
                  className="mt-6 w-full py-3 text-base"
                >
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
