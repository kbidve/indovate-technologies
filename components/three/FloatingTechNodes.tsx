"use client";

import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import type { Group, InstancedMesh } from "three";
import { Color, Object3D } from "three";

type FloatingTechNodesProps = {
  isActive?: boolean;
};

const techNodes = [
  { label: "Next.js", position: [-3.1, 2.25, 0.35] as [number, number, number] },
  { label: "FastAPI", position: [3.15, 1.65, -0.2] as [number, number, number] },
  { label: "RAG", position: [-3.15, -1.85, -0.15] as [number, number, number] },
  { label: "LangGraph", position: [2.9, -2.05, 0.25] as [number, number, number] },
  { label: "Cloud", position: [0.15, 2.65, -0.3] as [number, number, number] },
  { label: "ERP", position: [0.05, -2.65, 0.25] as [number, number, number] },
];

export default function FloatingTechNodes({ isActive = true }: FloatingTechNodesProps) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const color = useMemo(() => new Color(), []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    techNodes.forEach((item, index) => {
      dummy.position.set(item.position[0], item.position[1], item.position[2]);
      dummy.rotation.set(0.55, 0.25, 0.15);
      dummy.scale.setScalar(index % 2 === 0 ? 1 : 0.84);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(index, dummy.matrix);
      meshRef.current?.setColorAt(index, color.set(index % 2 === 0 ? "#0ea5e9" : "#7c3aed"));
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [color, dummy]);

  useFrame((state) => {
    if (!isActive || !groupRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    groupRef.current.rotation.z = Math.sin(elapsed * 0.09) * 0.014;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, techNodes.length]}>
        <boxGeometry args={[0.26, 0.26, 0.26]} />
        <meshStandardMaterial
          emissive="#0284c7"
          emissiveIntensity={0.42}
          metalness={0.38}
          roughness={0.32}
          transparent
          opacity={0.76}
        />
      </instancedMesh>
    </group>
  );
}
