import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-purple font-mono text-sm mb-4 tracking-widest uppercase">Get in touch</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">LET'S BUILD SOMETHING AWSOME TOGETHER.</h3>
          <p className="text-gray-400 text-lg font-light mb-12 max-w-md">
            Got a project in mind? Or just feel like chatting about cool tech stuff? I’m always down to connect and talk ideas.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</p>
                <p className="text-white font-medium">farhad.be98@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Discord</p>
                <p className="text-white font-medium">fl4k_98</p>
              </div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};
