import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Car3DModel() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Car Body */}
      <group>
        {/* Main body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[4, 1, 1.8]} />
          <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Roof */}
        <mesh position={[0, 1.2, 0]} scale={[0.8, 0.6, 0.9]}>
          <boxGeometry args={[4, 1, 1.8]} />
          <meshStandardMaterial color="#1d4ed8" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Wheels */}
        <group>
          {[[-1.5, -0.3, 1], [1.5, -0.3, 1], [-1.5, -0.3, -1], [1.5, -0.3, -1]].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.3]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
          ))}
        </group>
        
        {/* Headlights */}
        <mesh position={[2.1, 0.3, 0.6]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[2.1, 0.3, -0.6]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </mesh>
  );
}

const Car3D = () => {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 2, 5]} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Car3DModel />
        
        <Environment preset="sunset" />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </motion.div>
  );
};

export default Car3D;
