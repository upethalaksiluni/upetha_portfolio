import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "REST APIs", "Authentication"],
  },
  {
    title: "Mobile",
    items: ["Android (Java / Kotlin)", "React Native", "Flutter basics"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB basics", "Redis basics"],
  },
  {
    title: "DevOps and Tools",
    items: ["Git and GitLab", "CI/CD basics", "Docker basics", "Postman", "VS Code"],
  },
  {
    title: "Cloud and AI",
    items: ["AWS Cloud Foundations", "LLM basics", "Prompt engineering", "LangChain basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section fade-in-up">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        A practical mix of frontend, backend, mobile, database, DevOps and AI
        skills used in real projects.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="card skill-card">
            <h3 className="skill-title">{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-pill">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
