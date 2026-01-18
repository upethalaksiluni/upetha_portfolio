"use client";

import React from "react";

type LoadingScreenProps = {
  progress: number;
};

const steps = [
  "Initializing core modules",
  "Preparing UI shell",
  "Syncing projects data",
  "Warming up animations",
  "Final checks",
];

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  const stepIndex = Math.min(
    steps.length - 1,
    Math.floor((progress / 100) * steps.length)
  );
  const currentStep = steps[stepIndex];

  return (
    <div className="boot-screen">
      <div className="boot-inner">
        <div className="boot-header">
          <div className="boot-logo">
            <span className="boot-logo-icon">UL</span>
            <span className="boot-logo-text">Portfolio System</span>
          </div>
          <div className="boot-status-pill">
            <span className="boot-status-dot" />
            <span>SYSTEM_BOOT</span>
          </div>
        </div>

        <div className="boot-main">
          <div className="boot-title-row">
            <span className="boot-title">UPETHA</span>
            <span className="boot-title-accent">.DEV</span>
          </div>

          <div className="boot-meta-row">
            <div className="boot-meta-item">
              <span className="boot-meta-label">Mode</span>
              <span className="boot-meta-value">Full Stack</span>
            </div>
            <div className="boot-meta-item">
              <span className="boot-meta-label">Profile</span>
              <span className="boot-meta-value">CTO / Engineer</span>
            </div>
            <div className="boot-meta-item">
              <span className="boot-meta-label">Status</span>
              <span className="boot-meta-value">Loading modules</span>
            </div>
          </div>

          <div className="boot-progress-row">
            <div className="boot-progress-track">
              <div
                className="boot-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="boot-progress-percent">
              {Math.min(99, Math.floor(progress))}%
            </span>
          </div>

          <div className="boot-footer-row">
            <div className="boot-step">
              <span className="boot-step-label">Step</span>
              <span className="boot-step-text">{currentStep}</span>
            </div>
            <div className="boot-icons">
              <span className="boot-icon chip" />
              <span className="boot-icon orbit" />
              <span className="boot-icon pulse" />
            </div>
          </div>
        </div>

        <div className="boot-bottom-text">
          LOADING APPLICATION MODULES
          <span className="boot-dots">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}