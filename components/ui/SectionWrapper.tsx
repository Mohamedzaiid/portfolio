"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
}: SectionWrapperProps) {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: "-50px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn(
        "relative min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24",
        "scroll-mt-20",
        className
      )}
      initial={
        reducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 60, filter: "blur(10px)" }
      }
      animate={
        isInView
          ? reducedMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
          : reducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 60, filter: "blur(10px)" }
      }
      transition={{
        duration: reducedMotion ? 0.3 : 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4",
        "bg-gradient-to-r from-white via-white to-text-secondary bg-clip-text",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-text-secondary max-w-2xl",
        className
      )}
    >
      {children}
    </p>
  );
}
