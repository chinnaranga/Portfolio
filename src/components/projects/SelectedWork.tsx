"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, ProjectData } from "@/data/projects";
import { ExternalLink, Github, ArrowRight, ShieldCheck, Cpu, Network, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AI / ML", "Full Stack", "Healthcare", "Experiments"] as const;
type CategoryFilter = (typeof categories)[number];

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category.includes(selectedCategory);
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border mb-12">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              01 &mdash; Selected Work &amp; Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Production Systems &amp; Software
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-panel border border-border rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-foreground text-background font-semibold"
                    : "text-foreground-muted hover:text-foreground hover:bg-panel-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Major Editorial Featured Project Sections */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((proj, idx) => (
              <motion.article
                key={proj.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                className="engineering-panel rounded-2xl p-6 sm:p-10 border border-border relative overflow-hidden"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded bg-panel-hover border border-border">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-foreground-subtle hidden sm:inline">
                      {proj.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono bg-panel border border-border text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
                      {proj.status}
                    </span>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  {/* Left Column: Title & Architectural Summary */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-foreground">
                      {proj.title}
                    </h3>

                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans">
                      {proj.summary}
                    </p>

                    {/* Problem vs Solution Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                      <div className="p-4 rounded-xl bg-panel border border-border">
                        <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-rose-400 mb-1.5">
                          Problem Solved
                        </div>
                        <p className="text-xs text-foreground-muted leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-panel border border-border">
                        <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">
                          Engineered Solution
                        </div>
                        <p className="text-xs text-foreground-muted leading-relaxed">
                          {proj.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Architecture Nodes & Specifications */}
                  <div className="lg:col-span-5 bg-panel border border-border rounded-xl p-5 space-y-4">
                    <div className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider pb-2 border-b border-border flex items-center justify-between">
                      <span>Architecture Pipeline</span>
                      <span className="text-[10px] text-foreground-subtle">
                        {proj.architectureNodes.length} NODES
                      </span>
                    </div>

                    <div className="space-y-2">
                      {proj.architectureNodes.map((node, nIdx) => (
                        <div
                          key={node.name}
                          className="flex items-start space-x-2.5 text-xs font-mono py-1.5 border-b border-border/50 last:border-0"
                        >
                          <span className="text-accent font-semibold select-none">
                            0{nIdx + 1}.
                          </span>
                          <div>
                            <span className="text-foreground font-medium block">
                              {node.name}
                            </span>
                            <span className="text-[10px] text-foreground-subtle block">
                              {node.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Metrics */}
                    {proj.metrics && (
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border text-center">
                        {proj.metrics.map((m) => (
                          <div key={m.label} className="p-2 rounded bg-background border border-border/60">
                            <span className="block text-[9px] font-mono text-foreground-subtle uppercase">
                              {m.label}
                            </span>
                            <span className="block text-xs font-mono font-bold text-foreground truncate mt-0.5">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Technologies List & Action Links Footer */}
                <div className="pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-panel border border-border text-xs font-mono text-foreground-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-panel hover:bg-panel-hover text-foreground border border-border hover:border-border-highlight text-xs font-mono font-medium transition-colors"
                      >
                        <span>Live Product</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                    )}

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-panel hover:bg-panel-hover text-foreground border border-border hover:border-border-highlight text-xs font-mono font-medium transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        <span>Source</span>
                      </a>
                    )}

                    <Link
                      href={`/work/${proj.slug}`}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-foreground text-background text-xs font-mono font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Secondary Technical Experiments Grid */}
        {secondaryProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <div className="text-xs font-mono text-foreground-subtle uppercase tracking-widest mb-6">
              Additional Engineering Benchmarks &amp; Prototypes
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((p) => (
                <div
                  key={p.slug}
                  className="engineering-panel rounded-xl p-6 border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-panel-hover border border-border text-accent uppercase">
                        {p.category.join(" · ")}
                      </span>
                      <span className="text-[10px] font-mono text-foreground-subtle">
                        {p.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-sans text-foreground mb-2">
                      {p.title}
                    </h4>

                    <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-panel text-foreground-subtle border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-foreground hover:text-accent inline-flex items-center"
                      >
                        <span>GitHub</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
