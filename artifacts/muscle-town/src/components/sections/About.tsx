import { motion } from "framer-motion";
import { Dumbbell, Target, Users, Zap } from "lucide-react";

export function About() {
  const stats = [
    { label: "Active Members", value: "500+" },
    { label: "Expert Trainers", value: "20+" },
    { label: "Sq Ft Facility", value: "10K+" },
    { label: "Years Strong", value: "5+" }
  ];

  const features = [
    {
      icon: Dumbbell,
      title: "Premium Iron",
      desc: "Competition-grade racks, plates, and machines built for serious training."
    },
    {
      icon: Target,
      title: "Results Focused",
      desc: "Every program and setup is designed to push real measurable progress."
    },
    {
      icon: Users,
      title: "Strong Community",
      desc: "Train with people who push you harder every single day."
    },
    {
      icon: Zap,
      title: "High Energy",
      desc: "Loud, raw, and intense—exactly how real training should feel."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-black relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* TOP HEADING (centered for better balance) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <h2 className="font-display text-5xl md:text-5xl lg:text-6xl text-white uppercase leading-tight mb-6">
            Not Just a Gym.{" "}
            <span className="text-primary block">An Iron Sanctuary.</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            Train harder, move better, and become stronger in an environment
designed for real transformation.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              Muscle Town Fitness was built for one reason—to create real change.
No gimmicks, no distractions. Just a space where effort is respected,
progress is earned, and limits are meant to be broken.
            </p>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
              Whether you're just starting out or chasing your next PR, this is your
              ground to prove yourself. No egos. No distractions. Just progress.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-6">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-2xl sm:text-3xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - FEATURES GRID (cleaner + balanced) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-xl backdrop-blur-sm hover:border-primary/40 transition"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4" />
                  
                  <h3 className="font-display text-lg sm:text-xl text-white uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}