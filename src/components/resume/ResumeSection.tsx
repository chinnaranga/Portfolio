"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, GraduationCap } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-panel/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              07 &mdash; Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Engineering Résumé
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              Curriculum vitae outlining machine learning model training, full-stack application architecture, and academic foundations.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="/resume.pdf"
              download="Ravipati_Chinna_Rangaswamy_Reddy_Resume.pdf"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-foreground text-background text-xs font-mono font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5 mr-2" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-panel hover:bg-panel-hover text-foreground border border-border text-xs font-mono font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-2" />
              <span>View in Tab</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Specification Box */}
        <div className="engineering-panel rounded-2xl p-6 sm:p-10 border border-border max-w-4xl mx-auto">
          {/* Header of document */}
          <div className="pb-6 border-b border-border mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold font-sans text-foreground">
                {siteConfig.name}
              </h3>
              <p className="text-sm font-mono text-accent mt-1">
                {siteConfig.tagline}
              </p>
              <p className="text-xs font-mono text-foreground-subtle mt-1">
                {siteConfig.location} &bull; {siteConfig.email}
              </p>
            </div>

            <div className="text-left sm:text-right font-mono text-xs text-foreground-subtle">
              <span className="block font-semibold text-foreground">Active Candidate</span>
              <span className="block text-emerald-400 mt-0.5">Ready for SDE / ML Roles</span>
            </div>
          </div>

          {/* Section 1: Executive Profile Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold pb-2 border-b border-border/60 mb-3">
              Profile Summary
            </h4>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
              Results-driven Machine Learning Engineer and Full-Stack Developer with hands-on experience building end-to-end intelligent software platforms. Proven track record deploying predictive machine learning classifiers (82% accuracy in credit scoring benchmarks) and architecting resilient Next.js single-page applications with stateless authentication and Cloud Firestore backends.
            </p>
          </div>

          {/* Section 2: Education */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold pb-2 border-b border-border/60 mb-3">
              Education
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono mb-1">
              <span className="font-bold text-foreground">
                Woxsen University, Hyderabad &mdash; {siteConfig.education.degree}
              </span>
              <span className="text-foreground-subtle">2023 &ndash; 2027</span>
            </div>
            <p className="text-xs text-foreground-muted font-sans">
              Specialized coursework in Machine Learning, Computer Vision, Data Structures, and Distributed Big Data Systems.
            </p>
          </div>

          {/* Section 3: Technical Skills Matrix */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold pb-2 border-b border-border/60 mb-3">
              Technical Skill Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-panel border border-border">
                <span className="text-accent font-semibold block mb-1">Machine Learning / AI:</span>
                <span className="text-foreground-muted">
                  Python, PyTorch, scikit-learn, LightGBM, XGBoost, Pandas, Feature Engineering, Model Serving
                </span>
              </div>
              <div className="p-3 rounded-lg bg-panel border border-border">
                <span className="text-accent font-semibold block mb-1">Full-Stack Web Engineering:</span>
                <span className="text-foreground-muted">
                  React 19, Next.js 16, TypeScript, Node.js, Express, REST APIs, Tailwind CSS v4, Redux
                </span>
              </div>
              <div className="p-3 rounded-lg bg-panel border border-border">
                <span className="text-accent font-semibold block mb-1">Data &amp; Persistence:</span>
                <span className="text-foreground-muted">
                  Cloud Firestore, PostgreSQL, MySQL, SQLite, Data Pipelines, Structured EMR Schemas
                </span>
              </div>
              <div className="p-3 rounded-lg bg-panel border border-border">
                <span className="text-accent font-semibold block mb-1">Cloud &amp; DevOps:</span>
                <span className="text-foreground-muted">
                  Docker, Firebase, AWS, GCP, Git, GitHub Actions, Jenkins CI/CD, Linux CLI
                </span>
              </div>
            </div>
          </div>

          {/* Section 4: Selected Production Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold pb-2 border-b border-border/60 mb-3">
              Key Projects
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="font-bold text-foreground">HealthChain:</span>{" "}
                <span className="text-foreground-muted">
                  Decentralized clinical access platform with OTP-verified patient authentication and cryptographic record audit logs.
                </span>
              </div>
              <div>
                <span className="font-bold text-foreground">FAR (Find a Role):</span>{" "}
                <span className="text-foreground-muted">
                  AI-powered talent matching hub with low-latency search indexing and semantic skill categorization.
                </span>
              </div>
              <div>
                <span className="font-bold text-foreground">Feasto:</span>{" "}
                <span className="text-foreground-muted">
                  Digital dining and hospitality tech platform with real-time cart state machines and 95+ Core Web Vitals score.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
