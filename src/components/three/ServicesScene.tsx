import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function OrbitingSphere({ radius, speed, size, color, offset }: {
  radius: number;
  speed: number;
  size: number;
  color: string;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 0.5) * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <MeshDistortMaterial color={color} speed={2} distort={0.3} roughness={0.2} metalness={0.1} transparent opacity={0.7} />
    </mesh>
  );
}

function CentralCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3}>
      <mesh ref={ref}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#e0ecff" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

export default function ServicesScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <CentralCore />
        <OrbitingSphere radius={3} speed={0.5} size={0.2} color="#6ba3d6" offset={0} />
        <OrbitingSphere radius={3} speed={0.5} size={0.15} color="#88b8e0" offset={Math.PI * 0.6} />
        <OrbitingSphere radius={3} speed={0.5} size={0.18} color="#a0c8f0" offset={Math.PI * 1.2} />
        <OrbitingSphere radius={4} speed={0.3} size={0.12} color="#7ab0d8" offset={0.5} />
        <OrbitingSphere radius={4} speed={0.3} size={0.1} color="#90b8e0" offset={Math.PI} />
      </Canvas>
    </div>
  );
}
