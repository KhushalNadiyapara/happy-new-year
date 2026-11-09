import * as THREE from "three";

export function makeRadialTexture(
  inner = "rgba(255,214,130,0.9)",
  outer = "rgba(255,150,40,0)",
) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, inner);
  grad.addColorStop(0.35, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export function makeFlameTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createLinearGradient(0, 128, 0, 0);
  grad.addColorStop(0, "rgba(255,250,220,0.95)");
  grad.addColorStop(0.25, "rgba(255,200,80,0.9)");
  grad.addColorStop(0.6, "rgba(220,120,30,0.55)");
  grad.addColorStop(1, "rgba(120,40,10,0)");
  g.fillStyle = grad;
  g.beginPath();
  g.moveTo(32, 124);
  g.bezierCurveTo(6, 92, 14, 48, 32, 6);
  g.bezierCurveTo(50, 48, 58, 92, 32, 124);
  g.closePath();
  g.fill();
  return new THREE.CanvasTexture(c);
}

export const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;
