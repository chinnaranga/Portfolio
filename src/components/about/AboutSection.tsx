"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Terminal, Shield, Network, HeartPulse, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const narrativeSteps = [
    {
      domain: "Computer Science Foundations",
      summary:
        "Started with rigorous algorithmic mechanics: time and space complexity, cache hierarchies, graph traversals, and low-level data structures that define performant computing.",
      icon: Terminal,
    },
    {
      domain: "Full-Stack Software Engineering",
      summary:
        "Evolved into architecting modern, responsive single-page platforms. Learned the realities of state machines, client bundle optimization, token authorization, and database indexing.",
      icon: Network,
    },
    {
      domain: "Machine Learning & AI Pipelines",
      summary:
        "Realized that algorithmic software becomes vastly more impactful when paired with predictive intelligence. Began training ensemble regressors, evaluating confusion matrices, and serving inference models via FastAPI.",
      icon: Shield,
    },
    {
      domain: "Healthcare Technology & Secure Workflows",
      summary:
        "Found the most demanding and meaningful test for these disciplines: clinical workflows. In healthcare, sub-second latency, zero data tampering, and strict patient consent verification are non-negotiable requirements.",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              06 &mdash; Engineering Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              About the Journey
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              How computer science theory, full-stack systems engineering, machine learning pipelines, and healthcare architectures converge.
            </p>
          </div>

          <div className="text-xs font-mono text-foreground-subtle px-3 py-1.5 rounded-lg border border-border bg-panel">
            <span>Philosophy &amp; Focus</span>
          </div>
        </div>

        {/* Narrative Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Core Narrative Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold font-sans text-foreground leading-snug">
              "I do not simply assemble frontend interfaces &mdash; I engineer resilient, end-to-end software systems."
            </h3>

            <p className="text-sm text-foreground-muted leading-relaxed font-sans">
              I am a Machine Learning Engineer and Full-Stack Developer based in Hyderabad, India, currently pursuing my Computer Science and Engineering degree at Woxsen University. My perspective is shaped by hands-on engineering across both browser runtimes and model training pipelines.
            </p>

            <p className="text-sm text-foreground-muted leading-relaxed font-sans">
              Too often in contemporary software, a divide exists between data science teams who build models in isolated notebooks and product teams who struggle to serve those models reliably to real users. My focus is deliberately situated at that intersection: taking mathematical models, packaging them into containerized inference endpoints, and wiring them into fast, accessible, zero-layout-shift web applications.
            </p>

            <p className="text-sm text-foreground-muted leading-relaxed font-sans">
              My deepest product interest is **healthcare systems**. Clinical data exchange demands the highest engineering discipline: zero tolerance for unauthorized record exposure, rigorous multi-factor verification, sub-200ms latency, and cryptographic auditability. Every project I undertake is built with this same standard of reliability.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="p-4 rounded-xl bg-panel border border-border">
                <span className="block text-xs font-mono text-foreground-subtle uppercase">
                  Primary Location
                </span>
                <span className="block text-base font-bold font-sans text-foreground mt-1">
                  {siteConfig.location}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-panel border border-border">
                <span className="block text-xs font-mono text-foreground-subtle uppercase">
                  Degree Focus
                </span>
                <span className="block text-base font-bold font-sans text-foreground mt-1">
                  B.E. CSE (2023–2027)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Progressive Evolution Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-foreground-subtle pb-2 border-b border-border">
              Narrative Progression
            </div>

            {narrativeSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.domain}
                  className="p-5 rounded-xl bg-panel border border-border flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-lg bg-panel-hover border border-border text-accent shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-mono text-accent font-semibold">
                        PHASE 0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-border-highlight">&bull;</span>
                      <h4 className="text-sm font-bold font-sans text-foreground">
                        {step.domain}
                      </h4>
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed font-sans">
                      {step.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
