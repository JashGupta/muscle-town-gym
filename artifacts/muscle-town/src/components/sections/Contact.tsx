import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const OWNER_EMAIL = "jashgupta77@gmail.com";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: formData.get("goal"),
      _subject: `New Trial Booking from ${formData.get("name")} - Muscle Town`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${OWNER_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else throw new Error();
    } catch {
      toast({
        title: "Could Not Send Message",
        description: "Call us at +91 8295501601 or try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2
            className="font-display text-5xl md:text-6xl text-white mb-4 uppercase leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Step Into <span className="text-primary">The Iron</span>
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base">
            Ready to transform? Drop us a message or visit the gym.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl"
          >
            <h3 className="font-display text-xl md:text-2xl text-white mb-6 uppercase tracking-wide">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="h-12 bg-white/5 border-white/10 text-white focus:ring-primary"
                />
                <Input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="h-12 bg-white/5 border-white/10 text-white focus:ring-primary"
                />
              </div>

              <Input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                className="h-12 bg-white/5 border-white/10 text-white focus:ring-primary"
              />

              <Textarea
                name="goal"
                required
                placeholder="Your fitness goal..."
                className="bg-white/5 border-white/10 text-white min-h-[120px] focus:ring-primary"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 md:h-14 text-base md:text-lg font-semibold tracking-wide transition hover:scale-[1.02]"
              >
                {isSubmitting ? "SENDING..." : "BOOK FREE TRIAL"}
              </Button>
            </form>
          </motion.div>

          {/* INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            
            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="bg-black/60 backdrop-blur border border-white/10 p-5 rounded-xl flex gap-3">
                <MapPin className="text-primary w-5 h-5 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Location
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    2nd Floor, Housing Board  
                    <br /> Kalka, Haryana
                  </p>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur border border-white/10 p-5 rounded-xl flex gap-3">
                <Phone className="text-primary w-5 h-5 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Contact
                  </h4>
                  <a
                    href="tel:+918295501601"
                    className="text-xs text-gray-400 hover:text-primary block"
                  >
                    +91 8295501601
                  </a>
                  <a
                    href="mailto:jashgupta77@gmail.com"
                    className="text-xs text-gray-400 hover:text-primary block"
                  >
                    jashgupta77@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* MAP */}
            <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Kalka,Haryana&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) grayscale(20%) contrast(110%)",
                }}
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}