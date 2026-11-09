"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import Diya from "./Diya";
import Petals from "./Petals";
import Dust from "./Dust";
import { isMobile } from "./textures";

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.07) * 0.4;
    camera.position.y = 0.5 + Math.sin(t * 0.05) * 0.12;
    camera.lookAt(0, -0.1, 0);
  });
  return null;
}

function Pillar({ x }: { x: number }) {
  return (
    <group position={[x, -2.1, -0.6]}>
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.1, 0.13, 3.8, 12]} />
        <meshStandardMaterial color="#3a2a16" metalness={0.85} roughness={0.42} />
      </mesh>
      <mesh position={[0, 3.9, 0]}>
        <boxGeometry args={[0.55, 0.2, 0.55]} />
        <meshStandardMaterial color="#C99A45" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.5, 0.24, 0.5]} />
        <meshStandardMaterial color="#C99A45" metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 42 }}
        dpr={[1, isMobile ? 1.5 : 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.18} />
        <hemisphereLight args={["#F5E6C8", "#24180F", 0.4]} />
        <directionalLight position={[4, 6, 3]} intensity={0.5} color="#F5E6C8" />
        <Environment resolution={64} frames={1}>
          <mesh scale={80}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="#241505" side={THREE.BackSide} />
          </mesh>
          <mesh position={[0, 6, 0]}>
            <sphereGeometry args={[3, 16, 16]} />
            <meshBasicMaterial color="#D9A441" />
          </mesh>
          <mesh position={[-6, 2, -4]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshBasicMaterial color="#7B251F" />
          </mesh>
        </Environment>
        <CameraRig />
        <Diya position={[0, -2.15, 0.4]} scale={1.0} />
        <Pillar x={-3.4} />
        <Pillar x={3.4} />
        <mesh position={[0, 2.1, -0.6]}>
          <boxGeometry args={[7.6, 0.35, 0.4]} />
          <meshStandardMaterial color="#3a2a16" metalness={0.85} roughness={0.42} />
        </mesh>
        <Petals count={isMobile ? 45 : 110} />
        <Dust count={isMobile ? 100 : 260} />
      </Canvas>
    </div>
  );
}
