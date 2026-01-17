"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { experience } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionTitle>Experience</SectionTitle>
          <SectionSubtitle className="mx-auto">
            My professional journey in software development
          </SectionSubtitle>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          {experience.map((company, companyIndex) => (
            <div key={company.company} className="mb-12 ">
              {/* Company header */}
              <motion.div
                initial={
                  reducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }
                }
                whileInView={
                  reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: reducedMotion ? 0.3 : 0.5 }}
                className="relative pl-12 md:pl-0 md:text-center mb-8 md:pt-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50" />

                <h3 className="text-xl font-semibold text-white">
                  <span className="bg-background px-2 relative z-10">
                    {company.company}
                  </span>
                </h3>
                <p className="text-text-secondary">
                  <span className="bg-background px-2 relative z-10">
                    {company.location}
                  </span>
                </p>
              </motion.div>

              {/* Roles */}
              <div className="space-y-6">
                {company.roles.map((role, roleIndex) => (
                  <motion.div
                    key={role.title}
                    initial={
                      reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
                    }
                    whileInView={
                      reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: reducedMotion ? 0.3 : 0.6,
                      delay: reducedMotion ? 0 : roleIndex * 0.15,
                    }}
                    className={`relative pl-12 md:pl-0 ${
                      roleIndex % 2 === 0
                        ? "md:pr-[calc(50%+2rem)] md:text-right"
                        : "md:pl-[calc(50%+2rem)] md:text-left"
                    }`}
                  >
                    {/* Timeline dot (smaller for roles) */}
                    <div
                      className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 w-2 h-2 rounded-full bg-white/30`}
                    />

                    <Card className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <h4 className="text-lg font-medium text-white">
                          {role.title}
                        </h4>
                        <span className="text-sm text-accent font-medium">
                          {role.period}
                        </span>
                      </div>

                      <ul
                        className={`space-y-2 ${
                          roleIndex % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {role.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-sm text-text-secondary ${
                              roleIndex % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-accent mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
