import { motion } from "framer-motion";
import { Activity, Flame, HeartPulse, Sparkles, Crosshair, Salad } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Strength Training",
    description: "Build raw power and muscle mass with our extensive collection of free weights, power racks, and plate-loaded machines."
  },
  {
    icon: Crosshair,
    title: "CrossFit",
    description: "High-intensity functional movements designed to improve your overall fitness, endurance, and athletic performance."
  },
  {
    icon: Activity,
    title: "Cardio & Fat Loss",
    description: "Melt fat and boost stamina with our top-tier cardio equipment and high-energy HIIT group sessions."
  },
  {
    icon: Sparkles,
    title: "Yoga & Mobility",
    description: "Enhance flexibility, core strength, and recovery with guided yoga and mobility classes."
  },
  {
    icon: HeartPulse,
    title: "Personal Training",
    description: "1-on-1 coaching tailored to your exact goals, body type, and fitness level for maximum results."
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    description: "Fuel your transformation with custom meal plans and nutritional advice from certified experts."
  }
];

export function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How We <span className="text-primary">Build Beasts</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose your weapon. We offer a full spectrum of training disciplines to match your goals, whether that's lifting heavier, running faster, or moving better.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-black border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors group cursor-default"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}