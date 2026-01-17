"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { ProTextType } from "@/components/effects/ProTextType";
import { heroContent, personalInfo } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Dynamic imports for client-side only components
const SplashCursor = dynamic(
  () => import("@/components/effects/SplashCursor"),
  { ssr: false },
);

const TrueFocus = dynamic(() => import("@/components/effects/TrueFocus"), {
  ssr: false,
});

export function Hero() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.12,
        delayChildren: reducedMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: reducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut" as const },
        },
  };

  // Text options for typewriter
  const typewriterTexts = [
    "Full-Stack Developer",
    "React & Next.js Expert",
    "Node.js Specialist",
    "Backend Developer",
    "Frontend Developer",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* SplashCursor Fluid Background - Hero only */}
      {!reducedMotion && <SplashCursor className="z-0" />}

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, transparent 40%, rgba(10, 10, 15, 0.4) 70%, rgba(10, 10, 15, 0.8) 100%)",
        }}
      />

      {/* Content - Centered like Antigravity */}
      <motion.div
        className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/3 border border-white/8 backdrop-blur-sm text-xs font-medium text-white/60 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available for hire
          </span>
        </motion.div>

        {/* Main Title - TrueFocus Animation with Modern Gradient */}
        <motion.div variants={itemVariants} className="mb-6">
          <TrueFocus
            sentence="MOHAMED ZAID"
            separator=" "
            manualMode={false}
            blurAmount={4}
            borderColor="#af1aff"
            glowColor="rgba(34, 211, 238, 0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={2}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-[-0.02em] leading-[1.05]"
            textClassName="bg-clip-text"
            textStyle={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #a78bfa 25%, #818cf8 50%, #22d3ee 75%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        </motion.div>

        {/* Typewriter Subtitle with Gradient */}
        <motion.div
          variants={itemVariants}
          className="h-14 md:h-16 lg:h-20 flex items-center justify-center mb-8"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
            <ProTextType
              texts={typewriterTexts}
              typingSpeed={60}
              deletingSpeed={35}
              pauseDuration={2000}
              initialDelay={800}
              loop={true}
              showCursor={true}
              cursorChar="|"
              cursorBlinkDuration={0.53}
              textColors={["#a78bfa", "#818cf8", "#22d3ee", "#f472b6"]}
              variableSpeed={{ min: 40, max: 90 }}
              startOnVisible={true}
            />
          </div>
        </motion.div>

        {/* Subheadline with subtle gradient */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {heroContent.subheadline}
        </motion.p>

        {/* CTA Buttons - Clean with subtle glow */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            className="min-w-[180px] text-sm font-semibold tracking-wide shadow-lg shadow-indigo-500/20"
          >
            View Projects
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href={personalInfo.resumePath}
            download
            className="min-w-[180px] text-sm font-semibold tracking-wide"
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white/40 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
