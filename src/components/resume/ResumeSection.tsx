"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Download, ExternalLink, Phone, Mail, MapPin, Award, CheckCircle2, BookOpen } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-panel/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
              07 &mdash; Official Resume
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-foreground">
              Curriculum Vitae
            </h2>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-sans max-w-xl">
              Verified resume detailing engineering education at Woxsen University, technical skill categories, production projects, and industry certifications.
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
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Authentic On-Page Resume Card (Mirroring the Official PDF) */}
        <div className="engineering-panel rounded-2xl p-6 sm:p-10 border border-border max-w-4xl mx-auto shadow-sm">
          {/* Header */}
          <div className="text-center pb-6 border-b border-border mb-8 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-foreground tracking-tight">
              {siteConfig.name}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-foreground-muted">
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-accent" />
                {siteConfig.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1 text-accent" />
                {siteConfig.phone}
              </span>
              <span>&bull;</span>
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1 text-accent" />
                {siteConfig.email}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xs font-mono text-accent pt-1">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
              <span>|</span>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-2 border-b border-border mb-3">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-sans text-justify">
              Computer Science undergraduate at Woxsen University with hands-on experience building responsive and scalable web applications using JavaScript, React.js, HTML5, CSS3, Node.js, Firebase, and REST APIs. Experienced in developing reusable React components, responsive user interfaces, role-based experiences, API integrations, authentication workflows, and performance-focused frontend applications. Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, DBMS, and Software Engineering, with a focus on building maintainable, user-friendly web experiences.
            </p>
          </div>

          {/* Section: Education */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-2 border-b border-border mb-3 flex items-center justify-between">
              <span>Education</span>
              <span className="text-[11px] text-accent font-semibold">
                CGPA: {siteConfig.education.cgpa}
              </span>
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono mb-1">
              <span className="font-bold text-foreground">
                {siteConfig.education.institution}
              </span>
              <span className="text-foreground-subtle">{siteConfig.education.period}</span>
            </div>
            <div className="text-xs font-mono text-accent font-semibold mb-2">
              {siteConfig.education.degree}
            </div>
            <p className="text-xs text-foreground-muted font-sans leading-relaxed">
              <span className="font-semibold text-foreground">Relevant Coursework:</span>{" "}
              {siteConfig.education.coursework.join(", ")}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-2 border-b border-border mb-3">
              Technical Skills
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <div>
                <span className="font-bold text-foreground">Languages:</span>{" "}
                <span className="text-foreground-muted">JavaScript, Python, Java, SQL</span>
              </div>
              <div>
                <span className="font-bold text-foreground">Frontend:</span>{" "}
                <span className="text-foreground-muted">
                  React.js, HTML5, CSS3, React Hooks, React Router, Vite, Tailwind CSS, Responsive Web Design
                </span>
              </div>
              <div>
                <span className="font-bold text-foreground">Backend &amp; APIs:</span>{" "}
                <span className="text-foreground-muted">Node.js, Express.js, REST APIs, WebSockets</span>
              </div>
              <div>
                <span className="font-bold text-foreground">Databases:</span>{" "}
                <span className="text-foreground-muted">PostgreSQL, MySQL, MongoDB, Firebase Firestore</span>
              </div>
              <div>
                <span className="font-bold text-foreground">Tools &amp; Cloud:</span>{" "}
                <span className="text-foreground-muted">Git, GitHub, Docker, Firebase, AWS, Postman</span>
              </div>
              <div>
                <span className="font-bold text-foreground">Core:</span>{" "}
                <span className="text-foreground-muted">
                  Data Structures, Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design, Agile
                </span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-2 border-b border-border mb-4">
              Projects
            </h4>

            <div className="space-y-6">
              {/* Project 1: FarFindARole */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-xs font-mono font-bold text-foreground">
                    <span>FarFindARole &ndash; AI-Powered Recruitment Platform</span>{" "}
                    <a
                      href="https://farfindarole.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline font-normal ml-1"
                    >
                      farfindarole.com
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-foreground-subtle">
                    Jan 2025 &ndash; Jan 2026
                  </span>
                </div>
                <div className="text-[11px] font-mono text-foreground-subtle italic">
                  React.js, Node.js, Firebase, REST APIs, AI
                </div>
                <ul className="space-y-1.5 text-xs text-foreground-muted font-sans list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Developed a responsive React.js platform connecting students, universities, recruiters, and placement officers through role-based interfaces.
                  </li>
                  <li>
                    Built reusable React components, dashboards, authentication workflows, and REST API integrations for maintainable user experiences.
                  </li>
                  <li>
                    Integrated AI-powered resume analysis while optimizing frontend performance using React Hooks and efficient state management.
                  </li>
                </ul>
              </div>

              {/* Project 2: HealthChain */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-xs font-mono font-bold text-foreground">
                    <span>HealthChain &ndash; AI-Powered Healthcare Platform</span>{" "}
                    <a
                      href="https://healthchain.co.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline font-normal ml-1"
                    >
                      healthchain.co.in
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-foreground-subtle">
                    Aug 2025 &ndash; Present
                  </span>
                </div>
                <div className="text-[11px] font-mono text-foreground-subtle italic">
                  React.js, Vite, Tailwind CSS, React Router, Node.js, Express.js, REST APIs, WebSockets, Firebase
                </div>
                <ul className="space-y-1.5 text-xs text-foreground-muted font-sans list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Developed a responsive React.js healthcare platform with role-based dashboards for Patients, Doctors, Clinical Staff, and Administrators.
                  </li>
                  <li>
                    Built reusable React components and modular frontend architecture using React Router and Tailwind CSS, integrating REST APIs and WebSockets for application workflows.
                  </li>
                  <li>
                    Implemented Firebase Authentication with PostgreSQL and Firestore data workflows, along with role-based access controls for secure user experiences.
                  </li>
                </ul>
              </div>

              {/* Project 3: Food Ordering Platform */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-xs font-mono font-bold text-foreground">
                    <span>Food Ordering Platform</span>{" "}
                    <a
                      href="https://feasto.food"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline font-normal ml-1"
                    >
                      feasto.food
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-foreground-subtle">
                    Aug 2025 &ndash; Nov 2025
                  </span>
                </div>
                <div className="text-[11px] font-mono text-foreground-subtle italic">
                  React.js, Node.js, Firebase, Razorpay, REST APIs
                </div>
                <ul className="space-y-1.5 text-xs text-foreground-muted font-sans list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Developed a responsive React.js food ordering application with restaurant browsing, product search, cart, and checkout workflows.
                  </li>
                  <li>
                    Built reusable components and REST API integrations while implementing Firebase Authentication, Firestore, and Razorpay.
                  </li>
                  <li>
                    Optimized responsive layouts and frontend performance using React Hooks and modern development practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold pb-2 border-b border-border mb-3">
              Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {siteConfig.certifications.map((cert) => (
                <div key={cert.title} className="flex items-center space-x-2">
                  <span className="text-accent select-none">&bull;</span>
                  <span className="text-foreground font-medium">{cert.title}</span>
                  <span className="text-foreground-subtle">&ndash; {cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
