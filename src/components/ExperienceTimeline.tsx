import React from "react";
import SectionHeader from "./SectionHeader";



const experiences = [
  {
    role: "Chief Technology Officer – IterDX Global (PVT) Ltd",
    period: "Oct 2025 – Present · Sri Lanka",
    points: [
      "Lead and guide technology direction and priorities.",
      "Support teams and keep delivery aligned with business goals.",
      "Help choose tools, architecture and patterns that are practical.",
      "Balance innovation with stable daily operations.",
    ],
  },
  {
    role:
      "Software Engineer (Full-Stack DevOps Intern) – Cyber-Intel Cyber Storm Research Academy",
    period: "Dec 2024 – Jan 2026 · Colombo",
    points: [
      "Built and improved internal web tools and automation flows.",
      "Implemented full stack features using React, Next.js, Node.js and Python.",
      "Integrated REST APIs and supported CI/CD and Git-based workflows.",
      "Debugged issues across environments and improved user experience.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section fade-in-up">
      <SectionHeader
        eyebrow="Timeline"
        title="Experience"
        subtitle="Roles that helped me grow as a full-stack engineer, leader and problem solver."
        tags={["CTO", "Internships", "Leadership"]}
      />

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.role} className="timeline-item card">
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-period">{exp.period}</p>
            <ul className="timeline-points">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
