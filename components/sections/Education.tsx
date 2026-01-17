"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { education } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Education() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="education"
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionTitle>Education & Training</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Academic background and continuous learning
          </SectionSubtitle>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Degree */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
            className="h-full"
          >
            <Card className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-text-secondary">{education.university}</p>
            </Card>
          </motion.div>

          {/* Training / Courses */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: reducedMotion ? 0.3 : 0.6,
              delay: reducedMotion ? 0 : 0.15,
            }}
            className="h-full"
          >
            <Card className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                Training
              </h3>
              <ul className="space-y-3">
                {education.courses.map((course, index) => (
                  <motion.li
                    key={course}
                    initial={
                      reducedMotion ? { opacity: 0 } : { opacity: 0, x: -10 }
                    }
                    whileInView={
                      reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: reducedMotion ? 0 : 0.3 + index * 0.1,
                    }}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{course}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
