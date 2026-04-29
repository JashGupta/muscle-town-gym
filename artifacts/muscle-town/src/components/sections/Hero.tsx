import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Muscle Town Fitness Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold tracking-widest uppercase mb-6">
              Premium Training Facility in Bengaluru
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white mb-6 uppercase">
              Transform <span className="text-primary block">Your Body.</span>
              <span className="block mt-2">Forge Your Mind.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
              Step into the most gritty, energetic, and powerful gym in town. Heavy iron, 
              expert coaching, and a community built on hard work and real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-display text-xl tracking-widest h-14 px-8"
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                JOIN NOW
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display text-xl tracking-widest h-14 px-8 border-2 hover:bg-white/10"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                BOOK FREE TRIAL
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}