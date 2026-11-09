"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { makeFlameTexture, makeRadialTexture } from "./textures";

export default function Diya({
  position = [0, 0, 0] as [number, number, number],
  scale = 1,
}: {
  position?: [number, number, number];
  scale?: number;
}) {
  const flameRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const flameTex = useMemo(makeFlameTexture, []);
  const glowTex = useMemo(makeRadialTexture, []);

  const profile = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      pts.push(
        new THREE.Vector2(
          0.05 + 1.15 * Math.pow(t, 0.65),
          0.55 * Math.pow(t, 1.5),
        ),
      );
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const f = 1 + 0.1 * Math.sin(t * 11.3) + 0.05 * Math.sin(t * 27.7);
    if (flameRef.current) {
      flameRef.current.scale.set(f, 1 + (f - 1) * 1.7, f);
    }
    if (lightRef.current) {
      lightRef.current.intensity =
        2.4 + 0.5 * Math.sin(t * 13.1) + 0.3 * Math.sin(t * 31);
    }
  });

  return (
    <group position={position} scale={scale}>
      <mesh>
        <latheGeometry args={[profile, 48]} />
        <meshStandardMaterial color="#C99A45" metalness={0.85} roughness={0.28} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.48, 0]}>
        <circleGeometry args={[0.95, 32]} />
        <meshStandardMaterial color="#1b1008" metalness={0.3} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.17, 0.03, 8, 48]} />
        <meshStandardMaterial color="#D9A441" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.52, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.14, 8]} />
        <meshStandardMaterial color="#2a1808" roughness={0.9} />
      </mesh>

      <group ref={flameRef} position={[0, 0.56, 0]}>
        {[0, Math.PI / 2].map((r, i) => (
          <mesh key={i} rotation={[0, r, 0]} position={[0, 0.4, 0]}>
            <planeGeometry args={[0.36, 0.82]} />
            <meshBasicMaterial
              map={flameTex}
              transparent
              depthWrite={false}
              blending={THREE.AdditiveBlending}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>

      <sprite position={[0, 0.8, 0]} scale={[2.8, 2.8, 1]}>
        <spriteMaterial
          map={glowTex}
          transparent
          opacity={0.5}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      <pointLight
        ref={lightRef}
        position={[0, 0.95, 0]}
        color="#D9A441"
        intensity={2.4}
        distance={15}
        decay={2}
      />
    </group>
  );
}
