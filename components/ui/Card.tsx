"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CardProps {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
  tilt?: boolean;
  glowColor?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

export function Card({
  children,
  className,
  spotlight = true,
  tilt = true,
  glowColor = "rgba(99, 102, 241, 0.15)",
  rotateAmplitude = 12,
  scaleOnHover = 1.03,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [rotateXY, setRotateXY] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || reducedMotion) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Update spotlight position
      setSpotlightPos({ x: x * 100, y: y * 100 });

      // Calculate tilt rotation
      if (tilt) {
        const tiltX = (y - 0.5) * -rotateAmplitude;
        const tiltY = (x - 0.5) * rotateAmplitude;
        setRotateXY({ x: tiltX, y: tiltY });
      }
    },
    [tilt, rotateAmplitude, reducedMotion],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setSpotlightPos({ x: 50, y: 50 });
    setRotateXY({ x: 0, y: 0 });
  }, []);

  return (
    <div style={{ perspective: "800px", height: "100%" }}>
      <motion.div
        ref={cardRef}
        className={cn(
          "relative rounded-2xl border border-white/10 bg-card backdrop-blur-sm overflow-hidden cursor-pointer",
          className,
        )}
        animate={{
          rotateX: reducedMotion ? 0 : rotateXY.x,
          rotateY: reducedMotion ? 0 : rotateXY.y,
          scale: isHovered && !reducedMotion ? scaleOnHover : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 2,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotlight gradient overlay */}
        {spotlight && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 40%)`,
            }}
          />
        )}

        {/* Border glow effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 40%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        {/* Layered shadow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300"
          style={{
            boxShadow: isHovered
              ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -20px ${glowColor}`
              : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
