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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-gray/50 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button className="w-full py-4 bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
