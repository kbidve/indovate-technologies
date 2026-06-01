"use client";

import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import type { Group, InstancedMesh } from "three";
import { Color, Object3D, Vector3 } from "three";

type ActiveSceneProps = {
  isActive?: boolean;
};

const nodeCoordinates: Array<[number, number, number]> = [
  [-2.4, 1.2, 0.2],
  [-1.35, 1.85, -0.55],
  [-0.2, 1.35, 0.65],
  [1.15, 1.75, -0.25],
  [2.35, 1.05, 0.35],
  [-2.15, -0.1, -0.45],
  [-0.95, 0.15, 0.35],
  [0.25, -0.05, -0.15],
  [1.45, 0.2, 0.5],
  [2.5, -0.35, -0.35],
  [-1.85, -1.35, 0.25],
  [-0.55, -1.55, -0.5],
  [0.75, -1.3, 0.4],
  [2.0, -1.55, -0.1],
];

const connections: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 9],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [5, 10],
  [6, 11],
  [7, 12],
  [8, 13],
  [10, 11],
  [11, 12],
  [12, 13],
  [1, 7],
  [3, 7],
  [6, 12],
  [8, 12],
];

function CoreOrb({ isActive }: ActiveSceneProps) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!isActive || !ref.current) return;

    const elapsed = state.clock.getElapsedTime();
    ref.current.rotation.y = -elapsed * 0.12;
    ref.current.rotation.z = elapsed * 0.05;
  });

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.58}
          metalness={0.45}
          roughness={0.28}
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh rotation={[0.7, 0.2, 0.35]}>
        <torusGeometry args={[1.05, 0.01, 8, 56]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.52} />
      </mesh>
      <mesh rotation={[1.35, -0.45, -0.2]}>
        <torusGeometry args={[1.35, 0.008, 8, 56]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[-0.4, 1.1, 0.15]}>
        <torusGeometry args={[1.66, 0.007, 8, 48]} />
        <meshBasicMaterial color="#fb923c" transparent opacity={0.24} />
      </mesh>
    </group>
  );
}

function NeuralConnections({ points }: { points: Vector3[] }) {
  const linePositions = useMemo(() => {
    const positions: number[] = [];

    connections.forEach(([from, to]) => {
      const start = points[from];
      const end = points[to];
      positions.push(start.x, start.y, start.z, end.x, end.y, end.z);
    });

    return new Float32Array(positions);
  }, [points]);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#38bdf8" transparent opacity={0.24} />
    </lineSegments>
  );
}

function NeuralNodes({ points }: { points: Vector3[] }) {
  const meshRef = useRef<InstancedMesh>(null);
  const glowRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const color = useMemo(() => new Color(), []);

  useLayoutEffect(() => {
    if (!meshRef.current || !glowRef.current) return;

    points.forEach((point, index) => {
      const size = index % 4 === 0 ? 1.18 : 0.88;

      dummy.position.copy(point);
      dummy.scale.setScalar(size);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(index, dummy.matrix);
      glowRef.current?.setMatrixAt(index, dummy.matrix);

      const nodeColor = index % 3 === 0 ? "#22d3ee" : index % 3 === 1 ? "#8b5cf6" : "#f38c17";
      meshRef.current?.setColorAt(index, color.set(nodeColor));
      glowRef.current?.setColorAt(index, color.set(nodeColor));
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    glowRef.current.instanceMatrix.needsUpdate = true;

    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    if (glowRef.current.instanceColor) glowRef.current.instanceColor.needsUpdate = true;
  }, [color, dummy, points]);

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, points.length]}>
        <sphereGeometry args={[0.072, 10, 10]} />
        <meshStandardMaterial emissive="#0e7490" emissiveIntensity={0.68} roughness={0.35} metalness={0.28} />
      </instancedMesh>

      <instancedMesh ref={glowRef} args={[undefined, undefined, points.length]}>
        <sphereGeometry args={[0.14, 8, 8]} />
        <meshBasicMaterial transparent opacity={0.065} />
      </instancedMesh>
    </>
  );
}

export default function NeuralField({ isActive = true }: ActiveSceneProps) {
  const points = useMemo(() => nodeCoordinates.map((point) => new Vector3(...point)), []);
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!isActive || !groupRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(elapsed * 0.24) * 0.045;
  });

  return (
    <group ref={groupRef} scale={1.12}>
      <CoreOrb isActive={isActive} />
      <NeuralConnections points={points} />
      <NeuralNodes points={points} />
    </group>
  );
}
