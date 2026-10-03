"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function EducationSection() {
  const { education } = siteConfig;

  return (
    <section className="py-16 relative overflow-hidden bg-panel/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-6 border-b border-border mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1.5">
              Academics
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-foreground">
              Formal Education
            </h3>
          </div>

          <div className="text-xs font-mono text-foreground-subtle px-3 py-1 rounded bg-panel border border-border max-w-fit">
            <span>Engineering Degree</span>
          </div>
        </div>

        {/* University Main Spec Card */}
        <div className="engineering-panel rounded-2xl p-6 sm:p-8 border border-border mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border mb-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-panel border border-border text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold font-sans text-foreground">
                  {education.institution}
                </h4>
                <div className="text-sm font-semibold text-accent font-mono mt-0.5">
                  {education.degree}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground-subtle">
              <span className="flex items-center space-x-1.5 px-3 py-1 rounded bg-panel border border-border">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>{education.period}</span>
              </span>
              <span className="flex items-center space-x-1.5 px-3 py-1 rounded bg-panel border border-border">
                <MapPin className="w-3.5 h-3.5" />
                <span>{education.location}</span>
              </span>
            </div>
          </div>

          <p className="text-sm text-foreground-muted leading-relaxed font-sans max-w-4xl mb-6">
            {education.description}
          </p>

          {/* Key Coursework Matrix */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-3 flex items-center space-x-2">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Core Coursework &amp; Academic Focus Areas:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.coursework.map((course) => (
                <div
                  key={course.name}
                  className="p-3.5 rounded-xl bg-panel border border-border"
                >
                  <div className="text-xs font-mono font-semibold text-foreground mb-1">
                    {course.name}
                  </div>
                  <div className="text-[11px] font-sans text-foreground-subtle leading-relaxed">
                    {course.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
