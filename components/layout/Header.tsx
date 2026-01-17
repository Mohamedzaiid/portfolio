"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.2 : 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/80 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="text-lg font-bold text-white hover:text-accent transition-colors"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                href={personalInfo.resumePath}
                download
              >
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <nav className="mx-4 p-4 rounded-2xl bg-bg-secondary/95 backdrop-blur-lg border border-white/10 shadow-xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 mt-2 border-t border-white/10">
                  <Button
                    variant="primary"
                    size="sm"
                    href={personalInfo.resumePath}
                    download
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
