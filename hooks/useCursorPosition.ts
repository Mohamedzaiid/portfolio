"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
  elementX: number;
  elementY: number;
}

export function useCursorPosition(elementRef?: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    elementX: 0.5,
    elementY: 0.5,
  });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      let elementX = 0.5;
      let elementY = 0.5;

      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        elementX = (x - rect.left) / rect.width;
        elementY = (y - rect.top) / rect.height;
      }

      setPosition({ x, y, elementX, elementY });
    },
    [elementRef]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return position;
}

export function useElementCursorPosition() {
  const elementRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    setPosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setPosition({ x: 0.5, y: 0.5 });
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return { elementRef, position, isHovering };
}
