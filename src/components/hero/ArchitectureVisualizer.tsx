"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, ShieldCheck, Cpu, Database, Cloud, Network, Activity } from "lucide-react";

interface NodeSpec {
  id: string;
  name: string;
  protocol: string;
  role: string;
  tech: string;
  status: string;
  icon: React.ElementType;
}

const pipelineNodes: NodeSpec[] = [
  {
    id: "client",
    name: "Client Interfaces",
    protocol: "HTTPS / WSS",
    role: "User Presentation & Viewport Hydration",
    tech: "React 19 · Next.js 16",
    status: "Healthy",
    icon: Laptop,
  },
  {
    id: "gateway",
    name: "API & Access Gateway",
    protocol: "mTLS / Bearer JWT",
    role: "OTP Verification & Token Revocation",
    tech: "Edge Middleware · Rate Limiter",
    status: "Sub-20ms",
    icon: ShieldCheck,
  },
  {
    id: "app",
    name: "Core App Service",
    protocol: "gRPC / Internal REST",
    role: "Domain Logic & State Machines",
    tech: "TypeScript · Node · FastAPI",
    status: "Active",
    icon: Network,
  },
  {
    id: "ml",
    name: "ML Inference Engine",
    protocol: "Vector I/O & REST",
    role: "Feature Pipeline & Model Predictions",
    tech: "Python · PyTorch · scikit-learn",
    status: "Trained",
    icon: Cpu,
  },
  {
    id: "storage",
    name: "Encrypted Data & Ledger",
    protocol: "TLS 1.3 / AES-256",
    role: "Immutable Records & Document Store",
    tech: "Cloud Firestore · PostgreSQL",
    status: "Synchronized",
    icon: Database,
  },
  {
    id: "cloud",
    name: "Cloud & Edge Deployment",
    protocol: "Anycast CDN / CI/CD",
    role: "Container Orchestration & DNS",
    tech: "Docker · Firebase · GCP",
    status: "99.9% Target",
    icon: Cloud,
  },
];

export default function ArchitectureVisualizer() {
  const [activeNode, setActiveNode] = useState<NodeSpec>(pipelineNodes[0]);

  return (
    <div className="w-full engineering-panel rounded-2xl p-5 sm:p-7 relative overflow-hidden">
      {/* Header bar of visualizer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
            System Architecture &amp; Data Pipeline
          </span>
        </div>
        <div className="flex items-center space-x-2 font-mono text-[11px] text-foreground-subtle">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span>Interactive Telemetry: Click Node</span>
        </div>
      </div>

      {/* Interactive Architecture Flow Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6 relative">
        {pipelineNodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = activeNode.id === node.id;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer relative group ${
                isSelected
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-panel border-border hover:border-border-highlight text-foreground"
              }`}
              aria-label={`Select ${node.name}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`p-1.5 rounded-lg ${
                    isSelected ? "bg-background text-foreground" : "bg-panel-hover text-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`text-[10px] font-mono font-semibold ${
                    isSelected ? "text-background/70" : "text-foreground-subtle"
                  }`}
                >
                  0{index + 1}
                </span>
              </div>

              <div className="font-mono text-xs font-semibold tracking-tight truncate mb-1">
                {node.name}
              </div>

              <div
                className={`text-[10px] font-mono truncate ${
                  isSelected ? "text-background/80" : "text-foreground-muted"
                }`}
              >
                {node.tech.split("·")[0]}
              </div>

              {/* Data stream arrow on non-last items */}
              {index < pipelineNodes.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-border-highlight">
                  <span className="text-[10px] font-mono select-none">&rarr;</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Node Telemetry Inspector Card */}
      <motion.div
        key={activeNode.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="p-4 sm:p-5 rounded-xl bg-panel border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
              {activeNode.protocol}
            </span>
            <span className="text-border-highlight">&bull;</span>
            <span className="text-xs font-mono text-foreground font-semibold">
              {activeNode.name}
            </span>
          </div>
          <p className="text-xs text-foreground-muted leading-relaxed max-w-2xl">
            {activeNode.role}
          </p>
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-border pt-3 md:pt-0">
          <div className="text-left md:text-right">
            <span className="block text-[10px] font-mono text-foreground-subtle uppercase">
              Technology Base
            </span>
            <span className="text-xs font-mono text-foreground font-medium">
              {activeNode.tech}
            </span>
          </div>
          <div className="px-2.5 py-1 rounded border border-border bg-panel-hover font-mono text-[11px] text-emerald-400">
            {activeNode.status}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
