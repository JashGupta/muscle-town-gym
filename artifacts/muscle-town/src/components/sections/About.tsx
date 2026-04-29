import { motion } from "framer-motion";
import { Dumbbell, Target, Users, Zap } from "lucide-react";

export function About() {
  const stats = [
    { label: "Active Members", value: "500+" },
    { label: "Expert Trainers", value: "20+" },
    { label: "Square Feet", value: "10,000" },
    { label: "Years Strong", value: "5+" }
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6 uppercase">
              Not Just a Gym. <br/>
              <span className="text-primary">An Iron Sanctuary.</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Muscle Town Fitness was forged from a simple belief: real results come from hard work, heavy iron, and an unbreakable community. We stripped away the gimmicks and built a raw, energetic space dedicated to pure transformation.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Whether you're lifting your first barbell or chasing a new personal record, our warehouse is your proving ground. No judgment, no egos—just sweat, iron, and progress.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 pt-12">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Dumbbell className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">Premium Iron</h3>
                <p className="text-sm text-gray-400">Competition-grade racks, plates, and machines.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">Community</h3>
                <p className="text-sm text-gray-400">Surround yourself with people pushing you to be better.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">Results Focused</h3>
                <p className="text-sm text-gray-400">Everything is designed to help you hit your goals.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-white uppercase tracking-wider mb-2">High Energy</h3>
                <p className="text-sm text-gray-400">Loud music, intense atmosphere, no distractions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}