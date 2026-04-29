import { motion } from "framer-motion";
import transformation1 from "@/assets/transformation-1.png";
import transformation2 from "@/assets/transformation-2.png";

export function Transformations() {
  return (
    <section id="transformations" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Proof Is In <span className="text-primary">The Work</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            We don't sell dreams. We facilitate hard work that yields undeniable results. See what dedication looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/10"
          >
            <img 
              src={transformation1} 
              alt="Male Fitness Transformation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-1">8 Month Journey</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Fat Loss & Muscle Gain</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/10"
          >
            <img 
              src={transformation2} 
              alt="Female Fitness Transformation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-1">12 Month Journey</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Strength & Toning</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}