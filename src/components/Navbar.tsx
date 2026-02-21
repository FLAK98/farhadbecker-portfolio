import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-brand-purple flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
            <Cpu size={24} />
          </div>
          <span
            className="text-xl font-bold tracking-tighter cursor-pointer"
              onClick={() => window.location.reload()}
          >
              farhadbecker.portfolio
        </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-mono text-gray-400 hover:text-brand-purple transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all active:scale-95">
            Resume
          </button>
        </div>

        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-6 h-[2px] bg-white" />
        </button>
      </div>
    </motion.nav>
  );
};
