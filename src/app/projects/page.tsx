import { ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type ProjectProps = {
  number: string;
  title: string;       
  description: string;
  tags: string[];  
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
};

const ProjectCard = ({ number, title, description, tags, githubUrl, demoUrl, imageUrl }:ProjectProps) => (
  <div className="bg-[#121318] border border-white/5 rounded-[2.5rem] p-12 relative group overflow-hidden hover:border-[#8A2BE2]/30 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
    {/* Decorative Background Number */}
    <div className="absolute top-10 right-10 text-9xl font-black text-white/3 group-hover:text-[#8A2BE2]/5 transition-colors duration-500 pointer-events-none font-['Space_Grotesk']">
      {number}
    </div>

    {/* Project Image Placeholder / Visual */}
    <div className="relative aspect-16/10 bg-[#1a1b23] rounded-3xl mb-10 overflow-hidden border border-white/5">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#121318] to-transparent opacity-60"></div>
    </div>

    {/* Tech Stack Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="text-[9px] font-black text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Content */}
    <h3 className="text-3xl font-black text-white font-['Space_Grotesk'] mb-4 tracking-tighter">
      {title}
    </h3>
    <p className="text-slate-400 text-sm font-['Space_Grotesk'] leading-relaxed mb-10 max-w-sm">
      {description}
    </p>

    {/* Actions */}
    <div className="flex flex-wrap gap-4">
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors group/btn"
      >
        <FaGithub size={16} className="group-hover/btn:scale-110 transition-transform" />
        GitHub
      </a>
      <a 
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-linear-to-r from-[#8A2BE2] to-[#d095ff] text-white px-6 py-3 rounded-xl text-xs font-bold font-['Space_Grotesk'] shadow-[0_10px_30px_rgba(138,43,226,0.3)] hover:scale-105 transition-all group/btn"
      >
        <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        Live Demo
      </a>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      number: "01",
      title: "NeuralNexus Engine",
      description: "Real-time AI orchestration platform for managing multi-agent workflows with architectural precision.",
      tags: ["NEXT.JS", "MONGODB", "TAILWIND CSS"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      number: "02",
      title: "Void Archiver",
      description: "Ultra-secure decentralized storage solution utilizing fragmented block architectures for data integrity.",
      tags: ["TYPESCRIPT", "PRISMA", "GRAPHQL"],
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      number: "03",
      title: "CyberGrid Visualizer",
      description: "Interactive 3D data visualization dashboard for monitoring complex microservice networks in real-time.",
      tags: ["REACT", "THREE.JS", "R3F"],
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-[#0d0e12] py-40 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl mb-24 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tighter mb-8 leading-tight">
            What I’ve Built
          </h2>
          <p className="text-2xl md:text-3xl text-slate-400 font-['Space_Grotesk'] font-medium leading-tight max-w-3xl">
            A collection of projects that showcase my ability to design, build, and deliver real-world applications. From concept to execution, each project solves a meaningful problem.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>

        {/* Footer Text */}
        <div className="flex justify-center items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#52f9fc] animate-pulse"></div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] font-['Space_Grotesk']">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;