"use client";

import { Canvas } from "@react-three/fiber";
import Fireworks from "./Fireworks";
import Dust from "./Dust";
import { isMobile } from "./textures";

export default function FinaleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 8.5], fov: 45 }}
      dpr={[1, isMobile ? 1.4 : 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.25} />
      <hemisphereLight args={["#F5E6C8", "#24180F", 0.3]} />
      <Fireworks />
      <Dust count={isMobile ? 80 : 200} area={[14, 9, 6]} />
    </Canvas>
  );
}
