"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProTextTypeProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorChar?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  cursorColor?: string;
  variableSpeed?: { min: number; max: number };
  startOnVisible?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ProTextType({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  initialDelay = 0,
  pauseDuration = 2000,
  loop = true,
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorChar = "|",
  cursorBlinkDuration = 0.5,
  textColors = ["#6366f1"],
  cursorColor,
  variableSpeed,
  startOnVisible = false,
  className = "",
  style = {},
}: ProTextTypeProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLSpanElement>(null);

  const [displayedText, setDisplayedText] = React.useState("");
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(!startOnVisible);

  // Resolved cursor color
  const firstColor = textColors?.[0] || "#6366f1";
  const resolvedCursorColor = cursorColor || firstColor;

  // Variable typing speed
  const getRandomSpeed = React.useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    const lo = Math.max(0, Number(min) || 0);
    const hi = Math.max(lo, Number(max) || lo);
    return Math.random() * (hi - lo) + lo;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = React.useCallback(() => {
    if (!textColors || textColors.length === 0) return "#6366f1";
    return textColors[currentTextIndex % textColors.length];
  }, [textColors, currentTextIndex]);

  // Start on visible (IntersectionObserver)
  React.useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;
    const el = containerRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnVisible]);

  // Typing loop
  React.useEffect(() => {
    if (!isVisible || reducedMotion) return;

    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex] ?? "";

    const run = () => {
      if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          if (currentTextIndex === texts.length - 1 && !loop) return;
          setCurrentTextIndex((i) => (i + 1) % texts.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText((prev) => prev + currentText[currentCharIndex]);
              setCurrentCharIndex((i) => i + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else {
          if (
            texts.length > 1 &&
            (loop || currentTextIndex < texts.length - 1)
          ) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
          // else: stop on last sentence; keep cursor blinking
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(run, initialDelay);
    } else {
      run();
    }

    return () => timeout && clearTimeout(timeout);
  }, [
    isVisible,
    texts,
    currentTextIndex,
    loop,
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
    variableSpeed,
    getRandomSpeed,
    reducedMotion,
  ]);

  // For reduced motion, show full first text
  if (reducedMotion) {
    return (
      <span className={className} style={style}>
        <span style={{ color: getCurrentTextColor() }}>{texts[0]}</span>
        {showCursor && (
          <span style={{ color: resolvedCursorColor, marginLeft: "0.25rem" }}>
            {cursorChar}
          </span>
        )}
      </span>
    );
  }

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < (texts[currentTextIndex] ?? "").length || isDeleting);

  return (
    <span ref={containerRef} className={className} style={style}>
      <span style={{ color: getCurrentTextColor() }}>{displayedText}</span>
      {showCursor && !shouldHideCursor && (
        <motion.span
          style={{
            marginLeft: "0.25rem",
            display: "inline-block",
            color: resolvedCursorColor,
          }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: cursorBlinkDuration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
}
