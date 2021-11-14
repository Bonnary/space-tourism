import * as THREE from "three";
import styled from "styled-components";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import moon from "../assets/3D-texture/moon.jpg";
import mars from "../assets/3D-texture/mars.jpg";
import europa from "../assets/3D-texture/europa.jpg";
import titan from "../assets/3D-texture/titan.jpg";

function Planet({ index }) {
  const Moon = () => {
    const mesh = useRef(false);
    const texture = useLoader(THREE.TextureLoader, moon);
    useFrame(
      () => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001)
    );
    return (
      <mesh castShadow ref={mesh}>
        <dodecahedronGeometry args={[2, 100]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  };
  const Mars = () => {
    const mesh = useRef(false);
    const texture = useLoader(THREE.TextureLoader, mars);
    useFrame(
      () => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001)
    );
    return (
      <mesh castShadow ref={mesh}>
        <dodecahedronGeometry args={[2, 100]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  };
  const Europa = () => {
    const mesh = useRef(false);
    const texture = useLoader(THREE.TextureLoader, europa);
    useFrame(
      () => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001)
    );
    return (
      <mesh castShadow ref={mesh}>
        <dodecahedronGeometry args={[2, 100]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  };
  const Titan = () => {
    const mesh = useRef(false);
    const texture = useLoader(THREE.TextureLoader, titan);
    useFrame(
      () => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001)
    );
    return (
      <mesh castShadow ref={mesh}>
        <dodecahedronGeometry args={[2, 100]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  };
  return (
    <Container>
      <Canvas
        colorManagement
        shadowMap
        camera={{ fov: 30, position: [-5, 2, 10] }}
      >
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Suspense fallback={null}>
          {index === 0 && <Moon />}
          {index === 1 && <Mars />}
          {index === 2 && <Europa />}
          {index === 3 && <Titan />}

          <OrbitControls />
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default Planet;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
