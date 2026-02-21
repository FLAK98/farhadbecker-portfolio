import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';

export const BackgroundGrid: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Black */}
      <div className="absolute inset-0 bg-brand-black" />
      
      {/* Animated Grid */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-grid-pattern opacity-40"
      />

      {/* Floating Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/20 blur-[120px] rounded-full"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-purple-dark/20 blur-[150px] rounded-full"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-brand-black/80" />
    </div>
  );
};
