"use client";

export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.34} />
      <directionalLight position={[4, 4, 6]} intensity={0.82} color="#dbeafe" />
      <pointLight position={[-4, 1.8, 3]} intensity={6} color="#22d3ee" distance={7} />
      <pointLight position={[3.5, -2.4, 2.5]} intensity={5} color="#8b5cf6" distance={6.5} />
      <pointLight position={[0, 3.2, -1.5]} intensity={3.2} color="#f38c17" distance={5.5} />
    </>
  );
}
