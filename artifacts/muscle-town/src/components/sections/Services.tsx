import { motion } from "framer-motion";
import { Activity, Flame, HeartPulse, Sparkles, Crosshair, Salad } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Strength Training",
    description: "Heavy iron, real gains. Build size, power, and dominance."
  },
  {
    icon: Crosshair,
    title: "CrossFit",
    description: "Explosive workouts designed for strength, speed, and endurance."
  },
  {
    icon: Activity,
    title: "Fat Loss",
    description: "Burn fat, boost stamina, and stay lean with intense sessions."
  },
  {
    icon: Sparkles,
    title: "Mobility & Yoga",
    description: "Recover better, move freely, and stay injury-free."
  },
  {
    icon: HeartPulse,
    title: "Personal Training",
    description: "Custom coaching built around your body and your goals."
  },
  {
    icon: Salad,
    title: "Nutrition Plans",
    description: "Eat smart, fuel right, and maximize every workout."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <motion.h2 
            className="font-display text-5xl lg:text-6xl text-white mb-5 uppercase leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built to <span className="text-primary">Transform You</span>
          </motion.h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Everything you need to get stronger, leaner, and better—under one roof.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-black/60 border border-white/10 p-6 sm:p-7 rounded-2xl hover:border-primary/60 transition-all duration-300"
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>

              {/* icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white transition" />
              </div>

              {/* title */}
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-white uppercase tracking-wide mb-2">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              {/* bottom line accent */}
              <div className="mt-5 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}