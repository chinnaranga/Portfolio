"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              05 &mdash; Professional Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Engineering Journey
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              Production engineering contributions across full-stack web applications and applied machine learning pipelines.
            </p>
          </div>

          <div className="text-xs font-mono text-foreground-subtle px-3 py-1.5 rounded-lg border border-border bg-panel">
            <span>Verified Timeline</span>
          </div>
        </div>

        {/* Engineering Résumé Card Layout */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="engineering-panel rounded-2xl p-6 sm:p-8 border border-border"
            >
              {/* Role Title & Metadata Row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-mono text-accent font-bold">
                      0{index + 1}.
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-sm font-semibold text-foreground-muted font-sans">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground-subtle">
                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded bg-panel border border-border">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded bg-panel border border-border">
                    <MapPin className="w-3.5 h-3.5 text-foreground-subtle" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Concrete Contributions List */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground-subtle mb-3">
                  Technical Contributions &amp; System Responsibilities:
                </div>
                {exp.contributions.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-3 text-sm text-foreground-muted font-sans leading-relaxed">
                    <span className="text-accent font-mono text-xs mt-1 select-none">&bull;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Verified Outcomes If Available */}
              {exp.outcomes && (
                <div className="p-4 rounded-xl bg-panel border border-border mb-6 space-y-1.5">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Verified Engineering Outcomes:
                  </span>
                  {exp.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-center space-x-2 text-xs font-mono text-foreground">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-panel text-foreground-subtle border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
