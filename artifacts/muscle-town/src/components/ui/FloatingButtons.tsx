import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <Button
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg flex items-center justify-center p-0"
        onClick={() => window.open("https://wa.me/919876543210", "_blank")}
      >
        <FaWhatsapp className="w-8 h-8" />
      </Button>
      
      <Button
        className="font-display tracking-widest text-lg shadow-xl shadow-primary/20 h-14 px-6 uppercase"
        onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Join Now
      </Button>
    </div>
  );
}