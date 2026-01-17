"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { TechChip } from "@/components/ui/TechChip";
import { Button } from "@/components/ui/Button";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/SectionWrapper";
import { projects } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Projects() {
  const reducedMotion = useReducedMotion();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <SectionWrapper
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle className="mx-auto">
            A selection of projects showcasing my skills in full-stack
            development
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={
                reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: reducedMotion ? 0.3 : 0.7,
                delay: reducedMotion ? 0 : index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card className="h-full flex flex-col">
                {/* Header with type badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {project.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Value statement */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.value}
                  </p>
                </div>

                {/* Features */}
                <div className="px-6 flex-grow">
                  <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech, i) => (
                      <TechChip key={tech} label={tech} delay={i * 0.05} />
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-xs text-text-secondary self-center ml-1">
                        +{project.stack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-4 border-t border-white/5 mt-auto">
                  <div className="flex gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.github}
                      className="flex-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </Button>
                    {project.live ? (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.live}
                        className="flex-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </Button>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center text-sm text-text-secondary">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
