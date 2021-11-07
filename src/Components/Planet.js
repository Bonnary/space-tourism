import * as THREE from "three";
import styled from "styled-components";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import moon from "../assets/3D-texture/moon.jpg";

const Object = async ({ position }) => {
  const mesh = useRef(false);
  const texture = useLoader(THREE.TextureLoader, moon);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <mesh position={position} ref={mesh}>
      <dodecahedronGeometry args={[2, 100]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};


export default function Planet() {
  return (
    <Container>
      <Canvas>
        {/* <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} /> */}
        <Suspense fallback={null}>
          <Object position={[0, 1, 0]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;