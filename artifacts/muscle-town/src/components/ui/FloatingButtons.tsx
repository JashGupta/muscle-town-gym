import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingButtons() {
  const [open, setOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: -i * 65,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <div className="fixed bottom-2 right-4 sm:bottom-4 sm:right-4 z-50 flex flex-col items-center">

      {/* ACTION BUTTONS */}
      <AnimatePresence>
        {open && (
          <>
            {/* WhatsApp */}
            <motion.a
              custom={1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              href="https://wa.me/918295501601?text=Hi%20I%20want%20to%20join%20Muscle%20Town%20Gym!"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute group"
            >
              {/* Tooltip */}
              <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap font-semibold">
                WhatsApp
              </span>

              {/* Pulse */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl">
                <FaWhatsapp className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </motion.a>

            {/* Call */}
            <motion.a
              custom={2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              href="tel:+918295501601"
              className="absolute group"
            >
              {/* Tooltip */}
              <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap font-semibold">
                Call Now
              </span>

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* MAIN BUTTON */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.div>
      </motion.button>
    </div>
  );
}