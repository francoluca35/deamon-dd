"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const AutoModel = () => {
  const { scene } = useGLTF("/models/auto.glb"); // Cargar modelo 3D
  return <primitive object={scene} scale={2} />;
};

const Auto3D = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AutoModel />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default Auto3D;
