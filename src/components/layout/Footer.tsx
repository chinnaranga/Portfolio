"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-panel/80 py-16 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xl font-bold tracking-tight text-foreground font-sans uppercase">
              {siteConfig.shortName}
            </div>
            <div className="text-xs text-accent font-mono">
              {siteConfig.tagline}
            </div>
            <p className="text-xs text-foreground-muted max-w-sm font-sans leading-relaxed">
              {siteConfig.subheadline}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-[10px] text-foreground-subtle uppercase tracking-widest block">
              Navigation
            </span>
            <div className="flex flex-col space-y-2 text-xs text-foreground-muted">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Direct Actions */}
          <div className="space-y-3">
            <span className="text-[10px] text-foreground-subtle uppercase tracking-widest block">
              Connect
            </span>
            <div className="flex flex-col space-y-2 text-xs text-foreground-muted">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center space-x-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-accent" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center space-x-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-accent" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground inline-flex items-center space-x-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Scroll to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. &bull; {siteConfig.location}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px]">Built with Next.js 16 &middot; React 19 &middot; Tailwind v4</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-panel hover:bg-panel-hover border border-border text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
