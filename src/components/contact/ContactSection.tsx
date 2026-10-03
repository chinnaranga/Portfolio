"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Mail, Calendar, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Machine Learning & AI",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseStatus, setResponseStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const calendarUrl =
    process.env.NEXT_PUBLIC_CALENDAR_URL || "https://cal.com/chinnaranga";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setResponseStatus({
        type: "success",
        message: data.message || "Your inquiry has been received. I will reply shortly.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "Machine Learning & AI",
        message: "",
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Submission failed.";
      setResponseStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectCategories = [
    "Machine Learning & AI",
    "Full-Stack Web System",
    "Healthcare Platform",
    "Consultation / SDE Role",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              08 &mdash; Collaboration &amp; Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Initiate Contact
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              Open for full-time software engineering roles, machine learning contracts, and healthcare technology initiatives.
            </p>
          </div>

          <div className="text-xs font-mono text-foreground-subtle px-3 py-1.5 rounded-lg border border-border bg-panel">
            <span className="text-emerald-400">&bull;</span> Response SLA: &lt; 24h
          </div>
        </div>

        {/* Form and Channels Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Scheduler Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-2">
                Let's engineer a solution together.
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans">
                Whether you are scoping a machine learning feature pipeline, architecting a healthcare dashboard, or looking for an engineer who delivers end-to-end, let's talk.
              </p>
            </div>

            {/* Direct Email Card with Copy Microinteraction */}
            <div className="engineering-panel rounded-xl p-5 border border-border space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-foreground-subtle">
                <span className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>DIRECT INBOX</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-foreground inline-flex items-center space-x-1 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm sm:text-base font-mono font-medium text-foreground hover:text-accent transition-colors block truncate"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Calendar Scheduler True Action */}
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="engineering-panel rounded-xl p-5 border border-border flex items-center justify-between hover:border-border-highlight transition-all group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 rounded-lg bg-panel-hover border border-border text-accent">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-foreground block">
                    Schedule a 15-Minute Sync
                  </span>
                  <span className="text-[11px] font-mono text-foreground-subtle block">
                    Real-time scheduling via Cal.com
                  </span>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-foreground-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Social Channels */}
            <div className="pt-4 border-t border-border flex items-center space-x-3 text-xs font-mono">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-panel border border-border hover:border-border-highlight text-foreground-muted hover:text-foreground inline-flex items-center space-x-2 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub ({siteConfig.socials.githubHandle})</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-panel border border-border hover:border-border-highlight text-foreground-muted hover:text-foreground inline-flex items-center space-x-2 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Production Form */}
          <div className="lg:col-span-7">
            <div className="engineering-panel rounded-2xl p-6 sm:p-8 border border-border">
              {responseStatus.type === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-sans text-foreground">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs text-foreground-muted max-w-md font-sans">
                    {responseStatus.message}
                  </p>
                  <button
                    onClick={() => setResponseStatus({ type: "idle", message: "" })}
                    className="mt-4 px-5 py-2 rounded-lg bg-panel border border-border hover:bg-panel-hover text-xs font-mono text-foreground cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {responseStatus.type === "error" && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{responseStatus.message}</span>
                    </div>
                  )}

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Alex Vance"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-panel text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-panel text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="HealthTech Labs Inc."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-panel text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Category Pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-2">
                      Inquiry Category
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {projectCategories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: cat })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                            formData.projectType === cat
                              ? "bg-foreground text-background font-semibold border-foreground"
                              : "bg-panel text-foreground-muted border-border hover:border-border-highlight hover:text-foreground"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5">
                      Project Scope &amp; Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline system requirements, technical stack expectations, or role timeline..."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-panel text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-background border-t-transparent animate-spin" />
                        <span>Dispatching...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-2" />
                        <span>Send Engineering Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
