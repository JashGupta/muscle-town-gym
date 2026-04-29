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
    <section id="trainers" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Meet The <span className="text-primary">Masters</span>
            </motion.h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our coaches aren't just certified—they walk the walk. Learn from athletes who have dedicated their lives to mastering human performance.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-1 bg-primary mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <h3 className="font-display text-3xl text-white uppercase tracking-wider mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
                  {trainer.role}
                </p>
                <p className="text-gray-300 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
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