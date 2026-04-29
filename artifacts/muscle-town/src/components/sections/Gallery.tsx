import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const images = [
  { src: gallery1, alt: "Heavy Dumbbells" },
  { src: gallery2, alt: "Deadlifting" },
  { src: gallery3, alt: "Squat Racks" },
  { src: gallery4, alt: "Battle Ropes" }
];

export function Gallery() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Inside The <span className="text-primary">Warehouse</span>
            </motion.h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-400 text-lg">
              A glimpse into the environment where excuses end and results begin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}