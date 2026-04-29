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
    text: "I used to be intimidated by the free weights section. The community at Muscle Town is so supportive, now I'm deadlifting more than my bodyweight.",
  },
  {
    name: "Karthik R.",
    goal: "Bodybuilding Prep",
    text: "The equipment is top tier. If you're serious about building muscle, this is the only place in Bengaluru you should be training.",
  },
  {
    name: "Neha D.",
    goal: "Post-injury Recovery",
    text: "The coaches helped me rebuild my strength after a back injury. They scaled everything perfectly. Best decision I made for my health.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real Sweat. <span className="text-primary">Real Talk.</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-black border border-white/10 p-8 rounded-xl h-full relative">
                    <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h4 className="font-display text-xl text-white uppercase tracking-wider">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary text-sm font-bold tracking-widest uppercase">
                        {testimonial.goal}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}