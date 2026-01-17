"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechChipProps {
  label: string;
  variant?: "default" | "accent";
  className?: string;
  delay?: number;
}

export function TechChip({
  label,
  variant = "default",
  className,
  delay = 0,
}: TechChipProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "border transition-colors duration-200",
        variant === "default" &&
          "bg-white/5 border-white/10 text-text-secondary hover:bg-white/10 hover:text-white",
        variant === "accent" &&
          "bg-accent/10 border-accent/20 text-accent hover:bg-accent/20",
        className
      )}
    >
      {label}
    </motion.span>
  );
}
