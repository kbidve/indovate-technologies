"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Points } from "three";
import NeuralField from "./NeuralField";
import FloatingTechNodes from "./FloatingTechNodes";
import SceneLights from "./SceneLights";

type HeroCanvasProps = {
  isActive?: boolean;
};

function CameraRig({ isActive }: HeroCanvasProps) {
  const { camera, pointer } = useThree();

  useFrame((state) => {
    if (!isActive) return;

    const elapsed = state.clock.getElapsedTime();
    camera.position.x += (pointer.x * 0.42 - camera.position.x) * 0.018;
    camera.position.y += (pointer.y * 0.24 - camera.position.y) * 0.018;
    camera.position.z = 8.4 + Math.sin(elapsed * 0.12) * 0.1;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function LightweightStars({ isActive }: HeroCanvasProps) {
  const pointsRef = useRef<Points>(null);

  const positions = useMemo(() => {
    const count = 170;
    const result = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      result[i] = (Math.random() - 0.5) * 26;
      result[i + 1] = (Math.random() - 0.5) * 15;
      result[i + 2] = -Math.random() * 22 - 4;
    }

    return result;
  }, []);

  useFrame((state) => {
    if (!isActive || !pointsRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * 0.006;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#cbd5e1" size={0.018} transparent opacity={0.62} sizeAttenuation />
    </points>
  );
}

function Scene({ isActive }: HeroCanvasProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!isActive || !groupRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.026;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.12) * 0.026;
  });

  return (
    <group ref={groupRef} position={[1.55, 0.05, 0]}>
      <NeuralField isActive={isActive} />
      <FloatingTechNodes isActive={isActive} />
    </group>
  );
}

export default function HeroCanvas({ isActive = true }: HeroCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 8.4], fov: 44, near: 0.1, far: 60 }}
      dpr={[0.8, 1]}
      frameloop={isActive ? "always" : "never"}
      performance={{ min: 0.55 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
      }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#020617", 8, 16]} />
        <SceneLights />
        <LightweightStars isActive={isActive} />
        <Scene isActive={isActive} />
        <CameraRig isActive={isActive} />
      </Suspense>
    </Canvas>
  );
}
