"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;
      const scrollProgress = (current / totalHeight) * 100;

      setProgress(scrollProgress);

      if (current > 200) setVisible(true);
      else setVisible(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="scroll-circle"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        background: `conic-gradient(#3b82f6 ${progress * 3.6}deg, #334155 0deg)`,
      }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
