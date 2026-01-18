import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section hero-section fade-in-up">
      <div className="hero-container">
        <div className="hero-badge-wrapper">
          <span className="hero-badge">FULL-STACK DEVELOPER AND CTO</span>
        </div>

        <h1 className="hero-title">Upetha Laksiluni</h1>

        <p className="hero-subtitle">
          I design and build web, mobile and cloud-based systems with a focus on
          clean architecture, usability and production readiness.
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
            <span className="hero-meta-value">CTO at IterDX Global (PVT) Ltd</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Focus:</span>
            <span className="hero-meta-value">
              Full-stack development, cloud foundations, AI and mobile applications.
            </span>
          </div>
        </div>

        <div className="hero-snapshot-card card">
          <h3 className="hero-snapshot-title">Quick Snapshot</h3>
          <ul className="hero-snapshot-list">
            <li>Based in Colombo, Sri Lanka</li>
            <li>Industry experience as Full-Stack DevOps Intern</li>
            <li>Comfortable with web, mobile, databases and DevOps basics</li>
            <li>Enjoy mentoring and sharing knowledge</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
