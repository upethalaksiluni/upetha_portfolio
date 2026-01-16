// src/app/page.tsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <ExperienceTimeline />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
