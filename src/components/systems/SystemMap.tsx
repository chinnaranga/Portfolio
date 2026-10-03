"use client";

import React, { useState } from "react";
import Link from "next/link";
import { systemMapNodes, SystemMapNode } from "@/data/systems";
import { Network, ArrowRight, Layers, Database, Cpu, Cloud, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SystemMap() {
  const [selectedNode, setSelectedNode] = useState<SystemMapNode>(systemMapNodes[0]);

  const getNodeIcon = (layer: string) => {
    switch (layer) {
      case "User & Client":
        return Layers;
      case "Gateway & API":
        return ShieldCheck;
      case "Core Application":
        return Network;
      case "ML & Inference":
        return Cpu;
      case "Persistence & Ledger":
        return Database;
      case "Cloud & Edge":
        return Cloud;
      default:
        return Network;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              03 &mdash; Visual Signature
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Systems I've Built
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              A topological map of how machine learning models, application states, domain platforms, and cloud infrastructure interconnect in my work.
            </p>
          </div>

          <div className="text-xs font-mono text-foreground-subtle px-3 py-1.5 rounded-lg border border-border bg-panel">
            <span className="text-accent">&bull;</span> Interactive Topology
          </div>
        </div>

        {/* Map Diagram & Inspector Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Topology Node Graph */}
          <div className="lg:col-span-7 engineering-panel rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-border text-xs font-mono text-foreground-subtle">
              <span>TOPOLOGICAL NODES</span>
              <span>DATA FLOW: LTR</span>
            </div>

            <div className="space-y-3">
              {systemMapNodes.map((node, index) => {
                const Icon = getNodeIcon(node.layer);
                const isSelected = selectedNode.id === node.id;
                const isConnected = selectedNode.connectedTo.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? "bg-foreground text-background border-foreground shadow-md"
                        : isConnected
                        ? "bg-panel border-accent/40 text-foreground"
                        : "bg-panel border-border hover:border-border-highlight text-foreground"
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? "bg-background text-foreground" : "bg-panel-hover text-accent"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold uppercase tracking-tight">
                            {node.name}
                          </span>
                          {isConnected && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-accent/10 text-accent border border-accent/20">
                              Connected
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-xs block ${
                            isSelected ? "text-background/80" : "text-foreground-muted"
                          }`}
                        >
                          {node.layer}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs font-mono ${
                          isSelected ? "text-background/60" : "text-foreground-subtle"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isSelected ? "text-background" : "text-foreground-subtle"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Details & Project Cross-Reference */}
          <div className="lg:col-span-5 engineering-panel rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="pb-4 border-b border-border">
              <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1">
                Node Specification
              </span>
              <h3 className="text-xl font-bold font-sans text-foreground">
                {selectedNode.name}
              </h3>
              <span className="text-xs font-mono text-foreground-subtle">
                Tier: {selectedNode.layer}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-2">
                Operational Summary
              </h4>
              <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                {selectedNode.summary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-2">
                Connected Downstream Services
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.connectedTo.length > 0 ? (
                  selectedNode.connectedTo.map((target) => (
                    <span
                      key={target}
                      className="px-2.5 py-1 rounded bg-panel border border-border text-xs font-mono text-foreground"
                    >
                      &rarr; {target}
                    </span>
                  ))
                ) : (
                  <span className="text-xs font-mono text-foreground-subtle">
                    Terminal Node (Edge CDN)
                  </span>
                )}
              </div>
            </div>

            {/* Direct Link to Project Implementing this Node */}
            <div className="pt-6 border-t border-border">
              <span className="text-[10px] font-mono text-foreground-subtle uppercase block mb-3">
                Production Implementation Case Study
              </span>

              <Link
                href={`/work/${selectedNode.relatedProjectSlug}`}
                className="w-full inline-flex items-center justify-between p-3.5 rounded-xl bg-panel hover:bg-panel-hover border border-border hover:border-border-highlight text-foreground text-xs font-mono transition-colors group"
              >
                <span>Inspect {selectedNode.relatedProjectSlug} case study</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
