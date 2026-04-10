export const metadata = {
  title: "About Me - Farhan Ahmed",
  description: "Learn more about Farhan Ahmed - Web Developer",
};

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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

const ProfessionalLinksHub = () => {
  const links = [
    { href: "https://github.com/farhanahmedtech", icon: FaGithub, label: "Github" },
    { href: "https://www.linkedin.com/in/farhan-ahmed-tech", icon: FaLinkedin, label: "Linkedin" },
    { href: "https://x.com/farhanahmedtech", icon: FaTwitter, label: "X / Twitter" },
    { href: "https://www.instagram.com/farhanahmedtech/?hl=en", icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <section className="py-24 px-8 flex flex-col items-center justify-center bg-[#0d0e12] min-h-100">
      {/* Header Context */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tighter mb-4 uppercase">
          Lets <span className="text-[#8A2BE2]">Connect</span>
        </h2>
        <p className="text-slate-500 font-['Space_Grotesk'] text-sm tracking-widest uppercase">
        Explore my work and connect with me online
        </p>
      </div>

      {/* Interactive Links Row */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group relative flex flex-col items-center gap-4"
          >
            {/* Tactile Icon Container */}
            <div className="relative flex items-center justify-center w-20 h-20 bg-[#121318] border border-white/5 rounded-2xl transition-all duration-500 hover:border-[#8A2BE2]/50 hover:bg-[#1a1b23] hover:shadow-[0_20px_40px_rgba(138,43,226,0.15)] active:scale-95 overflow-hidden">
              <link.icon 
                className="text-white/60 transition-all duration-500 group-hover:text-[#8A2BE2] group-hover:scale-110 z-10" 
                size={32} 
              />
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-[#8A2BE2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Label - Revealed on Hover */}
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 opacity-40 group-hover:opacity-100 group-hover:text-[#8A2BE2] transition-all duration-300">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
      {/* Optional CTA context */}
      <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-2xl text-center">
        <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.4em]">
         Available for hire | Projects | Collaborations
        </p>
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

const About = () => {
    return(
    <div>
        <AboutHero/>
        <ProfessionalLinksHub />
        <GoalCard/>
        <FutureGoals/>
    </div>
    )
}

export default About