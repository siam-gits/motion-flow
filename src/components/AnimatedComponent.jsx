// src/components/AnimatedComponent.jsx
import { motion } from 'framer-motion';

const components = {
  glass: () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="w-96 h-64 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center text-white text-5xl font-bold"
    >
      Glassmorphism
    </motion.div>
  ),

  gradient: () => (
    <motion.div
      animate={{
        background: [
          "linear-gradient(45deg, #8b5cf6, #ec4899)",
          "linear-gradient(45deg, #ec4899, #f59e0b)",
          "linear-gradient(45deg, #f59e0b, #10b981)",
          "linear-gradient(45deg, #10b981, #8b5cf6)",
          "linear-gradient(45deg, #8b5cf6, #ec4899)",
        ],
      }}
      transition={{ duration: 8, repeat: Infinity }}
      className="w-96 h-64 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold"
    >
      Flow
    </motion.div>
  ),

  floating: () => (
    <motion.div
      animate={{ y: [0, -40, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotate: 360 }}
      className="w-96 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-5xl"
    >
      ☁️ Floating
    </motion.div>
  ),

  blob: () => (
    <motion.div
      animate={{
        borderRadius: ["20% 50% 50% 30%", "50% 20% 30% 50%", "30% 40% 60% 40%", "20% 50% 50% 30%"],
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className="w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500"
    />
  ),

  neon: () => (
    <motion.button
      whileHover={{ boxShadow: "0 0 40px #a855f7" }}
      whileTap={{ scale: 0.95 }}
      className="px-16 py-8 bg-black text-purple-500 text-4xl rounded-full font-bold border-4 border-purple-500 shadow-2xl"
    >
      GLOW
    </motion.button>
  ),

  spring: () => (
    <motion.button
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="px-20 py-10 bg-green-500 text-white text-5xl rounded-full font-bold shadow-2xl"
    >
      BOING!
    </motion.button>
  ),

  liquid: () => (
    <motion.button 
        className="relative overflow-hidden px-20 py-10 bg-purple-600 text-white text-4xl rounded-full font-bold"
        // Add whileHover to the button itself for better Framer control
        whileHover="hover" 
        initial="rest"
    >
      <motion.div
        className="absolute inset-0 bg-purple-400"
        initial={{ y: "100%" }}
        // Use variants to tie the animation to the parent button's 'hover' state
        variants={{
            rest: { y: "100%", transition: { duration: 0.5 } },
            hover: { y: 0, transition: { duration: 0.5 } },
        }}
      />
      <span className="relative z-10">Liquid</span>
    </motion.button>
  ),

  tilt: () => (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ rotateY: 180 }}
      className="w-96 h-64 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl"
    >
      3D Tilt
    </motion.div>
  ),

  textReveal: () => (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-8xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
    >
      { "REVEAL".split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  ),

  particle: () => (
    <div className="relative w-96 h-96">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-purple-500 rounded-full"
          initial={{ x: 180, y: 180, opacity: 1 }}
          animate={{
            x: Math.cos(i) * 300,
            y: Math.sin(i) * 300,
            opacity: 0,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-6xl">🌟</div>
    </div>
  ),

  confetti: () => (
    <motion.div className="w-96 h-96">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded"
          style={{
            backgroundColor: ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#a855f7'][i % 5],
          }}
          initial={{ x: 200, y: 200 }}
          animate={{
            x: Math.random() * 600 - 300,
            y: Math.random() * 600 - 300,
            rotate: Math.random() * 720,
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.05 }}
        />
      ))}
    </motion.div>
  ),

  orbit: () => (
    <div className="relative w-96 h-96">
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + ring * 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
          style={{ width: ring * 100, height: ring * 100, left: "50%", top: "50%", marginLeft: -ring * 50, marginTop: -ring * 50 }}
        />
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-2xl" />
    </div>
  ),
};

export default function AnimatedComponent({ component }) {
  const Comp = components[component.id] || components.glass;
  return <Comp />;
}