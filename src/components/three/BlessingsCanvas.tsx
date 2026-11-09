"use client";

import type { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import Mandala from "./Mandala";
import Dust from "./Dust";
import { isMobile } from "./textures";

function SlowSpin({ children }: { children: ReactNode }) {
  return <group rotation={[0, 0, 0.1]}>{children}</group>;
}

export default function BlessingsCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, isMobile ? 1.4 : 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 0, 3.5]} intensity={2.2} color="#D9A441" />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#F5E6C8" />
      <Environment resolution={64} frames={1}>
        <mesh scale={80}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#241505" side={THREE.BackSide} />
        </mesh>
        <mesh position={[0, 5, 0]}>
          <sphereGeometry args={[3, 16, 16]} />
          <meshBasicMaterial color="#D9A441" />
        </mesh>
      </Environment>
      <SlowSpin>
        <Mandala />
      </SlowSpin>
      <Dust count={isMobile ? 70 : 160} area={[10, 8, 5]} />
    </Canvas>
  );
}
