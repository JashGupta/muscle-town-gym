import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg z-10"
      >
        {/* Icon */}
        <AlertTriangle className="mx-auto mb-6 w-16 h-16 text-primary" />

        {/* 404 */}
        <h1 className="text-6xl font-display mb-4">404</h1>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-display uppercase mb-4">
          You Took a Wrong Turn
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          This page doesn’t exist. But your transformation still can.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="h-12 px-6 text-sm font-display tracking-wider"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}