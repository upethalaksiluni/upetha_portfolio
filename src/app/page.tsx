"use client";

import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import LoadingScreen from "../components/LoadingScreen";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // smooth fake progress
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(100, current + 4);
      setProgress(current);
      if (current >= 100) clearInterval(interval);
    }, 120);

    // hide loader after ~2.6s
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (showLoader) {
    // full-screen boot screen (nav + footer are behind it)
    return <LoadingScreen progress={progress} />;
  }

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
