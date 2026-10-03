"use client";

import React from "react";
import { rdInitiatives } from "@/data/rd";
import { Hourglass, Cpu, Terminal, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 relative overflow-hidden bg-panel/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              04 &mdash; Active R&amp;D
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Currently Building
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              Ongoing engineering initiatives and prototypes in healthcare workflow automation, LLM pipeline workers, and urban spatiotemporal forecasting.
            </p>
          </div>

          <div className="text-xs font-mono text-foreground-subtle px-3 py-1.5 rounded-lg border border-border bg-panel">
            <span className="text-amber-400">&bull;</span> Active Sprints
          </div>
        </div>

        {/* R&D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rdInitiatives.map((item) => (
            <div
              key={item.id}
              className="engineering-panel rounded-2xl p-6 sm:p-7 border border-border flex flex-col justify-between"
            >
              <div>
                {/* Header Tag and Codename */}
                <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
                  <span className="text-[10px] font-mono text-foreground-subtle font-semibold tracking-wider">
                    {item.codename}
                  </span>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wider ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold font-sans text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Progress Metric Bar */}
                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-foreground-subtle">Sprint Progress</span>
                    <span className="text-foreground font-semibold">{item.progressPercent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-panel rounded-full overflow-hidden border border-border">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Current Milestone */}
                <div className="p-3.5 rounded-xl bg-panel border border-border mb-6">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-accent font-semibold mb-1">
                    Current Milestone
                  </span>
                  <p className="text-xs font-mono text-foreground-muted leading-relaxed">
                    {item.currentMilestone}
                  </p>
                </div>

                {/* Research Areas */}
                <div className="space-y-2 mb-6">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-foreground-subtle">
                    Investigation Vectors:
                  </span>
                  <ul className="space-y-1 text-xs font-mono text-foreground-muted">
                    {item.researchAreas.map((area, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-accent">&bull;</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Footnote */}
              <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-panel text-foreground-subtle border border-border"
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
