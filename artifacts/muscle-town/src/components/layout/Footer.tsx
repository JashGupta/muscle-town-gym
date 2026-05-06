import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Dumbbell, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    // 2. Delay scroll (IMPORTANT FIX)
    setTimeout(() => {
      const yOffset = -60;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300); // wait for sheet animation
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-primary font-display text-2xl sm:text-3xl tracking-wide">
              <Dumbbell className="w-7 h-7" />
              <span>MUSCLE TOWN</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A transformation-focused gym built on discipline, strength, and
              consistency.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  link: "tel:+918295501601",
                },
                {
                  icon: <FaWhatsapp className="w-5 h-5" />,
                  link: "https://wa.me/918295501601",
                },
                {
                  icon: <FaInstagram className="w-5 h-5" />,
                  link: "https://www.instagram.com/muscle_town_fitness",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-display text-lg text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Trainers", "Pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                      className="text-gray-400 text-sm hover:text-primary transition-all hover:translate-x-1 inline-block"
                    >
                      {link}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="font-display text-lg text-white mb-5 uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Strength Training</li>
              <li>CrossFit</li>
              <li>Fat Loss</li>
              <li>Yoga</li>
              <li>Personal Training</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-display text-lg text-white mb-5 uppercase tracking-wider">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>
                  2nd Floor, Housing Board <br />
                  Kalka, Haryana
                </span>
              </div>

              <a
                href="tel:+918295501601"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <Phone className="w-5 h-5 text-primary" />
                +91 82955 01601
              </a>

              <a
                href="mailto:jashgupta77@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <Mail className="w-5 h-5 text-primary" />
                jashgupta77@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Muscle Town Fitness. All rights
            reserved.
          </p>

          <p className="text-gray-600 text-xs sm:text-sm">
            Crafted by{" "}
            <a
              href="https://www.instagram.com/jash.gpt/"
              target="_blank"
              className="text-primary hover:underline"
            >
              Jash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
