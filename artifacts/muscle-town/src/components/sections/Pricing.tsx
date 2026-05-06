import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "1",
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
    price: "2",
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
    price: "3",
    period: "per year",
    description: "For the truly committed.",
    features: [
      "Everything in Quarterly",
      "Unlimited guest passes",
      "3 Personal training sessions",
      "Advanced nutrition plan",
      "Free T-shirt",
      "Freeze membership up to 30 days"
    ],
    recommended: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-black relative">

      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            className="font-display text-5xl md:text-6xl text-white mb-4 uppercase leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Invest In <span className="text-primary">Yourself</span>
          </motion.h2>

          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4"></div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            No hidden fees. No complicated contracts. Just straight-up value.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`
                relative flex flex-col rounded-2xl p-6 md:p-8
                backdrop-blur-xl transition-all duration-500
                border
                ${plan.recommended
                  ? "border-primary bg-zinc-950 shadow-2xl shadow-primary/20 scale-[1.02] md:scale-105"
                  : "border-white/10 bg-white/5 hover:border-primary/40 hover:-translate-y-2"}
              `}
            >

              {/* POPULAR BADGE */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* PLAN INFO */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-display text-xl sm:text-2xl text-white uppercase mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                  {plan.description}
                </p>

                {/* PRICE */}
                <div className="flex items-end gap-1 text-white">
                  <span className="text-lg md:text-xl font-semibold">₹</span>
                  <span className="font-display text-4xl md:text-5xl tracking-tight">
                    {plan.price}
                  </span>
                </div>

                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  {plan.period}
                </p>
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 mb-6 md:mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.recommended ? "default" : "outline"}
                className={`
                  w-full h-11 md:h-12 font-display tracking-widest text-sm md:text-base
                  transition-all duration-300
                  ${plan.recommended
                    ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                    : "border-white/20 hover:bg-white/10"}
                `}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                CHOOSE {plan.name}
              </Button>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none"></div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}