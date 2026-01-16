import React from "react";

const projects = [
  {
    name: "The Gallery Cafe - Restaurant Platform",
    situation: "Restaurant needed digital reservations and menu ordering instead of manual processes.",
    task: "Design and build a full restaurant platform with bookings, menu, orders and admin views.",
    action:
      "Designed database, built authentication, admin dashboard, booking management, and customer ordering with a cart.",
    result:
      "Simplified reservations and orders, improved visibility for staff and better experience for customers.",
    stack: "PHP, MySQL, JavaScript, HTML, CSS, Bootstrap",
  },
  {
    name: "Eco Tour - Sustainable Tourism Platform (In progress)",
    situation: "Travelers wanted an easy way to find eco friendly tours and trips.",
    task: "Create a modern web platform where users can explore tours and make bookings.",
    action:
      "Planned data models, designed React and Next.js pages and started building core booking flows.",
    result: "MVP is under development for future public release.",
    stack: "React, Next.js, Node.js, PostgreSQL",
  },
  {
    name: "TechFix - Service and Inventory Application",
    situation: "Computer shops needed better tracking for parts, stock and supplier orders.",
    task: "Build a system to manage inventory, pricing and supplier requests.",
    action:
      "Developed screens for inventory, purchase tracking and supplier details with validation and reporting.",
    result:
      "Helped reduce stock errors and made daily operations more organized.",
    stack: "Full-stack web application (stack can be customized per client).",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section fade-in-up">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Selected work with clear situation, task, action and result, showing how I
        approach real problems.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="card project-card">
            <h3 className="project-title">{project.name}</h3>
            <ul className="project-star">
              <li>
                <strong>Situation:</strong> {project.situation}
              </li>
              <li>
                <strong>Task:</strong> {project.task}
              </li>
              <li>
                <strong>Action:</strong> {project.action}
              </li>
              <li>
                <strong>Result:</strong> {project.result}
              </li>
            </ul>
            <p className="project-stack">
              <strong>Tech Stack:</strong> {project.stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
