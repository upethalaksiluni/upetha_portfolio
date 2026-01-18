import React from "react";
import SectionHeader from "./SectionHeader";



export default function ContactSection() {
  return (
    <section id="contact" className="section fade-in-up">
      <SectionHeader
        eyebrow="Connect"
        title="Contact"
        subtitle="Open to remote work, freelance projects and collaborations. Feel free to say hello."
        tags={["Colombo", "Remote Available", "Let’s Talk"]}
      />

      <div className="contact-grid">
        <div className="card contact-main">
          <h3>Contact Details</h3>
          <ul className="contact-list">
            <li>
              <strong>Location:</strong> Colombo, Sri Lanka
            </li>
            <li>
              <strong>Mobile:</strong>{" "}
              <a href="tel:+94707458315">+94 70 745 8315</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:upethalaksiluni@gmail.com">
                upethalaksiluni@gmail.com
              </a>
            </li>
          </ul>
          <p style={{ marginTop: "0.75rem", fontSize: "0.85rem" }}>
            Prefer email or LinkedIn for project enquiries.
          </p>
        </div>

        <div className="card contact-main">
          <h3>Social Links</h3>
          <ul className="contact-list">
            <li>
              <a
                href="https://www.linkedin.com/in/upetha-laksiluni-b832a1397"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/upethalaksiluni"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>Instagram: @upetha_laksiluni</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
