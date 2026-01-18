// src/components/SectionHeader.tsx
"use client";

import React from "react";
import { motion } from "motion/react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  tags,
}) => {
  return (
    <motion.header
      className="section-header"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-header-main">
        <motion.span
          className="badge"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
        >
          {eyebrow}
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      </div>

      {tags && tags.length > 0 && (
        <motion.div
          className="section-tags"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="section-tag-pill"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.4,
                delay: 0.25 + index * 0.06,
                ease: "easeOut",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default SectionHeader;
