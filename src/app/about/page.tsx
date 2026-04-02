import { Cpu, Download, Layers, Layout } from "lucide-react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto border-b border-white/5">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
             <span className="text-[#d095ff] text-[10px] font-black uppercase tracking-[0.4em] font-['Space_Grotesk']">About Farhan</span>
             <div className="h-px w-12 bg-[#d095ff]/30"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-[#52f9fc] font-['Space_Grotesk'] tracking-tighter leading-[0.85] mb-12">
            Ship real things <br />
          </h1>
          <div className="flex flex-wrap gap-8 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] font-['Space_Grotesk']">
             <span>Mern Stack Developer</span>
             <span className="text-[#d095ff]/20">/</span>
             <span>UI Enthusiast</span>
             <span className="text-[#d095ff]/20">/</span>
             <span>Growth Strategist</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-32">
        {/* The Journey Content */}
        <div className="lg:col-span-6 bg-[#121318] p-16 rounded-3xl border border-white/5 relative group overflow-hidden">
           <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-9xl font-black text-[#d095ff]">“</span>
           </div>
           <h3 className="text-3xl font-black text-[#d095ff] font-['Space_Grotesk'] mb-8">The Journey</h3>
           <div className="space-y-6 text-slate-400 font-['space_Grotesk'] leading-relaxed">
              <p>My path began 2 years ago at <span className="text-white font-bold">SMIT (Saylani Mass IT Training)</span>, where I first discovered the power of code. What started as curiosity evolved into a relentless pursuit of excellence.</p>
              <p>My growth is rooted in <span className="text-[#52f9fc] font-bold">consistency</span>—building day by day, learning through every challenge, and refining my craft to deliver world-class digital experiences. I believe that technical precision is the floor, but emotional connection is the ceiling.</p>
              <p>From learning the basics to building real-world solutions, I approach every project as a story—crafted with clean code, intuitive design, and scalable architecture.</p>
           </div>
        </div>

        {/* Profile Image Section */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden group">
           <Image width={600} height={400}
              src="/images/Pic.jpeg"
              alt="Farhan Ahmed Tech" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-linear-to-t from-[#0d0e12] to-transparent opacity-60"></div>
           <div className="absolute bottom-10 left-10">
              <div className="bg-[#121318]/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                 <span className="text-[10px] font-bold text-[#d095ff] uppercase tracking-widest block mb-2">Experience</span>
                 <span className="text-2xl font-black text-white font-['Space_Grotesk']">2+ Years Active</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseGrid = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto border-b border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
         <h2 className="text-6xl font-black text-white font-['Space_Grotesk'] tracking-tighter">Current Expertise</h2>
         <p className="text-slate-500 text-sm font-['Space_Grotesk'] max-w-xs leading-relaxed">
           Speed. Scalability. Precision. Built for the modern web.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Core Stack */}
         <div className="md:col-span-2 bg-[#121318] p-12 rounded-3xl border border-white/5 hover:border-[#d095ff]/30 transition-colors group">
            <div className="w-12 h-12 bg-[#d095ff]/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
               <Layers className="text-[#d095ff]" size={24} />
            </div>
            <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mb-4">Core Stack</h3>
            <p className="text-slate-500 text-sm font-['Space_Grotesk'] mb-10">Building robust architectures with modern standards.</p>
            <div className="flex flex-wrap gap-3">
               {['REACT.JS', 'NEXT.JS', 'TYPESCRIPT', 'Express.js', 'Mongoose'].map(skill => (
                 <span key={skill} className="text-[10px] font-bold text-slate-400 border border-white/10 px-4 py-2 rounded-lg bg-white/5 uppercase tracking-wider">{skill}</span>
               ))}
            </div>
         </div>

         {/* Individual Cards */}
         <div className="bg-[#121318] p-12 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-[#1a1b23] transition-all">
            <div className="w-12 h-12 bg-[#52f9fc]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#52f9fc] transition-colors">
               <Cpu className="text-[#52f9fc] group-hover:text-[#0d0e12] transition-colors" size={24} />
            </div>
            <h4 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Performance</h4>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Speed is a Feature</span>
         </div>

         <div className="bg-[#121318] p-12 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-[#1a1b23] transition-all">
            <div className="w-12 h-12 bg-[#d095ff]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d095ff] transition-colors">
               <Layout className="text-[#d095ff] group-hover:text-[#0d0e12] transition-colors" size={24} />
            </div>
            <h4 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Responsive</h4>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Adaptive Ecosystems</span>
         </div>
      </div>
    </section>
  );
};

const GoalCard = ({ number, title, desc }: any) => (
  <div className="flex gap-8 group cursor-default">
    <div className="text-2xl font-black text-[#d095ff] font-['Space_Grotesk'] opacity-40 group-hover:opacity-100 transition-opacity">{number}.</div>
    <div>
      <h4 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-4">{title}</h4>
      <p className="text-slate-400 text-sm font-['Space_Grotesk'] leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const FutureGoals = () => {
  return (
    <section className="py-40 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2 relative">
           <div className="aspect-square bg-[#121318] rounded-[3rem] overflow-hidden border border-white/5">
              <Image width={600} height={400}
                src="/images/futuregoals.png"
                alt="Workspace Concept" 
                className="w-full h-full object-cover mix-blend-screen"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#d095ff]/10 to-transparent"></div>
           </div>
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d095ff]/5 blur-[80px] rounded-full"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#52f9fc]/5 blur-[80px] rounded-full"></div>
        </div>

        <div className="lg:w-1/2">
           <h2 className="text-6xl font-black text-white font-['Space_Grotesk'] tracking-tighter mb-16">Future Goals</h2>
           <div className="space-y-16">
              <GoalCard 
                number="01" 
                title="Cutting-Edge Interfaces" 
                desc="Exploring the latest in React, Next.js, and 3D web interactions to craft interfaces that are intuitive, immersive, and future-ready." 
              />
              <GoalCard 
                number="02" 
                title="Performance Mastery" 
                desc="Optimizing frontend and backend performance for lightning-fast load times, smooth experiences, and top SEO rankings." 
              />
              <GoalCard 
                number="03" 
                title="Full-Stack Growth" 
                desc="Continuously learning new technologies, frameworks, and best practices to deliver complete, end-to-end web solutions." 
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="py-40 px-8 max-w-7xl mx-auto">
       <div className="bg-[#121318] p-24 rounded-[3.5rem] border border-white/5 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d095ff]/10 blur-[120px] rounded-full"></div>
          
          <h2 className="text-4xl sm:text-center text-center md:text-8xl font-black text-white font-['Space_Grotesk'] tracking-tighter mb-12 leading-tight">
             Ready to build <br />
             something <span className="text-[#52f9fc] italic">legendary</span>?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
             <button className="bg-linear-to-r from-[#d095ff] to-[#bd70ff] text-[#0d0e12] px-12 py-5 rounded-2xl font-black text-lg tracking-tight shadow-[0_20px_50px_rgba(208,149,255,0.4)] hover:scale-105 transition-all">
                START A PROJECT
             </button>
             <button className="flex items-center gap-3 text-white/80 font-bold hover:text-white transition-colors group/btn px-10 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10">
                DOWNLOAD CV <Download size={20} className="group-hover/btn:translate-y-1 transition-transform" />
             </button>
          </div>
       </div>
    </section>
  );
};

const About = () => {
    return(
    <div>
        <AboutHero/>
        <ExpertiseGrid/>
        <GoalCard/>
        <FutureGoals/>
        <CTASection/>
    </div>
    )
}

export default About