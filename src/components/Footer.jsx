// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-950/95 backdrop-blur-xl border-t border-purple-500/20 py-16 mt-32 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MotionFlow Studio
            </h3>
            <p className="text-gray-400 text-lg">
              The ultimate Framer Motion playground.<br />
              Built with <Heart className="inline w-5 h-5 text-red-500" fill="currentColor" /> and <Sparkles className="inline w-5 h-5 text-yellow-500" /> by Siam
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Gallery', 'Docs', 'GitHub'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-xl font-bold text-white mb-6">Follow the Magic</h4>
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/siam-gits"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://twitter.com/siam_akibul"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/akibulsiam"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2025 MotionFlow Studio • Crafted with passion in Bangladesh 🇧🇩
          </p>
        </motion.div>
      </div>
    </footer>
  );
}