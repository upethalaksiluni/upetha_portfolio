// src/components/Skills.tsx
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
  SiGithub,
  SiAndroid,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { motion } from "motion/react"

type SkillItem = {
  label: string;
  icon?: React.ReactNode;
  highlight?: boolean;
  color?: string;
};

const skillGroups: { title: string; items: SkillItem[] }[] = [
  {
    title: "Core Frontend",
    items: [
      { label: "React", icon: <SiReact />, highlight: true, color: "#61DAFB" },
      { label: "Next.js", icon: <SiNextdotjs />, highlight: true, color: "#FFFFFF" },
      { label: "Angular", icon: <SiAngular />, color: "#DD0031" },
      { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { label: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { label: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { label: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
      { label: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { label: "Node.js", icon: <SiNodedotjs />, highlight: true, color: "#68A063" },
      { label: "REST APIs" },
      { label: "Authentication & JWT" },
      { label: "MVC & Clean Architecture" },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        label: "Android (Java / Kotlin)",
        icon: <SiAndroid />,
        highlight: true,
        color: "#3DDC84",
      },
      { label: "Flutter (basics)", icon: <SiFlutter />, color: "#02569B" },
      { label: "React Native (basics)" },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "PostgreSQL", icon: <SiPostgresql />, highlight: true, color: "#336791" },
      { label: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { label: "MongoDB (basics)", icon: <SiMongodb />, color: "#47A248" },
      { label: "Redis (basics)" },
    ],
  },
  {
    title: "DevOps & Workflow",
    items: [
      { label: "Git / GitLab", icon: <SiGit />, highlight: true, color: "#F05033" },
      { label: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { label: "CI/CD (basics)" },
      { label: "Docker (basics)", icon: <SiDocker />, color: "#2496ED" },
      { label: "Postman" },
    ],
  },
  {
    title: "Cloud & AI",
    items: [
      {
        label: "AWS Cloud Foundations",
        icon: <SiAmazon />,
        highlight: true,
        color: "#FF9900",
      },
      { label: "LLM & Prompting" },
      { label: "LangChain (basics)" },
      { label: "AI integrations into apps" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section fade-in-up">
       <SectionHeader
        eyebrow="Stack"
        title="Technical Skills"
        subtitle="A practical mix of frontend, backend, mobile, database, DevOps and cloud/AI skills used in real projects and internships."
        tags={["Frontend", "Backend", "Cloud & AI"]}
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="card skill-card">
            <div className="skill-header-row">
              <span className="skill-dot" />
              <h3 className="skill-title">{group.title}</h3>
            </div>

            <div className="skill-marquee-outer">
              <ul className="skill-list skill-list--marquee">
                {[...group.items, ...group.items].map((item, idx) => (
                  <li
                    key={`${item.label}-${idx}`}
                    className={
                      "skill-pill" + (item.highlight ? " skill-pill--highlight" : "")
                    }
                  >
                    {item.icon && (
                      <span
                        className="skill-pill-icon"
                        style={item.color ? { color: item.color } : undefined}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="skill-pill-label">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
