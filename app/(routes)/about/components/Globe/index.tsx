"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Html,
  Stars,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const [colorMap, bumpMap, specMap, cloudsMap] = useTexture([
    // Public domain / permissive demo textures from pmndrs/drei-assets
    "/images/color.webp",
  ]);

  // Optional slow idle rotation for visual interest; keep subtle
  const groupRef = React.useRef(null);
  useFrame((_, delta) => {
    if (groupRef.current)
      (groupRef.current as THREE.Group).rotation.y += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Cloud layer slightly above surface */}
      <mesh>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Earth */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 96, 96]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.04}
          specularMap={specMap}
          specular={new THREE.Color("#222")}
          shininess={8}
        />
      </mesh>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className='px-4 py-2 rounded-2xl shadow bg-white/80 text-gray-800 text-sm'>
        Loading…
      </div>
    </Html>
  );
}

export default function EarthDrag() {
  return (
    <div className='w-full h-[520px] bg-black/90 rounded-2xl overflow-hidden'>
      <Canvas
        camera={{ position: [0, 0, 2.6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} castShadow />

        {/* Subtle starfield and environment */}
        <Stars radius={80} depth={50} count={5000} factor={4} fade />
        <Environment preset='sunset' />

        <Suspense fallback={<Loader />}>
          <Earth />
        </Suspense>

        {/* Drag to rotate. Zoom and pan disabled by default. */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.8}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
