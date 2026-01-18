import type { Metadata } from "next";
import React from "react";

import "./globals.css";
import "../styles/variables.css";
import "../styles/layout.css";
import "../styles/animations.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CursorGlow from "../components/layout/CursorGlow"; // 🔹 add this

export const metadata: Metadata = {
  title: "Upetha Laksiluni - Full-Stack Developer & CTO",
  description:
    "Full-Stack Developer & CTO building scalable web, mobile, cloud and AI solutions. Portfolio of projects, experience and services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-shell">
        {/* cursor layer – behind main content */}
        <div className="cursor-layer">
          <CursorGlow />
        </div>

        <div className="main-root">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
