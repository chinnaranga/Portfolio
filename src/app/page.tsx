import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import StatusBar from "@/components/hero/StatusBar";
import SelectedWork from "@/components/projects/SelectedWork";
import EngineeringSystems from "@/components/systems/EngineeringSystems";
import SystemMap from "@/components/systems/SystemMap";
import CurrentlyBuilding from "@/components/rd/CurrentlyBuilding";
import ExperienceSection from "@/components/experience/ExperienceSection";
import EducationSection from "@/components/experience/EducationSection";
import AboutSection from "@/components/about/AboutSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-background">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Interactive Architecture Visualizer */}
        <Hero />

        {/* 2. Technical Telemetry Status Bar */}
        <StatusBar />

        {/* 3. Selected Work & Production Case Studies */}
        <SelectedWork />

        {/* 4. Structured Engineering Systems & Capabilities */}
        <EngineeringSystems />

        {/* 5. Signature Visual Element: Interactive System Map */}
        <SystemMap />

        {/* 6. Active R&D / Currently Building */}
        <CurrentlyBuilding />

        {/* 7. Engineering Journey & Track Record */}
        <ExperienceSection />

        {/* 8. Formal Education & Coursework */}
        <EducationSection />

        {/* 9. Engineering Journey & Philosophy Narrative */}
        <AboutSection />

        {/* 10. Résumé Specifications & Real PDF Download */}
        <ResumeSection />

        {/* 11. Production Contact Pipeline & Calendar Scheduler */}
        <ContactSection />
      </main>

      {/* Technical Minimalist Footer */}
      <Footer />
    </div>
  );
}
