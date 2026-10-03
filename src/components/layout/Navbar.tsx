"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section scrollspy
      const sections = siteConfig.navigation.map((n) => n.href.replace("#", ""));
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "py-3 bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Technical Indicator */}
          <a
            href="#"
            className="flex items-center space-x-3 text-foreground group focus:outline-none"
            aria-label="Back to top"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                {siteConfig.name.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono text-foreground-subtle hidden sm:inline">
                ML &middot; FULL-STACK &middot; HEALTHCARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            <div className="flex items-center bg-panel/80 border border-border rounded-full p-1 backdrop-blur-sm">
              {siteConfig.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
                      isActive
                        ? "text-background font-semibold"
                        : "text-foreground-muted hover:text-foreground hover:bg-panel-hover"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-foreground rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Quick Status Pill */}
            <div className="hidden lg:flex items-center ml-3 px-3 py-1 rounded-full border border-border bg-panel text-[11px] font-mono text-foreground-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
              <span>HYDERABAD, IN</span>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full border border-border bg-panel text-foreground-muted hover:text-foreground hover:border-border-highlight transition-colors cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </nav>

          {/* Mobile Menu Action */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border bg-panel text-foreground-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-border bg-panel text-foreground"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-background/95 backdrop-blur-xl border-b border-border p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-1">
                Navigation
              </div>
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-mono font-medium flex items-center justify-between border ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-foreground text-background font-semibold border-foreground"
                      : "bg-panel text-foreground-muted border-border hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-foreground-subtle">
                <span>{siteConfig.location}</span>
                <span className="text-emerald-400">&bull; Available</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
