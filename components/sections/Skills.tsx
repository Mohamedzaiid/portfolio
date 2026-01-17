"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { skills } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const categoryIcons: Record<string, JSX.Element> = {
  Frontend: (
    <svg
      className="w-5 h-5"
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
  Backend: (
    <svg
      className="w-5 h-5"
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
  Databases: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  ),
  "DevOps & Tools": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Programming: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  Languages: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  ),
};

export function Skills() {
  const reducedMotion = useReducedMotion();
  const categories = Object.entries(skills);

  return (
    <SectionWrapper
      id="skills"
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionTitle>Technical Skills</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Technologies and tools I use to bring ideas to life
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={
                reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: reducedMotion ? 0.3 : 0.6,
                delay: reducedMotion ? 0 : categoryIndex * 0.1,
              }}
              className="h-full"
            >
              <Card className="p-6 h-full flex flex-col">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={
                        reducedMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      whileInView={
                        reducedMotion
                          ? { opacity: 1 }
                          : { opacity: 1, scale: 1 }
                      }
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: reducedMotion
                          ? 0
                          : categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-text-secondary hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
