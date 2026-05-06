import { motion } from "framer-motion";
import trainer1 from "@/assets/trainer-1.png";
import trainer2 from "@/assets/trainer-2.png";
import trainer3 from "@/assets/trainer-3.png";

const trainers = [
  {
    name: "Vikram Singh",
    role: "Head Strength Coach",
    image: trainer1,
    quote: "Excuses don't build muscle."
  },
  {
    name: "Priya Sharma",
    role: "CrossFit & Mobility Expert",
    image: trainer2,
    quote: "Push past your perceived limits."
  },
  {
    name: "Rahul Verma",
    role: "Bodybuilding Specialist",
    image: trainer3,
    quote: "Symmetry, size, and aesthetics."
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              className="font-display text-5xl md:text-6xl text-white mb-4 uppercase leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Meet The <span className="text-primary">Masters</span>
            </motion.h2>

            <div className="w-16 md:w-20 h-1 bg-primary mb-4"></div>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our coaches aren't just certified—they walk the walk.
              Learn from athletes who have dedicated their lives to mastering human performance.
            </motion.p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-zinc-900 shadow-lg"
            >
              {/* IMAGE */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 md:p-8 
                              translate-y-2 sm:translate-y-4 
                              group-hover:translate-y-0 
                              transition-all duration-500">

                <div className="w-8 md:w-10 h-[2px] bg-primary mb-3 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wide">
                  {trainer.name}
                </h3>

                <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2">
                  {trainer.role}
                </p>

                {/* QUOTE */}
                <p className="text-gray-300 text-xs sm:text-sm italic opacity-0 group-hover:opacity-100 transition duration-500 delay-150">
                  "{trainer.quote}"
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}