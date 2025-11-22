// src/components/CanvasScene.jsx — FULL DIV ANIMATED BEAUTY (NO CROPPING)
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Trail, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import AnimatedComponent from './AnimatedComponent';
import { useStore } from '../store';
import { motion } from 'framer-motion';

export default function CanvasScene() {
  const { selectedComponent } = useStore();

  return (
    <div className="relative w-full h-full rounded-xl md:rounded-3xl overflow-hidden shadow-2xl"> 
      {/* FULL-SCREEN 3D CANVAS — COVERS 100% OF DIV */}
      <Canvas
        camera={{ position: [0, 0, 22], fov: 75 }}  // Wider view, no crop
        gl={{ antialias: true, alpha: false }}
        className="absolute top-0 left-0 w-full h-full"  // THIS IS THE KEY
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <pointLight position={[20, 20, 20]} intensity={3} color="#c084fc" />
        <pointLight position={[-20, -15, 15]} intensity={2.5} color="#f472b6" />
        <pointLight position={[0, 0, -25]} intensity={2} color="#8b5cf6" />

        {/* Infinite Stars */}
        <Stars radius={600} depth={150} count={15000} factor={12} saturation={0} fade speed={2} />

        {/* Sparkles Nebula */}
        <Sparkles count={500} scale={40} size={5} speed={1} opacity={0.8} color="#c084fc" />

        {/* FLOATING PLANETS REMOVED:
        <Float speed={4} rotationIntensity={2.5} floatIntensity={3.5}>
          <Trail width={10} length={25} color="#a855f7">
            <mesh position={[10, 6, -15]}>
              <sphereGeometry args={[2.5, 64, 64]} />
              <MeshDistortMaterial color="#a855f7" distort={0.6} speed={4} roughness={0} metalness={1} />
            </mesh>
          </Trail>
        </Float>

        <Float speed={6} rotationIntensity={3.5} floatIntensity={2.5}>
          <Trail width={12} length={30} color="#ec4899">
            <mesh position={[-12, -5, -18]}>
              <sphereGeometry args={[2, 64, 64]} />
              <MeshDistortMaterial color="#ec4899" distort={0.8} speed={5} roughness={0} metalness={1} />
            </mesh>
          </Trail>
        </Float>
        */}

        {/* Meteor Shower (Kept) */}
        {[...Array(12)].map((_, i) => (
          <motion.mesh
            key={i}
            initial={{ x: Math.random() * 60 - 30, y: 30, z: -20 }}
            animate={{ y: -50 }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: i * 1.2 }}
          >
            <Trail width={5} length={40} color="#ffffff">
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </Trail>
          </motion.mesh>
        ))}

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      {/* COMPONENT PREVIEW — FULLY CENTERED */}
      <motion.div className="absolute inset-0 flex items-center justify-center p-4">
        {selectedComponent ? (
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 70 }}
          >
            <AnimatedComponent component={selectedComponent} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="text-center"
          >
                {/* Responsive font size and spacing */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              MotionFlow
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-purple-300 font-light mt-4 sm:mt-8 lg:mt-10">
              Select a component to enter the future ✨
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 10%, rgba(0,0,0,0.9) 100%)"
        }}
      />
    </div>
  );
}