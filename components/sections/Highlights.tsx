"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/hooks/useScrollProgress";

export function Highlights() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 md:py-24 border-y border-white/5"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              animate={
                isInView
                  ? reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1 }
                  : reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{
                duration: reducedMotion ? 0.3 : 0.6,
                delay: reducedMotion ? 0 : index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-text-secondary">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
