import { motion } from 'motion/react';
import { ChevronDown, Terminal } from 'lucide-react';
import React from 'react';
import { TextScramble } from './TextScramble';


export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-mono mb-8">
          <Terminal size={14} />
          <span>MY.PORTFOLIO.SYS.DEV // VERSION 2.0.25</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          <TextScramble text="BE" className="block text-white" delay={500} />
          <TextScramble text="CREATIVE" className="block text-brand-purple text-glow" delay={1000} />
        </h1>

        <motion.p
         
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          <span className="glitch" data-text="I build fast, reliable digital experiences that are secure, can grow easily, and feel smooth and easy to use.">
            I build fast, reliable digital experiences that are secure, can grow easily, and feel smooth and easy to use.
            
          </span>
         
        </motion.p>
        

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
>
  {/* View Projects Button */}
    <button
      onClick={() => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }}
        className="px-8 py-4 bg-brand-purple border border-white/10 text-white font-semibold rounded-xl 
               transition-all duration-300
               hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
               active:scale-95 cursor-pointer"
          >
            View Projects
            </button>

  {/* Contact Me Button */}
      <button
        onClick={() => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
           className="px-8 py-4 bg-brand-purple border border-white/10 text-white font-semibold rounded-xl 
               transition-all duration-300
               hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
               active:scale-95 cursor-pointer"
          >
            Contact Me
              </button>
      </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};
