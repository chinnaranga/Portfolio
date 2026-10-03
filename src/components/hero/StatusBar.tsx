"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Terminal, Shield, Cpu, Activity } from "lucide-react";

export default function StatusBar() {
  return (
    <section className="w-full border-y border-border bg-panel/60 py-3.5 my-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-mono">
          {/* Signal & Current Building Task */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-accent shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>{siteConfig.status.label}:</span>
            </div>

            <span className="text-xs text-foreground truncate max-w-xl">
              {siteConfig.status.currentFocus}
            </span>
          </div>

          {/* Active Stack Ticker */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-foreground-subtle">
            <span className="text-foreground-subtle hidden sm:inline">STACK:</span>
            {siteConfig.status.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded border border-border bg-panel text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
