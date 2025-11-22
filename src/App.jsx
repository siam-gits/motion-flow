import { motion } from 'framer-motion';
import CanvasScene from './components/CanvasScene';
import ComponentLibrary from './components/ComponentLibrary';
import CodePreview from './components/CodePreview';
import Footer from './components/Footer';


import { useStore } from './store';
import { Sparkles, Moon, Sun } from 'lucide-react';

export default function App() {
  const { darkMode, toggleDarkMode, selectedComponent } = useStore();

  return (
    <>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-950' : 'bg-gray-50'} transition-colors duration-500`}>
        
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
          {/* Responsive container padding: px-4 on mobile, px-6 on medium, max-w-7xl center */}
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4 md:py-6">
            <motion.h1 
              className="text-2xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              MotionFlow Studio
            </motion.h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </header>

        {/* Hero */}
        {/* Adjust top padding for header and bottom padding for content */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 text-center container mx-auto px-4 md:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            // Scale font size aggressively for mobile: text-4xl on small screens, up to 8xl on large
            className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 md:mb-8 leading-tight"
          >
            Build <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stunning</span><br />
            Animations in Seconds
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            // Scale paragraph text size down
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-2"
          >
            Drag, drop, animate. The ultimate Framer Motion playground with 3D preview and instant code export.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto text-purple-600 animate-pulse" />
          </motion.div>
        </section>

        {/* Main App */}
        {/* Default to single column (grid-cols-1) on mobile, switch to 2 columns on large screens (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 container mx-auto px-4 md:px-6 pb-16 md:pb-20">
          
          {/* 3D Canvas */}
          {/* Ensure the canvas section has a defined minimum height on mobile */}
          <div className="relative bg-black rounded-xl md:rounded-3xl overflow-hidden shadow-3xl min-h-[400px] lg:min-h-0 aspect-video lg:aspect-auto">
            <CanvasScene />
            {selectedComponent && (
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base">
                {selectedComponent.name}
              </div>
            )}
          </div>

          {/* Controls */}
          {/* The controls naturally stack below the canvas on mobile due to grid-cols-1 */}
          <div className="space-y-6 md:space-y-8">
            <ComponentLibrary />
            <CodePreview />
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}