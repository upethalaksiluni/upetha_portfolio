// src/components/Hero.tsx
"use client";

import React, { useRef, MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // raw motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // spring for smoothness
  const xSpring = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  // map pointer distance → rotation
  const rotateX = useTransform(ySpring, [-40, 40], [8, -8]);
  const rotateY = useTransform(xSpring, [-40, 40], [-8, 8]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const relativeX = e.clientX - centerX;
    const relativeY = e.clientY - centerY;

    x.set(relativeX / 6);
    y.set(relativeY / 6);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="hero" className="section hero-section fade-in-up">
      <motion.div
        ref={cardRef}
        className="hero-container"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* NEW: split hero into text + photo */}
        <div className="hero-layout">
          {/* LEFT: text/content */}
          <div className="hero-main">
            <div className="hero-badge-wrapper">
              <span className="hero-badge">
                FULL-STACK DEVELOPER AND CTO
              </span>
            </div>

            <h1 className="hero-title">Upetha Laksiluni</h1>

            <p className="hero-subtitle">
              I design and build web, mobile and cloud-based systems with a
              focus on clean architecture, usability and production readiness.
            </p>

            <div className="hero-cta-row">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </div>

            <div className="hero-meta-grid">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Current role:</span>
                <span className="hero-meta-value">
                  CTO at IterDX Global (PVT) Ltd
                </span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Focus:</span>
                <span className="hero-meta-value">
                  Full-stack development, cloud foundations, AI and mobile
                  applications.
                </span>
              </div>
            </div>

            <div className="hero-snapshot-card card">
              <h3 className="hero-snapshot-title">Quick Snapshot</h3>
              <ul className="hero-snapshot-list">
                <li>Based in Colombo, Sri Lanka</li>
                <li>Industry experience as Full-Stack DevOps Intern</li>
                <li>
                  Comfortable with web, mobile, databases and DevOps basics
                </li>
                <li>Enjoy mentoring and sharing knowledge</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: profile photo card */}
          <motion.div
            className="hero-photo-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <div className="hero-photo-glow" />

            <div className="hero-photo-frame">
              <Image
                src="/upetha.png" // put your image in /public
                alt="Upetha Laksiluni profile photo"
                width={260}
                height={260}
                className="hero-photo"
                priority
              />
            </div>

            <div className="hero-photo-meta">
              <span className="hero-photo-name">Upetha Laksiluni</span>
              <span className="hero-photo-role">
                Full-Stack Developer &amp; CTO
              </span>
            </div>

            <div className="hero-photo-tags">
              <span>Web &amp; Mobile</span>
              <span>Cloud &amp; DevOps</span>
              <span>AI Integrations</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
