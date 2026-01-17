"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface ScrollProgressOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollProgress(
  options: ScrollProgressOptions = {}
): [RefObject<HTMLElement | null>, number, boolean] {
  const { threshold = 0, rootMargin = "0px" } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            setProgress(entry.intersectionRatio);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [elementRef, progress, isInView];
}

export function useInView(
  options: ScrollProgressOptions = {}
): [RefObject<HTMLElement | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [elementRef, isInView];
}
