"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/SectionWrapper";
import { pillars } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const icons = {
  frontend: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  backend: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  fullstack: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  ),
};

export function Pillars() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionTitle>What I Do</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Specialized in building modern web applications from concept to
            deployment
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={
                reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: reducedMotion ? 0.3 : 0.6,
                delay: reducedMotion ? 0 : index * 0.15,
              }}
              className="h-full"
            >
              <Card
                className="h-full p-8 flex flex-col"
                glowColor={
                  index === 0
                    ? "rgba(99, 102, 241, 0.2)"
                    : index === 1
                      ? "rgba(168, 85, 247, 0.2)"
                      : "rgba(236, 72, 153, 0.2)"
                }
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.05))"
                        : index === 1
                          ? "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))"
                          : "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.05))",
                  }}
                >
                  <span
                    className={
                      index === 0
                        ? "text-indigo-400"
                        : index === 1
                          ? "text-purple-400"
                          : "text-pink-400"
                    }
                  >
                    {icons[pillar.icon as keyof typeof icons]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
