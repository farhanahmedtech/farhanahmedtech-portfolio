"use client"

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0e12]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-bold text-purple-500 font-['Space_Grotesk'] group-hover:scale-105 transition-transformz">{"</>"} FARHAN.DEV</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Skills', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={item === "HeroSection" ? "/" : `/${item.toLowerCase()}`}
              className={`text-sm font-['Space_Grotesk'] font-medium text-slate-400 uppercase tracking-widest transition-colors hover:text-purple-400`}
            >
              {item}
            </Link>
          ))}
          <button className="bg-purple-500 hover:bg-purple-600 text-black px-6 py-2 rounded-lg font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0d0e12] border-b border-white/5 flex flex-col items-center py-10 gap-6 animate-in slide-in-from-top duration-300">
          {['Home', 'About', 'Skills', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-['Space_Grotesk'] font-bold text-slate-300 hover:text-purple-400"
            >
              {item}
            </Link>
          ))}
          <button className="bg-purple-500 text-black px-10 py-3 rounded-lg font-bold shadow-lg">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};