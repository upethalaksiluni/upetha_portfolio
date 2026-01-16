import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section hero-section fade-in-up">
      <div className="hero-grid">
        <div className="hero-main">
          <span className="badge">Full-Stack Developer and CTO</span>

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

          <div className="hero-meta">
            <p>
              <strong>Current role:</strong> CTO at IterDX Global (PVT) Ltd
            </p>
            <p>
              <strong>Focus:</strong> Full-stack development, cloud foundations, AI and mobile
              applications.
            </p>
          </div>
        </div>

        <div className="hero-side card">
          <h2 className="hero-side-title">Quick Snapshot</h2>
          <ul className="hero-facts">
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
