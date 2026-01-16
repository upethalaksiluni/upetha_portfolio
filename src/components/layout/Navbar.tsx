"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-title">Upetha Laksiluni</span>
          <span className="navbar-subtitle">Full-Stack Developer and CTO</span>
        </div>

        <nav className="nav-links">
          <a href="#hero" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a
            href="https://github.com/upethalaksiluni"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
