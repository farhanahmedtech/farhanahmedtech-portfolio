import { 
  Code, 
  Layers, 
  Cpu, 
  Terminal,
  Rocket
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type MyComponentProps = {
  label: string;
  percentage:number
  color:string
};

const SkillMeter = ({ label, percentage, color }:MyComponentProps) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[10px] font-black text-white uppercase tracking-widest">{label}</span>
      <span className={`text-sm font-black font-['Space_Grotesk'] ${color}`}>{percentage}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ${color.includes('cyan') ? 'bg-[#52f9fc] shadow-[0_0_10px_#52f9fc]' : 'bg-[#8A2BE2] shadow-[0_0_10px_#8A2BE2]'}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

type EvelutionProps = {
    year: string;
    title: string;
    desc: string;
    align:string

}

const EvolutionNode = ({ year, title, desc, align }:EvelutionProps) => (
  <div className={`flex items-center gap-12 mb-24 ${align === 'right' ? 'flex-row-reverse text-right' : 'text-left'}`}>
    <div className="flex-1 max-w-sm">
      <h4 className={`text-lg font-bold text-white font-['Space_Grotesk'] mb-2 ${align === 'right' ? 'text-[#52f9fc]' : 'text-[#8A2BE2]'}`}>
        {title}
      </h4>
      <p className="text-slate-400 text-xs font-['Space_Grotesk'] leading-relaxed">
        {desc}
      </p>
    </div>
    <div className="relative flex flex-col items-center">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs font-['Space_Grotesk'] border-2 z-10 bg-[#121318] ${align === 'right' ? 'border-[#52f9fc] text-[#52f9fc]' : 'border-[#8A2BE2] text-[#8A2BE2]'}`}>
        {year}
      </div>
    </div>
    <div className="flex-1"></div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="bg-[#0d0e12] text-white py-32 px-8 overflow-hidden font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <span className="text-[#52f9fc] text-[10px] font-black uppercase tracking-[0.4em] font-['Space_Grotesk'] mb-6 block">Tech Stack Highlights</span>
          <h1 className="text-7xl md:text-9xl font-black text-white font-['Space_Grotesk'] tracking-tighter leading-[0.85] uppercase">
            Crafting Code &<span className="text-transparent bg-clip-text bg-linear-to-r from-[#8A2BE2] to-[#52f9fc]">Creativity</span>
          </h1>
          <div className="h-1 w-32 bg-[#52f9fc] mt-8"></div>
        </div>

        {/* Top Grid: Frontend & Logic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-8 bg-[#121318] p-12 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-black text-white font-['Space_Grotesk']">Frontend Engineering</h3>
                <p className="text-[#8A2BE2] text-[10px] font-black uppercase tracking-widest mt-1">The Visual Interface Layer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { name: 'React.js', icon: <Code size={24} /> },
                 { name: 'Next.js', icon: <Rocket size={24} /> },
                 { name: 'Tailwind CSS', icon: <Layers size={24} /> },
                 { name: 'JavaScript', icon: <Terminal size={24} /> }
               ].map((skill, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#1a1b23] border border-[#8A2BE2]/30 flex items-center justify-center text-[#8A2BE2] shadow-[0_0_20px_rgba(138,43,226,0.1)] group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{skill.name}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#121318] p-12 rounded-[2.5rem] border border-white/5">
            <h3 className="text-sm font-black text-[#52f9fc] uppercase tracking-[0.2em] mb-12 font-['Space_Grotesk']">Intuitive Logic</h3>
            <SkillMeter label="Problem-Solving" percentage={75} color="text-[#52f9fc]" />
            <SkillMeter label="Creativity" percentage={60} color="text-[#52f9fc]" />
            <SkillMeter label="Collaboration" percentage={80} color="text-[#52f9fc]" />
          </div>
        </div>

        {/* Mid Grid: Backend & Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="bg-[#121318] p-12 rounded-[2.5rem] border-l-4 border-[#52f9fc]">
              <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-8">Backend Infrastructure</h3>
              <p className="text-[#52f9fc] text-[10px] font-black uppercase tracking-widest mb-10">Data & Scalability</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { name: 'Express.js', sub: 'REST Architect', icon: <Cpu /> },
                   { name: 'MongoDB', sub: 'NoSQL Expert', icon: <Layers /> },
                   { name: 'Mongoose', sub: 'Model Design', icon: <Layers /> },
                   { name: 'Node.js', sub: 'Runtime Env', icon: <Terminal /> }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-white/5 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                      <div className="text-[#52f9fc]">{item.icon}</div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase">{item.name}</h4>
                        <p className="text-[8px] text-slate-500 uppercase tracking-widest">{item.sub}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#121318] p-12 rounded-[2.5rem] border border-white/5 relative">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-10 font-['Space_Grotesk']">Workflow Tools</h3>
            <div className="flex flex-wrap gap-4 mb-12">
               {[
                 { name: 'Git', icon: <Rocket size={16} /> },
                 { name: 'Github', icon: <FaGithub size={16} /> }, // Using Layers as Figma placeholder
                 { name: 'Vercel', icon: <Code size={16} /> }
               ].map((tool, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-black/40 border border-white/5 px-6 py-3 rounded-xl text-slate-300 hover:text-[#8A2BE2] hover:border-[#8A2BE2]/40 transition-all cursor-pointer">
                    {tool.icon}
                    <span className="text-xs font-bold font-['Space_Grotesk'] uppercase">{tool.name}</span>
                 </div>
               ))}
            </div>
            
            <div className="bg-[#8A2BE2]/5 border border-[#8A2BE2]/20 p-8 rounded-2xl">
               <span className="text-[9px] font-black text-[#8A2BE2] uppercase tracking-widest block mb-4">Active Achievement</span>
               <p className="text-xs italic text-slate-400 leading-relaxed font-['Space_Grotesk']">
                  "Optimized production build times by 45% using Next.js 16 server-side rendering patterns."
               </p>
            </div>
          </div>
        </div>

        {/* Evolution Track Section */}
        <div className="text-center">
           <h2 className="text-4xl md:text-6xl font-black text-white font-['Space_Grotesk'] tracking-tighter uppercase mb-20">
             Evolution <span className="text-[#52f9fc]">Track</span>
           </h2>
           
           <div className="relative max-w-4xl mx-auto">
              {/* Timeline Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#8A2BE2] via-[#52f9fc] to-[#8A2BE2] hidden md:block"></div>
              
              <EvolutionNode 
                year="2025" 
                title="SMIT" 
                desc="Began intensive training in web foundations, mastering semantic HTML, modern CSS architectures, and foundational logic." 
                align="left"
              />
              <EvolutionNode 
                year="2025" 
                title="React Mastery" 
                desc="Shifted focus to state management, component lifecycles, and advanced frontend performance optimization with React and Tailwind." 
                align="right"
              />
              <EvolutionNode 
                year="2026" 
                title="Full-Stack Professional" 
                desc="Transforming complex requirements into maintainable code, robust backend systems, and production-ready web applications." 
                align="left"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;