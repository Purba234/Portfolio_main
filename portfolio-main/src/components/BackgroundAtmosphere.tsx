import { useEffect, useRef } from "react";
import * as THREE from "three";

const particles = [
  { left: "6%", top: "12%", size: 6, duration: 19, delay: 0.2 },
  { left: "14%", top: "78%", size: 8, duration: 22, delay: 0.8 },
  { left: "21%", top: "40%", size: 10, duration: 24, delay: 1.1 },
  { left: "29%", top: "18%", size: 7, duration: 26, delay: 0.1 },
  { left: "35%", top: "65%", size: 9, duration: 21, delay: 1.7 },
  { left: "42%", top: "33%", size: 12, duration: 28, delay: 0.4 },
  { left: "51%", top: "82%", size: 8, duration: 20, delay: 1.9 },
  { left: "57%", top: "10%", size: 11, duration: 27, delay: 0.9 },
  { left: "64%", top: "48%", size: 7, duration: 18, delay: 0.5 },
  { left: "71%", top: "26%", size: 9, duration: 25, delay: 2.1 },
  { left: "79%", top: "72%", size: 8, duration: 23, delay: 1.5 },
  { left: "86%", top: "37%", size: 10, duration: 20, delay: 0.3 },
  { left: "92%", top: "58%", size: 6, duration: 22, delay: 1.4 },
];

export default function BackgroundAtmosphere() {
  const dotsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = dotsRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 300);
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearAlpha(0);
    renderer.domElement.className = "three-dots-layer";
    mount.appendChild(renderer.domElement);

    const cols = 84;
    const rows = 56;
    const gap = 1.6;
    const positions = new Float32Array(cols * rows * 3);
    const base = new Float32Array(cols * rows * 3);

    let p = 0;
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const px = (x - cols / 2) * gap;
        const py = (y - rows / 2) * gap;

        positions[p] = px;
        base[p] = px;
        positions[p + 1] = py;
        base[p + 1] = py;
        positions[p + 2] = 0;
        base[p + 2] = 0;
        p += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const rootStyles = getComputedStyle(document.documentElement);
    const accent = rootStyles.getPropertyValue("--color-accent-2").trim() || "#4cc9f0";

    const material = new THREE.PointsMaterial({
      color: new THREE.Color(accent),
      size: 0.12,
      transparent: true,
      opacity: 0.22,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -0.26;
    scene.add(points);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const positionAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let i = 0; i < cols * rows; i += 1) {
        const idx = i * 3;
        const x = base[idx];
        const y = base[idx + 1];
        positionAttr.array[idx + 2] =
          Math.sin(x * 0.22 + elapsed * 0.8) * 0.65 +
          Math.cos(y * 0.23 + elapsed * 0.63) * 0.55;
      }

      positionAttr.needsUpdate = true;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    animate();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(animationFrame);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 fancy-gradient" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={`${particle.left}-${index}`}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      <div ref={dotsRef} className="pointer-events-none fixed inset-0 -z-[9]" />
    </>
  );
}
