import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer  () {
  return (
    <footer className="bg-[#0d0e12] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-['Space_Grotesk'] font-bold text-[#d095ff] mb-6 flex items-center gap-2">
              {"</>"} Farhan.dev
            </div>
            <p className="text-[#faf8fe]/40 text-sm font-['Space_Grotesk'] leading-relaxed max-w-xs">
              Creating digital products with a focus on high-end editorial aesthetics and functional precision. Engineered for the next generation of the web.
            </p>
          </div>

          <div>
            <h4 className="text-[#faf8fe] font-bold font-['Space_Grotesk'] mb-6">Quick Links</h4>
            <ul className="space-y-4 font-['Space_Grotesk']">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#faf8fe]/40 hover:text-[#d095ff] text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#faf8fe] font-bold font-['Space_Grotesk'] mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, label: 'GitHub' },
                { icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
                { icon: <FaTwitter size={20} />, label: 'X' },
                { icon: <FaInstagram size={20} />, label: 'Instagram' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#faf8fe]/40 hover:bg-[#d095ff] hover:text-[#0d0e12] transition-all duration-300 active:scale-90 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[#faf8fe]/20 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 Architectural Synthesist. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};