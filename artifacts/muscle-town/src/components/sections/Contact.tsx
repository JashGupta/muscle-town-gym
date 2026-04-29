import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Step Into <span className="text-primary">The Iron</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Ready to change your life? Drop us a message or visit the gym. The first step is showing up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 p-8 rounded-xl"
          >
            <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                  <Input required className="bg-white/5 border-white/10 text-white focus-visible:ring-primary h-12" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Phone Number</label>
                  <Input required type="tel" className="bg-white/5 border-white/10 text-white focus-visible:ring-primary h-12" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                <Input required type="email" className="bg-white/5 border-white/10 text-white focus-visible:ring-primary h-12" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Goal</label>
                <Textarea required className="bg-white/5 border-white/10 text-white focus-visible:ring-primary min-h-[120px]" placeholder="Tell us what you want to achieve..." />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full font-display tracking-widest text-lg h-14">
                {isSubmitting ? "SENDING..." : "BOOK FREE TRIAL"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-black border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-sm text-gray-400">2nd Floor, MG Road<br />Bengaluru, India 560001</p>
                </div>
              </div>
              <div className="bg-black border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2">Contact</h4>
                  <p className="text-sm text-gray-400">+91 98765 43210<br />info@muscletown.com</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124415.82869595562!2d77.580643!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709904256247!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(100%) contrast(120%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}