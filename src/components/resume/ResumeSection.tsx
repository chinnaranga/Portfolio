"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Download, ExternalLink, FileText, ChevronDown, ChevronUp, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-panel/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              07 &mdash; Official Resume
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Engineering Résumé
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              Verified resume detailing education at Woxsen University (CGPA: 7.8/10), full-stack project architectures, and industry certifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download="Ravipati_Chinna_Rangaswamy_Reddy_Resume.pdf"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-foreground text-background text-xs font-mono font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 mr-2" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-panel hover:bg-panel-hover text-foreground border border-border hover:border-border-highlight text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-2" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Compact Engineering Résumé Asset Card (Preview Hidden by Default) */}
        <div className="engineering-panel rounded-2xl p-6 sm:p-8 border border-border max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-border">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-panel border border-border text-accent shrink-0 mt-0.5">
                <FileText className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                    Ravipati_Chinna_Rangaswamy_Reddy_Resume.pdf
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Verified
                  </span>
                </div>

                <p className="text-xs font-mono text-foreground-subtle">
                  Woxsen University &bull; B.E. Computer Science (CGPA: 7.8/10) &bull; React &bull; Node.js &bull; Python &bull; Firebase
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-panel hover:bg-panel-hover border border-border hover:border-border-highlight text-xs font-mono text-foreground transition-colors cursor-pointer"
                aria-expanded={showPreview}
              >
                <span>{showPreview ? "Hide Preview" : "Expand Preview"}</span>
                {showPreview ? (
                  <ChevronUp className="w-3.5 h-3.5 ml-1.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 ml-1.5" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Credential Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-center">
            <div className="p-3 rounded-xl bg-panel border border-border/80">
              <span className="block text-[10px] font-mono text-foreground-subtle uppercase">Degree</span>
              <span className="block text-xs font-mono font-bold text-foreground mt-0.5">B.E. CSE (Woxsen)</span>
            </div>
            <div className="p-3 rounded-xl bg-panel border border-border/80">
              <span className="block text-[10px] font-mono text-foreground-subtle uppercase">Academic Score</span>
              <span className="block text-xs font-mono font-bold text-accent mt-0.5">CGPA 7.8 / 10</span>
            </div>
            <div className="p-3 rounded-xl bg-panel border border-border/80">
              <span className="block text-[10px] font-mono text-foreground-subtle uppercase">Production Work</span>
              <span className="block text-xs font-mono font-bold text-foreground mt-0.5">3 Live Systems</span>
            </div>
            <div className="p-3 rounded-xl bg-panel border border-border/80">
              <span className="block text-[10px] font-mono text-foreground-subtle uppercase">Certifications</span>
              <span className="block text-xs font-mono font-bold text-foreground mt-0.5">OpenAI, IBM, Cisco</span>
            </div>
          </div>

          {/* Collapsible Document Content (Hidden by default) */}
          <AnimatePresence>
            {showPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden pt-8 mt-6 border-t border-border"
              >
                {/* Header */}
                <div className="text-center pb-6 border-b border-border mb-6 space-y-1.5">
                  <h4 className="text-xl font-bold font-sans text-foreground">
                    {siteConfig.name}
                  </h4>
                  <div className="text-xs font-mono text-foreground-subtle">
                    {siteConfig.location} &bull; {siteConfig.phone} &bull; {siteConfig.email}
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mb-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-1.5 border-b border-border mb-2">
                    Professional Summary
                  </h5>
                  <p className="text-xs text-foreground-muted leading-relaxed font-sans">
                    Computer Science undergraduate at Woxsen University with hands-on experience building responsive and scalable web applications using JavaScript, React.js, HTML5, CSS3, Node.js, Firebase, and REST APIs. Experienced in developing reusable React components, responsive user interfaces, role-based experiences, API integrations, authentication workflows, and performance-focused frontend applications. Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, DBMS, and Software Engineering, with a focus on building maintainable, user-friendly web experiences.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mb-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-1.5 border-b border-border mb-2">
                    Technical Skills
                  </h5>
                  <div className="space-y-1.5 text-xs font-mono text-foreground-muted">
                    <div><span className="font-bold text-foreground">Languages:</span> JavaScript, Python, Java, SQL</div>
                    <div><span className="font-bold text-foreground">Frontend:</span> React.js, HTML5, CSS3, React Hooks, React Router, Vite, Tailwind CSS, Responsive Web Design</div>
                    <div><span className="font-bold text-foreground">Backend &amp; APIs:</span> Node.js, Express.js, REST APIs, WebSockets</div>
                    <div><span className="font-bold text-foreground">Databases:</span> PostgreSQL, MySQL, MongoDB, Firebase Firestore</div>
                    <div><span className="font-bold text-foreground">Tools &amp; Cloud:</span> Git, GitHub, Docker, Firebase, AWS, Postman</div>
                    <div><span className="font-bold text-foreground">Core:</span> Data Structures, Algorithms, OOP, DBMS, Operating Systems, Computer Networks, System Design, Agile</div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-1.5 border-b border-border mb-3">
                    Projects
                  </h5>
                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="font-mono font-bold text-foreground">FarFindARole &ndash; AI-Powered Recruitment Platform (farfindarole.com)</div>
                      <div className="text-[11px] font-mono text-foreground-subtle">React.js, Node.js, Firebase, REST APIs, AI &bull; Jan 2025 &ndash; Jan 2026</div>
                      <p className="text-foreground-muted font-sans mt-1">Connecting students, universities, recruiters, and placement officers through role-based interfaces with integrated AI resume analysis.</p>
                    </div>

                    <div>
                      <div className="font-mono font-bold text-foreground">HealthChain &ndash; AI-Powered Healthcare Platform (healthchain.co.in)</div>
                      <div className="text-[11px] font-mono text-foreground-subtle">React.js, Vite, Tailwind CSS, Node.js, Express.js, REST APIs, WebSockets, Firebase &bull; Aug 2025 &ndash; Present</div>
                      <p className="text-foreground-muted font-sans mt-1">Responsive healthcare platform with role-based dashboards for Patients, Doctors, Clinical Staff, and Administrators with PostgreSQL and Firestore data workflows.</p>
                    </div>

                    <div>
                      <div className="font-mono font-bold text-foreground">Food Ordering Platform (feasto.food)</div>
                      <div className="text-[11px] font-mono text-foreground-subtle">React.js, Node.js, Firebase, Razorpay, REST APIs &bull; Aug 2025 &ndash; Nov 2025</div>
                      <p className="text-foreground-muted font-sans mt-1">Responsive food ordering application with restaurant browsing, product search, cart, and Razorpay checkout workflows.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
