"use client";

import React, { useEffect, useState } from "react";

type Pos = { x: number; y: number };

const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    />
  );
};

export default CursorGlow;
