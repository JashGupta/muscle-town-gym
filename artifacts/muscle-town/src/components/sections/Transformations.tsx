import { motion } from "framer-motion";
import transformation1 from "@/assets/transformation-1.png";
import transformation2 from "@/assets/transformation-2.png";

const transformations = [
  {
    image: transformation1,
    title: "8 Month Journey",
    subtitle: "Fat Loss & Muscle Gain"
  },
  {
    image: transformation2,
    title: "12 Month Journey",
    subtitle: "Strength & Toning"
  }
];

export function Transformations() {
  return (
    <section id="transformations" className="py-16 md:py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            className="font-display text-5xl md:text-6xl text-white mb-4 md:mb-6 uppercase leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Proof Is In <span className="text-primary block md:inline">The Work</span>
          </motion.h2>

          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            We don't sell dreams. We facilitate hard work that yields undeniable results.
            See what dedication looks like.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 bg-zinc-900 shadow-xl"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* TOP BADGE */}
              <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                Transformation
              </div>

              {/* CONTENT */}
              <div
                className="absolute bottom-0 left-0 w-full p-5 sm:p-6 md:p-8
                translate-y-2 sm:translate-y-4
                group-hover:translate-y-0
                transition-all duration-500"
              >
                <div className="w-8 md:w-10 h-[2px] bg-primary mb-3 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mt-1">
                  {item.subtitle}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}