"use client";

import { motion } from "framer-motion";
import { LogoLoop, LogoItem } from "@/components/ui/LogoLoop";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Technology icons as SVG nodes for better quality
const techLogos: LogoItem[] = [
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        React
      </span>
    ),
    title: "React",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        Next.js
      </span>
    ),
    title: "Next.js",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        TypeScript
      </span>
    ),
    title: "TypeScript",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        Node.js
      </span>
    ),
    title: "Node.js",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        Express
      </span>
    ),
    title: "Express",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        MongoDB
      </span>
    ),
    title: "MongoDB",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        PostgreSQL
      </span>
    ),
    title: "PostgreSQL",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        Tailwind
      </span>
    ),
    title: "Tailwind CSS",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        Docker
      </span>
    ),
    title: "Docker",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        AWS
      </span>
    ),
    title: "AWS",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        GraphQL
      </span>
    ),
    title: "GraphQL",
  },
  {
    node: (
      <span className="text-white/70 font-semibold text-lg tracking-wide">
        Redis
      </span>
    ),
    title: "Redis",
  },
];

export function TechStack() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-16 overflow-hidden bg-[#0a0a0f]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">
          Technologies I Work With
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white/80">
          Modern Tech Stack
        </h2>
      </motion.div>

      {/* Logo Loop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <LogoLoop
          logos={techLogos}
          speed={reducedMotion ? 0 : 60}
          direction="left"
          logoHeight={24}
          gap={64}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#0a0a0f"
          scaleOnHover={true}
          ariaLabel="Technologies I work with"
        />
      </motion.div>

      {/* Second row going opposite direction for visual interest */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8"
      >
        <LogoLoop
          logos={[...techLogos].reverse()}
          speed={reducedMotion ? 0 : 40}
          direction="right"
          logoHeight={20}
          gap={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#0a0a0f"
          scaleOnHover={true}
          ariaLabel="More technologies"
          className="opacity-60"
        />
      </motion.div>
    </section>
  );
}

export default TechStack;
