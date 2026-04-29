import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "1,999",
    period: "per month",
    description: "Perfect for short-term goals.",
    features: [
      "Access to all gym equipment",
      "Locker room access",
      "Free fitness assessment",
      "1 Guest pass per month"
    ],
    recommended: false
  },
  {
    name: "Quarterly",
    price: "4,999",
    period: "per 3 months",
    description: "Our most popular membership.",
    features: [
      "Everything in Monthly",
      "Free group classes",
      "1 Personal training session",
      "Custom workout plan",
      "Nutrition basics guide"
    ],
    recommended: true
  },
  {
    name: "Yearly",
    price: "14,999",
    period: "per year",
    description: "For the truly committed.",
    features: [
      "Everything in Quarterly",
      "Unlimited guest passes",
      "3 Personal training sessions",
      "Advanced nutrition plan",
      "Free Muscle Town T-shirt",
      "Freeze membership up to 30 days"
    ],
    recommended: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-white mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Invest In <span className="text-primary">Yourself</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            No hidden fees. No complicated contracts. Just straight-up value for your commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl border ${
                plan.recommended 
                  ? "border-primary bg-zinc-950/50 shadow-2xl shadow-primary/10" 
                  : "border-white/10 bg-white/5"
              } p-8 flex flex-col backdrop-blur-sm`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-bold tracking-widest uppercase text-xs py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="font-display text-5xl tracking-tight mx-1">{plan.price}</span>
                </div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-widest mt-1">
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.recommended ? "default" : "outline"} 
                className={`w-full font-display tracking-widest text-lg h-12 ${
                  !plan.recommended ? "border-white/20 hover:bg-white/10" : ""
                }`}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CHOOSE {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}