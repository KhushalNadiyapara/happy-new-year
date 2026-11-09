"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { makeRadialTexture } from "./textures";

export default function Dust({
  count = 260,
  area = [14, 9, 8] as [number, number, number],
}: {
  count?: number;
  area?: [number, number, number];
}) {
  const ref = useRef<THREE.Points>(null);
  const tex = useMemo(
    () => makeRadialTexture("rgba(255,236,190,1)", "rgba(217,164,65,0)"),
    [],
  );

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * area[0];
      positions[i * 3 + 1] = (Math.random() - 0.5) * area[1];
      positions[i * 3 + 2] = (Math.random() - 0.5) * area[2];
      speeds[i] = 0.08 + Math.random() * 0.22;
    }
    return { positions, speeds };
  }, [count, area]);

  useFrame((state, dt) => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * dt;
      arr[i * 3] += Math.sin(t * 0.4 + i) * 0.0012;
      if (arr[i * 3 + 1] > area[1] / 2) arr[i * 3 + 1] = -area[1] / 2;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        map={tex}
        color="#E8C27A"
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
