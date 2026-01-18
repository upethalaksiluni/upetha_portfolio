import React from "react";
import SectionHeader from "./SectionHeader";


export default function About() {
  return (
    
    <section id="about" className="section fade-in-up">
       <SectionHeader
        eyebrow="About"
        title="Who I am"
        subtitle="Full-stack developer focused on building clean, maintainable web and mobile solutions with real-world impact."
        tags={["Full-stack", "Problem Solver", "Team Player"]}
      />
      
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        I am a Software Engineering student and Full-Stack Developer with hands-on
        experience delivering real projects for clients and organizations.
      </p>

      <div className="about-grid">
        <div className="card about-main">
          <p>
            I like working across the full stack. I enjoy designing the database,
            building APIs, creating front end interfaces and finally deploying the
            application so that real users can use it.
          </p>
          <p>
            As CTO at IterDX Global (PVT) Ltd, I support both technology decisions
            and implementation. I work closely with team members and stakeholders
            to keep solutions practical, scalable and user friendly.
          </p>
        </div>

        <div className="card about-side">
          <h3 className="about-title">What I bring</h3>
          <ul className="about-list">
            <li>Product mindset from idea to deployment</li>
            <li>Experience working in small teams and Agile style workflows</li>
            <li>Attention to code quality and maintainability</li>
            <li>Ability to mentor and clearly explain technical topics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
