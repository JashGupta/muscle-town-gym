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
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 blur-[120px] opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <motion.h2 
            className="font-display text-5xl lg:text-6xl text-white mb-5 uppercase leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Inside The <span className="text-primary">Grind Zone</span>
          </motion.h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg">
            Where the work gets done. No filters, no shortcuts—just sweat, iron, and results.
          </p>
        </div>

        {/* GRID (dynamic layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] sm:auto-rows-[250px]">
          
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              
              className={`group relative overflow-hidden rounded-2xl cursor-pointer
              ${
                index === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : index === 3
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              {/* IMAGE */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

              {/* GLOW OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition duration-300"></div>

              {/* TEXT OVERLAY */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm sm:text-base font-semibold tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  {img.alt}
                </p>
              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-primary/60 rounded-2xl transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}