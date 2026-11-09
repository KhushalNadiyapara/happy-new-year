"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = {
  color: "#C99A45",
  metalness: 0.9,
  roughness: 0.3,
  emissive: "#7a5a20",
  emissiveIntensity: 0.3,
};

function GoldMaterial() {
  return <meshStandardMaterial {...GOLD} />;
}

export default function Mandala() {
  const g1 = useRef<THREE.Group>(null);
  const g2 = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (g1.current) g1.current.rotation.z += dt * 0.12;
    if (g2.current) g2.current.rotation.z -= dt * 0.18;
  });

  const rings = [0.55, 0.95, 1.4];

  return (
    <group rotation={[0.12, 0, 0]}>
      <group ref={g1}>
        {rings.map((r) => (
          <mesh key={r}>
            <torusGeometry args={[r, 0.012, 8, 96]} />
            <GoldMaterial />
          </mesh>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <mesh key={i} rotation={[0, 0, (i / 12) * Math.PI]}>
            <cylinderGeometry args={[0.008, 0.008, 2.8, 6]} />
            <GoldMaterial />
          </mesh>
        ))}
      </group>
      <group ref={g2}>
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.4, Math.sin(a) * 1.4, 0]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <GoldMaterial />
            </mesh>
          );
        })}
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
          return (
            <mesh
              key={`p${i}`}
              position={[Math.cos(a) * 1.16, Math.sin(a) * 1.16, 0]}
              rotation={[0, 0, a + Math.PI / 2]}
            >
              <circleGeometry args={[0.13, 8]} />
              <meshStandardMaterial
                color="#D9A441"
                metalness={0.85}
                roughness={0.35}
                side={THREE.DoubleSide}
                emissive="#5a4014"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>
      <mesh>
        <torusGeometry args={[0.18, 0.03, 10, 48]} />
        <GoldMaterial />
      </mesh>
    </group>
  );
}
