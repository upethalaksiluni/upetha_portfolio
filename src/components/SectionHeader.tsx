// src/components/SectionHeader.tsx
"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const tagsContainer: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18,
      duration: 0.45,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const tagVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={headerVariants}
    >
      <div className="section-header-main">
        <motion.span className="badge" variants={tagVariant}>
          {eyebrow}
        </motion.span>

        <motion.h2 className="section-title" variants={tagVariant}>
          {title}
        </motion.h2>

        <motion.p className="section-subtitle" variants={tagVariant}>
          {subtitle}
        </motion.p>
      </div>

      {tags && tags.length > 0 && (
        <motion.div
          className="section-tags"
          variants={tagsContainer}
          aria-hidden="true"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag}
              className="section-tag-pill"
              variants={tagVariant}
              whileHover={{
                y: -2,
                scale: 1.03,
                boxShadow:
                  "0 0 0 1px rgba(129,140,248,0.6), 0 18px 35px rgba(15,23,42,0.95)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
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
