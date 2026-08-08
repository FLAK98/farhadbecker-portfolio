import { motion } from 'motion/react';
import React from 'react';
import profileImg from '../../img/f.jpg'; // adjust relative path

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-12"
      >
        {/* Profile Picture */}
        
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-purple blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-brand-purple/30 overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-brand-purple font-mono text-sm mb-4 tracking-widest uppercase">About Me</h2>
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              FARHAD BECKER
            </h3>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              27 YEARS OLD // INFORMATION TECHNOLOGG E-BUSINESS
            </p>
            <div className="h-[1px] w-24 bg-brand-purple my-8 mx-auto md:mx-0" />
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
              I’m an Information Technology & E-Business graduate from Kristiania University College in Bergen. I focus on building reliable, scalable systems that make complex tech easy to use. I love clean code and smooth responsive performance, treating every project like a digital creation.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};