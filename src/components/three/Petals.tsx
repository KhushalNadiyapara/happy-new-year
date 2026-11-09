"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Petals({
  count = 110,
  area = [12, 8, 6] as [number, number, number],
}: {
  count?: number;
  area?: [number, number, number];
}) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colored = useRef(false);

  const data = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * area[0],
        y: Math.random() * area[1] - 4,
        z: (Math.random() - 0.5) * area[2],
        speed: 0.25 + Math.random() * 0.45,
        sway: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 1.2,
        scale: 0.5 + Math.random() * 0.9,
        color: Math.random() > 0.5 ? "#E8891C" : "#D9A441",
      })),
    [count, area],
  );

  useFrame((state, dt) => {
    const m = ref.current;
    if (!m) return;
    if (!colored.current) {
      const c = new THREE.Color();
      data.forEach((d, i) => m.setColorAt(i, c.set(d.color)));
      colored.current = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      d.y -= d.speed * dt;
      if (d.y < -4.2) {
        d.y = 4.2;
        d.x = (Math.random() - 0.5) * area[0];
      }
      dummy.position.set(
        d.x + Math.sin(t * d.sway + d.phase) * 0.5,
        d.y,
        d.z + Math.cos(t * d.sway * 0.8 + d.phase) * 0.3,
      );
      dummy.rotation.set(
        t * d.spin * 0.6 + d.phase,
        d.rot + t * d.spin,
        Math.sin(t + d.phase) * 0.5,
      );
      dummy.scale.setScalar(d.scale);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.075, 6]} />
      <meshStandardMaterial side={THREE.DoubleSide} roughness={0.55} metalness={0.15} />
    </instancedMesh>
  );
}
