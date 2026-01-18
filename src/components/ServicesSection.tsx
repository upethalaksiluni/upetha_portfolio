import React from "react";
import SectionHeader from "./SectionHeader";



const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications with modern front-end and back-end stacks.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating Android and cross-platform apps to support your business or product.",
  },
  {
    title: "UI and UX Design",
    description:
      "Designing clean layouts, flows and components in tools like Figma.",
  },
  {
    title: "Testing and QA Support",
    description:
      "Helping with test planning, manual testing and bug reporting.",
  },
  {
    title: "ICT Tutoring and Mentoring",
    description:
      "Supporting students and beginners with practical learning and guidance.",
  },
  {
    title: "Content and Video Editing",
    description:
      "Preparing visuals and video materials for social media and presentations.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section fade-in-up">
      <SectionHeader
        eyebrow="Services"
        title="What I Offer"
        subtitle="From idea to deployment: modern web apps, APIs, dashboards and integrations tailored to your product."
        tags={["Web Apps", "APIs", "Consulting"]}
      />

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="card service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
