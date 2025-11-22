// src/components/ComponentLibrary.jsx
import { motion } from 'framer-motion';
import { useStore } from '../store';

const library = [
  { id: 'glass', name: 'Glass Card', emoji: '🪟' },
  { id: 'gradient', name: 'Gradient Flow', emoji: '🌈' },
  { id: 'floating', name: 'Floating Card', emoji: '☁️' },
  { id: 'blob', name: 'Morphing Blob', emoji: '🫧' },
  { id: 'neon', name: 'Neon Button', emoji: '✨' },
  { id: 'spring', name: 'Spring Button', emoji: '🐸' },
  { id: 'liquid', name: 'Liquid Button', emoji: '💧' },
  { id: 'tilt', name: '3D Tilt Card', emoji: '📱' },
  { id: 'textReveal', name: 'Text Reveal', emoji: '📜' },
  { id: 'particle', name: 'Particle Burst', emoji: '🌟' },
  { id: 'confetti', name: 'Confetti', emoji: '🎉' },
  { id: 'orbit', name: 'Orbit Rings', emoji: '🪐' },
];

export default function ComponentLibrary() {
  const { setSelectedComponent } = useStore();

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
      <h3 className="text-3xl font-bold mb-10 text-center">Component Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {library.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.1, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedComponent(item)}
            className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl flex flex-col items-center justify-center gap-4 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
          >
            <span className="text-5xl group-hover:scale-125 transition-transform">{item.emoji}</span>
            <span className="font-bold text-lg group-hover:text-white transition-colors">{item.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}