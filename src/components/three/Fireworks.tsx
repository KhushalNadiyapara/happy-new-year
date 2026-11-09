"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { makeRadialTexture, isMobile } from "./textures";

const LIFE = 2.8;
const PAUSE = 1.6;

function Burst({
  origin,
  color,
  delay,
  count = 140,
  speed = 2.3,
}: {
  origin: [number, number, number];
  color: string;
  delay: number;
  count?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const tex = useMemo(
    () => makeRadialTexture("rgba(255,245,215,1)", "rgba(255,200,90,0)"),
    [],
  );
  const t0 = useRef<number | null>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = origin[0];
      arr[i * 3 + 1] = origin[1];
      arr[i * 3 + 2] = origin[2];
    }
    return arr;
  }, [count, origin]);

  const velocities = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const s = speed * (0.45 + Math.random() * 0.65);
      arr[i * 3] = Math.sin(phi) * Math.cos(theta) * s;
      arr[i * 3 + 1] = Math.cos(phi) * s;
      arr[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * s * 0.5;
    }
    return arr;
  }, [count, speed]);

  useFrame(({ clock }) => {
    const pts = ref.current;
    if (!pts) return;
    const t = clock.elapsedTime;
    if (t0.current === null) t0.current = t + delay;
    let lt = (t - t0.current) % (LIFE + PAUSE);
    const active = lt >= 0 && lt < LIFE;
    pts.visible = active;
    if (!active) return;
    const geo = pts.geometry;
    const arr = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const damp = Math.max(0, 1 - lt * 0.32);
      arr[i * 3] = origin[0] + velocities[i * 3] * lt * damp;
      arr[i * 3 + 1] =
        origin[1] + velocities[i * 3 + 1] * lt * damp - 0.55 * lt * lt;
      arr[i * 3 + 2] = origin[2] + velocities[i * 3 + 2] * lt * damp;
    }
    geo.attributes.position.needsUpdate = true;
    if (matRef.current) {
      matRef.current.opacity = Math.max(0, 1 - lt / LIFE) * 0.95;
    }
  });

  return (
    <points ref={ref} visible={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        size={0.1}
        map={tex}
        color={color}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

const COLORS = ["#F5E6C8", "#D9A441", "#FFB84D", "#E8894A", "#C99A45", "#FFF3C4"];

export default function Fireworks() {
  const bursts = useMemo(
    () =>
      Array.from({ length: isMobile ? 4 : 6 }, (_, i) => ({
        origin: [
          (Math.random() - 0.5) * 7.5,
          0.6 + Math.random() * 2.4,
          -1.5 - Math.random() * 2,
        ] as [number, number, number],
        color: COLORS[i % COLORS.length],
        delay: i * 1.05,
        count: isMobile ? 90 : 140,
      })),
    [],
  );
  return (
    <>
      {bursts.map((b, i) => (
        <Burst key={i} {...b} />
      ))}
    </>
  );
}
