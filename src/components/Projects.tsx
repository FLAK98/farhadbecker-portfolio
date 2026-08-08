import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import gimlePubImg from "../../img/gimlePubEntrance.webp";
import portfolioImg from "../../img/port.png";
import calImg from "../../img/cal.png";
import weatherImg from "../../img/weather.png";
import passImg from "../../img/passGen.png";
import empImg from "../../img/empDash.png";

const projects = [
  {
    id: 1,
    title: "BACHELOR PROJECT",
    category: "WEBSITE / PROJECT",
    image: gimlePubImg,
    description: "This thesis presents the development of a responsive website for Gimle Pub, enhancing customer experience and services. Using research, user testing, and agile methods in collaboration with the client, we created a modern, user-friendly site that reflects the pub’s brand and strengthens its market presence.",
    tags: ["Html", "Css", "JS", "Customer experience", "User testing", "Marketing strategies"],
    demo1: "https://gimlepub.no/"
  },
  {
  id: 2,
  title: "PORTFOLIO",
  category: "WEBSITE",
  image: portfolioImg,
  description: "1st version of my own portfolio from scratch",
  tags: ["Html", "Css", "JS", "Typescript", "React"],
  demo1: "https://flak98.github.io/farhadbecker-portfolio/"
},

{
  id: 3,
  title: "Weather Dashboard",
  category: "WEBSITE",
  image: weatherImg,
  description: "simple web weather dashboard",
  tags: ["Html", "Css", "JS", "React", "API"],
  githubUrl: "https://github.com/FLAK98/weather-dashboard-"
},

{
  id: 4,
  title: "employee Dashboard",
  category: "WEBSITE",
  image: empImg,
  description: "simple web employee dashboard",
  tags: ["Html", "Css", "JS"],
  githubUrl: "https://github.com/FLAK98/Web-Employee-Management-Dashboard"
},

{
  id: 5,
  title: "WebCalculator",
  category: "WEBSITE",
  image: calImg,
  description: "simple web calculator",
  tags: ["Html", "Css", "JS"],
  githubUrl: "https://github.com/FLAK98/webcalculator"
},

{
  id: 6,
  title: "Password Generator",
  category: "WEBSITE",
  image: passImg,
  description: "simple web password generator",
  tags: ["Html", "Css", "JS"],
  githubUrl: "https://github.com/FLAK98/webpasswordgenerator-"
},
  
];

export const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <h2 className="text-brand-purple font-mono text-sm mb-4 tracking-widest uppercase">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">FEATURED PROJECTS</h3>
        </div>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for premium feel
            }}
            className="group relative"
          >
            
            <a 
              href={ project.demo1 || project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
              
>
  
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-gray border border-white/5 mb-6">
    
            <motion.img
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
    />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
                {/* Purple Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(139,92,246,0.2)]" />
              </div>

                </div>
              </a>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-brand-purple font-mono text-xs tracking-wider">{project.category}</span>
                
              </div>
              
              <a href={project.demo1} target="_blank" rel="noopener noreferrer" className="block group">
              <h4 className="text-2xl font-bold group-hover:text-brand-purple transition-colors duration-300">
                {project.title}
              </h4>
              </a>
             
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};
