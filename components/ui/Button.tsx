"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Magnet from "@/components/effects/Magnet";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean;
  disableMagnet?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      href,
      download,
      disableMagnet = false,
      ...props
    },
    ref,
  ) => {
    const reducedMotion = useReducedMotion();

    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary overflow-hidden group";

    const variants = {
      primary:
        "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25",
      secondary:
        "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
      ghost:
        "bg-transparent text-text-secondary hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-3",
    };

    const motionProps = reducedMotion
      ? {}
      : {
          whileHover: { scale: 1.02, y: -2 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring" as const, stiffness: 400, damping: 17 },
        };

    const content = (
      <>
        {/* Shine effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {/* Glow effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-radial from-white/10 to-transparent" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </>
    );

    const buttonElement = href ? (
      <motion.a
        href={href}
        download={download}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...motionProps}
        {...(props as HTMLMotionProps<"a">)}
      >
        {content}
      </motion.a>
    ) : (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.button>
    );

    // Wrap with Magnet for magnetic hover effect
    if (disableMagnet || reducedMotion) {
      return buttonElement;
    }

    return (
      <Magnet padding={50} magnetStrength={3}>
        {buttonElement}
      </Magnet>
    );
  },
);

Button.displayName = "Button";

export { Button };
