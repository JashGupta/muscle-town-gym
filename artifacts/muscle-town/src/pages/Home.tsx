import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Trainers } from "@/components/sections/Trainers";
import { Gallery } from "@/components/sections/Gallery";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { FloatingButtons } from "@/components/ui/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Trainers />
        <Transformations />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}