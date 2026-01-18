import React from "react";
import SectionHeader from "./SectionHeader";


type Project = {
  title: string;
  tagline: string;
  description: string;
  situation: string;
  action: string;
  result: string;
  techStack: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    title: "The Gallery Cafe – Restaurant Platform",
    tagline: "End-to-end digital experience for reservations and menu ordering.",
    description:
      "Full web platform where guests can browse the menu, reserve tables and place pre-orders while staff manage everything from one dashboard.",
    situation:
      "Restaurant needed to move away from manual phone calls and paper-based bookings.",
    action:
      "Designed schema, built auth, reservation flows, admin views and customer ordering with a cart and payment hand-off.",
    result:
      "Reduced booking mistakes, better visibility for staff and a smoother experience for customers.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    tags: ["Production", "Reservations", "Admin panel"],
  },
  {
    title: "Eco Tour – Sustainable Tourism Platform (In progress)",
    tagline: "Modern booking website focused on eco-friendly trips.",
    description:
      "MVP web app where users can explore tours, check availability and request bookings with clear sustainability information.",
    situation:
      "Travellers wanted a simple way to discover eco-friendly travel options.",
    action:
      "Planned domain models, designed Next.js pages, started implementing tour listing, filters and booking requests.",
    result:
      "Initial MVP in progress with a clear path to add payments and admin tools.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    tags: ["MVP", "Next.js", "Booking flows"],
  },
  {
    title: "TechFix – Service & Inventory Application",
    tagline: "Inventory and service tracking for computer repair shops.",
    description:
      "Internal tool to manage devices, parts, pricing and supplier orders so technicians and admins stay aligned.",
    situation:
      "Shops were using spreadsheets and memory to track parts and service history.",
    action:
      "Designed screens for inventory, purchase tracking, supplier records and basic reporting with validations.",
    result:
      "Better visibility into stock, fewer missing parts and more organized daily work.",
    techStack: ["Full-stack web app", "REST APIs", "Relational DB"],
    tags: ["Inventory", "B2B", "Process automation"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section fade-in-up">
      <SectionHeader
        eyebrow="Work"
        title="Selected Projects"
        subtitle="A snapshot of real products, client work and experiments that show how I think and build."
        tags={["Real Clients", "Team Work", "Side Projects"]}
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <div className="project-card-grid">
              {/* Image / visual side – gradient placeholder (you can swap to real image later) */}
              <div className="project-media">
                <div className="project-media-inner">
                  <span className="project-media-badge">Case Study</span>
                  <h3 className="project-media-title">{project.title}</h3>
                  <p className="project-media-tagline">{project.tagline}</p>
                </div>
              </div>

              {/* Text side */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-star">
                  <li>
                    <strong>Situation:</strong> {project.situation}
                  </li>
                  <li>
                    <strong>Action:</strong> {project.action}
                  </li>
                  <li>
                    <strong>Result:</strong> {project.result}
                  </li>
                </ul>

                <p className="project-stack">
                  <strong>Tech stack:</strong> {project.techStack.join(" · ")}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
