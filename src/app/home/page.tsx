export const metadata = {
  title: "Farhan Ahmed | Developer",
  description: "Welcome to my portfolio website",
};

import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#0d0e12]">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1e1b4b 1px, transparent 1px), linear-gradient(90deg, #1e1b4b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-[#0d0e12]/80 to-[#0d0e12]"></div>

      {/* Decorative Neon Elements */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-cyan-600/10 blur-[150px] rounded-full"></div>

      {/* Availability Badge */}
      <div className="z-10 mb-13 mt-4 flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 rounded-sm">
         <span className="w-1.5 h-1.5 bg-cyan-400 block"></span>
         <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em] font-['Space_Grotesk']">Available for Hire</span>
         <span className="w-1.5 h-1.5 bg-cyan-400 block"></span>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-4xl px-8">
        <h1 className="text-7xl md:text-[120px] sm:text-[50px] font-black tracking-tighter leading-none mb-6 font-['Space_Grotesk']">
          Hi, I’m <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-purple-400 to-purple-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] ">Farhan</span> 
        </h1>
        
        <p className="text-xl md:text-3xl text-white font-medium mb-4 font-['Space_Grotesk']">
          A Mern Stack Web Developer with <span className="text-cyan-400">2 years</span> of experience
        </p>
        
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-['Space_Grotesk'] leading-relaxed">
          I build fast, responsive & modern web apps with a focus on high-end editorial aesthetics and technical precision.
        </p>

        <div className="flex font-['Space_Grotesk'] flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="https://github.com/farhanahmedtech" target="_blank"  className="bg-purple-500  hover:bg-purple-600 text-black px-10 py-4 rounded-lg font-black text-lg shadow-[0_10px_40px_rgba(168,85,247,0.4)] transition-all active:scale-95">
            View My Projects
          </Link>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=farhanahmedmirali@gmail.com&su=Project%20Inquiry&body=Hi%20Farhan,%0AI%20want%20to%20discuss%20a%20project%20with%20you." target="_blank"  rel="noopener noreferrer" className="flex items-center gap-3 text-white font-bold hover:text-purple-400 transition-colors border border-white/10 bg-white/5 px-10 py-4 rounded-lg">
            Contact Me <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Visual Tech Stack Indicators (Static) */}
      <div className="z-10 mt-32 flex gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
         <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center border border-white/10">
               <Code size={20} className="text-white" />
            </div>
         </div>
         <div className="text-xs font-black text-slate-500 self-center tracking-widest font-['Space_Grotesk']">Next</div>
         <div className="text-xs font-black text-slate-500 self-center tracking-widest font-['Space_Grotesk']">Express</div>
         <div className="text-xs font-black text-slate-500 self-center tracking-widest font-['Space_Grotesk']">MongoDB</div>
      </div>
      
      {/* Decorative System Status */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
         <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            Farhan's Tech
            <div className="w-32 h-0.5 bg-slate-800 mt-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-purple-500 w-1/3 animate-ping opacity-50"></div>
            </div>
         </div>
      </div>
    </section>
    );
};

export default HeroSection