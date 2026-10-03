"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import ArchitectureVisualizer from "./ArchitectureVisualizer";
import { ArrowDown, Download, MapPin, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-12 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Top Headline Layout */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          {/* Engineering Signal Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border bg-panel text-xs font-mono text-foreground-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-foreground font-medium">{siteConfig.location}</span>
            <span className="text-border-highlight">&bull;</span>
            <span className="text-emerald-400 font-semibold">{siteConfig.status.availability}</span>
          </div>

          {/* Full Name - Strong Typographic Statement */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans text-foreground uppercase leading-[1.05] mb-5">
            Ravipati Chinna <br />
            <span className="text-accent">Rangaswamy Reddy</span>
          </h1>

          {/* Core Roles Subtitle */}
          <div className="font-mono text-sm sm:text-lg text-foreground-muted tracking-tight mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-foreground font-semibold">Machine Learning Engineer</span>
            <span className="text-border-highlight hidden sm:inline">&bull;</span>
            <span className="text-foreground font-semibold">Full-Stack Developer</span>
            <span className="text-border-highlight hidden sm:inline">&bull;</span>
            <span className="text-accent font-semibold">Healthcare Tech Builder</span>
          </div>

          {/* Narrative Elevator Pitch */}
          <p className="text-base sm:text-xl text-foreground-muted leading-relaxed font-sans max-w-3xl mb-8">
            {siteConfig.subheadline}
          </p>

          {/* Primary Action Buttons & Social Channels */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-all cursor-pointer shadow-sm"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-3.5 h-3.5 ml-2" />
            </a>

            <a
              href="/resume.pdf"
              download="Ravipati_Chinna_Rangaswamy_Reddy_Resume.pdf"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-panel hover:bg-panel-hover text-foreground font-mono text-xs font-semibold uppercase tracking-wider border border-border hover:border-border-highlight transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 mr-2" />
              <span>Download Resume</span>
            </a>

            {/* Direct Social Links */}
            <div className="flex items-center space-x-2 pt-2 sm:pt-0 sm:ml-4 border-t sm:border-t-0 border-border">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-panel text-foreground-muted hover:text-foreground hover:border-border-highlight transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-panel text-foreground-muted hover:text-foreground hover:border-border-highlight transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-3 rounded-lg border border-border bg-panel text-foreground-muted hover:text-foreground hover:border-border-highlight transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Interactive System Architecture Visualizer */}
        <div className="w-full">
          <ArchitectureVisualizer />
        </div>
      </div>
    </section>
  );
}
