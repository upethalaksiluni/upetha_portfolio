"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>(c) {year} Upetha Laksiluni. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:upethalaksiluni@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/upetha-laksiluni-b832a1397"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/upethalaksiluni"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
