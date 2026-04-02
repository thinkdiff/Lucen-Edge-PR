import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, scale, speed, color }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.4;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color={color}
          roughness={0.1}
          transmission={0.95}
        />
      </mesh>
    </Float>
  );
}

function GridPlane() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.3) % 2;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[60, 60, "#c0d0e8", "#dde4f0"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function Particles({ count = 200 }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#94b8db" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#e8f0ff" />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} color="#b8d4ff" />

        <FloatingShape position={[-3, 1, -2]} scale={1.2} speed={1.5} color="#b8d4ff" />
        <FloatingShape position={[3.5, -0.5, -1]} scale={0.8} speed={2} color="#a0c8f0" />
        <FloatingShape position={[0, 2, -3]} scale={1.5} speed={1} color="#d0e0ff" />
        <FloatingShape position={[-2, -1.5, 0]} scale={0.6} speed={2.5} color="#90b8e0" />
        <FloatingShape position={[2, 0.5, 1]} scale={0.9} speed={1.8} color="#c0d8f8" />

        <Particles count={300} />
        <GridPlane />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
