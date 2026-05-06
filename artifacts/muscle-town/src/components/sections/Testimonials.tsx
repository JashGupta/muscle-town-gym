import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Arjun M.",
    goal: "Lost 15kg in 6 months",
    text: "This isn't a typical commercial gym. The energy here makes you want to lift heavier. The trainers actually care about your form and progress.",
  },
  {
    name: "Sneha K.",
    goal: "Gained Strength & Confidence",
    text: "I used to be intimidated by the free weights section. The community is so supportive—now I'm deadlifting more than my bodyweight.",
  },
  {
    name: "Karthik R.",
    goal: "Bodybuilding Prep",
    text: "The equipment is top tier. If you're serious about building muscle, this is the only place you should be training.",
  },
  {
    name: "Neha D.",
    goal: "Post-injury Recovery",
    text: "The coaches helped me rebuild my strength after a back injury. They scaled everything perfectly. Best decision for my health.",
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2
            className="font-display text-5xl md:text-6xl text-white mb-4 uppercase leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real Sweat. <span className="text-primary block md:inline">Real Talk.</span>
          </motion.h2>

          <div className="w-16 md:w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* CAROUSEL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="
                    pl-4
                    basis-[85%]
                    sm:basis-[70%]
                    md:basis-1/2
                    lg:basis-1/2
                  "
                >
                  <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 sm:p-8 shadow-xl overflow-hidden transition-all duration-500 hover:border-primary/40">

                    {/* TEXT */}
                    <p className="text-gray-300 text-md sm:text-base md:text-xl  mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* USER */}
                    <div className="mt-auto">
                      <h4 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mt-1">
                        {testimonial.goal}
                      </p>
                    </div>

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* CONTROLS */}
            <div className="flex justify-center md:justify-end gap-3 mt-8">
              <CarouselPrevious className="static bg-white/5 border-white/10 hover:bg-primary hover:text-white transition" />
              <CarouselNext className="static bg-white/5 border-white/10 hover:bg-primary hover:text-white transition" />
            </div>

          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}