"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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

/* 🔒 lock scroll while loader visible */
function useLockBodyScroll() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
}

function LoaderCore({ progress }: { progress: number }) {
  const t = Math.min(1, Math.max(0, progress / 100));
  const rotationY = t * Math.PI * 2;
  const rotationX = 0.6 + t * 0.8;
  const scale = 0.9 + t * 0.3;

  return (
    <group rotation={[rotationX, rotationY, 0]} scale={scale}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.7}
          roughness={0.25}
          emissive="#4f46e5"
          emissiveIntensity={0.5 + t * 0.7}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.0, 0.12, 20, 120]} />
        <meshStandardMaterial
          color="#22c55e"
          metalness={0.6}
          roughness={0.18}
          emissive="#22c55e"
          emissiveIntensity={0.3 + t * 0.4}
        />
      </mesh>

      <mesh position={[1.4, 0.9, 0.8]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#eab308"
          metalness={0.8}
          roughness={0.15}
          emissive="#facc15"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

function LoaderScene({ progress }: { progress: number }) {
  return (
    <Canvas
      className="boot-3d-canvas"
      camera={{ position: [0, 0, 6], fov: 40 }}
      shadows
    >
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.1}
        castShadow
        color="#93c5fd"
      />
      <pointLight position={[-3, -2, -3]} intensity={0.6} color="#22c55e" />
      <Suspense fallback={null}>
        <LoaderCore progress={progress} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.9}
      />
    </Canvas>
  );
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  useLockBodyScroll(); // 🔒 apply scroll lock

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

          <div className="boot-3d-wrapper">
            <LoaderScene progress={progress} />
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
