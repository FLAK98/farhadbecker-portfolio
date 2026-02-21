import { motion, useScroll, useSpring } from 'motion/react';
import React from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-brand-purple/30">
      <BackgroundGrid />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <p className="text-gray-500 text-sm font-mono">
      © 2025 farhadbecker.portfolio // ALL RIGHTS RESERVED
    </p>
    <div className="flex gap-6">
      {['Instagram', 'GitHub', 'LinkedIn'].map((social) => {
        const urls: Record<string, string> = {
          Instagram: 'https://www.instagram.com/farhadbecker/',
          GitHub: 'https://github.com/FLAK98',
          LinkedIn: 'https://no.linkedin.com/in/farhad-becker-3098921bb',
        };

        return (
          <a
            key={social}
            href={urls[social]}
            target="_blank"          // Open link in new tab
            rel="noopener noreferrer" // Security best practice
            className="text-gray-500 hover:text-brand-purple transition-colors text-sm font-mono"
          >
            {social}
          </a>
        );
      })}
    </div>
  </div>
</footer>
    </div>
  );
}
