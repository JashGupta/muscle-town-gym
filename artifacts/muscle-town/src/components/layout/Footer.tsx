import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Dumbbell, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-display text-2xl tracking-wider">
              <Dumbbell className="w-8 h-8" />
              <span>MUSCLE TOWN</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              A premium, transformation-focused neighborhood gym. We believe in heavy iron, hard work, and building a stronger you.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/muscle_town_fitness" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-widest text-white mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Trainers', 'Transformations', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors inline-block uppercase text-sm font-medium tracking-wider">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-widest text-white mb-6 uppercase">Programs</h4>
            <ul className="space-y-3">
              {['Strength Training', 'CrossFit', 'Cardio & Fat Loss', 'Yoga & Aerobics', 'Personal Training', 'Nutrition Guidance'].map((program) => (
                <li key={program}>
                  <span className="text-gray-400 inline-block uppercase text-sm font-medium tracking-wider">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-widest text-white mb-6 uppercase">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">2nd Floor, MG Road,<br />Bengaluru, India 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@muscletown.com" className="text-gray-400 text-sm hover:text-primary transition-colors">info@muscletown.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Muscle Town Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}