"use client";

import React, { useState } from "react";
import { engineeringSystems } from "@/data/systems";
import { Cpu, Layout, Cloud, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function EngineeringSystems() {
  const [activeTab, setActiveTab] = useState(engineeringSystems[0].id);

  const selectedSystem = engineeringSystems.find((s) => s.id === activeTab) || engineeringSystems[0];

  return (
    <section id="systems" className="py-24 relative overflow-hidden bg-panel/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12">
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
            02 &mdash; Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
            Engineering Systems
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mt-3 font-sans">
            Concrete technical proficiencies and system architecture patterns. Evaluated by production deployment, algorithmic rigor, and architectural robustness &mdash; not subjective percentage bars.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-border mb-8">
          {engineeringSystems.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-foreground text-background font-semibold shadow-sm"
                  : "bg-panel text-foreground-muted border border-border hover:border-border-highlight hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Domain Capabilities Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-sans text-foreground">
              {selectedSystem.title}
            </h3>
            <span className="text-xs font-mono text-foreground-subtle hidden sm:inline">
              {selectedSystem.subtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedSystem.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="engineering-panel rounded-xl p-6 border border-border flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold font-sans text-foreground mb-2 flex items-center justify-between">
                    <span>{cap.title}</span>
                  </h4>

                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  {/* Concrete Focus Areas */}
                  <div className="space-y-1.5 mb-5">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-foreground-subtle">
                      Core Implementation Vectors:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {cap.focusAreas.map((area) => (
                        <div key={area} className="flex items-center space-x-1.5 text-xs font-mono text-foreground-muted">
                          <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                          <span className="truncate">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-panel text-foreground-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
