"use client";

import React from "react";
import Link from "next/link";
import { ProjectData, projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CaseStudyLayout({ project }: { project: ProjectData }) {
  const nextProject = projects.find((p) => p.slug === project.nextSlug) || projects[0];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground bg-tech-grid">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-muted hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Editorial Header */}
          <div className="pb-8 border-b border-border mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-panel border border-border text-accent uppercase font-semibold">
                {project.category.join(" · ")}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-panel border border-border text-emerald-400">
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-sans text-foreground tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-accent font-mono mb-6">
              {project.subtitle}
            </p>

            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans max-w-3xl mb-8">
              {project.tagline}
            </p>

            {/* Quick Action Links & Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-foreground text-background text-xs font-mono font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-panel hover:bg-panel-hover text-foreground border border-border text-xs font-mono font-medium transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 mr-2" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              {project.metrics && (
                <div className="flex items-center space-x-3 text-xs font-mono text-foreground-subtle">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="px-2.5 py-1 rounded bg-panel border border-border">
                      <span className="text-foreground font-semibold">{m.label}:</span>{" "}
                      <span className="text-accent">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section 1: Overview & Problem vs Solution */}
          <div className="space-y-12 mb-16">
            <div>
              <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                01 &mdash; Context &amp; Objectives
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-foreground-muted leading-relaxed font-sans">
                {project.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Problem & Solution Detailed Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="engineering-panel rounded-2xl p-6 sm:p-7 border border-border">
                <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Architectural Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="engineering-panel rounded-2xl p-6 sm:p-7 border border-border">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Technical Architecture Breakdown */}
          <div className="space-y-8 mb-16 pb-16 border-b border-border">
            <div>
              <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                02 &mdash; System Architecture &amp; Data Pipeline
              </h2>
              <p className="text-sm text-foreground-muted leading-relaxed font-sans mb-6">
                {project.architectureSummary}
              </p>
            </div>

            {/* Visual Node Graph */}
            <div className="engineering-panel rounded-2xl p-6 sm:p-8 border border-border">
              <div className="text-xs font-mono uppercase tracking-wider text-foreground-subtle pb-3 border-b border-border mb-6 flex justify-between">
                <span>Data Flow Pipelines</span>
                <span>Sub-system Topology</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.architectureNodes.map((node, idx) => (
                  <div key={node.name} className="p-4 rounded-xl bg-panel border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-accent font-bold">
                        NODE 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-foreground-subtle">
                        {node.type}
                      </span>
                    </div>
                    <div className="text-sm font-mono font-bold text-foreground mb-1">
                      {node.name}
                    </div>
                    <div className="text-xs text-foreground-muted font-sans leading-relaxed">
                      {node.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-3">
                Technologies &amp; Libraries Used:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-panel border border-border text-xs font-mono text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Engineering Decisions & Tradeoffs */}
          <div className="space-y-8 mb-16 pb-16 border-b border-border">
            <div>
              <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                03 &mdash; Engineering Decisions &amp; Trade-Offs
              </h2>
              <p className="text-sm text-foreground-muted font-sans">
                Every architectural choice involves explicit tradeoffs between development velocity, operational cost, and security guarantees.
              </p>
            </div>

            <div className="space-y-4">
              {project.engineeringDecisions.map((dec, idx) => (
                <div key={idx} className="engineering-panel rounded-xl p-5 border border-border">
                  <div className="text-sm font-mono font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="text-accent">D0{idx + 1}:</span>
                    <span>{dec.decision}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans mt-3 pt-3 border-t border-border/60">
                    <div>
                      <span className="font-mono text-accent uppercase text-[10px] block mb-1">
                        Rationale
                      </span>
                      <p className="text-foreground-muted leading-relaxed">{dec.rationale}</p>
                    </div>
                    <div>
                      <span className="font-mono text-amber-400 uppercase text-[10px] block mb-1">
                        Accepted Trade-off
                      </span>
                      <p className="text-foreground-muted leading-relaxed">{dec.tradeoff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Security & Real-world Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-border">
            <div className="engineering-panel rounded-2xl p-6 sm:p-7 border border-border">
              <div className="flex items-center space-x-2 text-xs font-mono text-accent uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Security &amp; Hardening</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-muted font-sans">
                {project.securityConsiderations.map((sec, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-accent mt-0.5 select-none">&bull;</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="engineering-panel rounded-2xl p-6 sm:p-7 border border-border">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Outcomes &amp; Impact</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-muted font-sans">
                {project.outcomes.map((out, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-400 mt-0.5 select-none">&bull;</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Next Project Navigation */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Work Grid</span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center px-5 py-3 rounded-lg bg-panel hover:bg-panel-hover border border-border hover:border-border-highlight text-foreground text-xs font-mono transition-colors group"
            >
              <span className="mr-2">Next Case Study: {nextProject.shortTitle}</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
