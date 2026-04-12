import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 selection:bg-[#d095ff]/30">
      {/* Container for structured spacing */}
      <div className="text-center">
        {/* Small, precise 404 Text */}
        <h1 className="text-sm font-black uppercase tracking-[0.4em] text-[#d095ff] font-['Space_Grotesk'] mb-12">
          404 Not Found
        </h1>

        {/* Minimalist Action Button */}
        <Link href="/">
          <button className="bg-[#d095ff] hover:bg-[#bd70ff] text-white px-12 py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_15px_30px_rgba(208,149,255,0.3)] hover:shadow-[0_20px_40px_rgba(208,149,255,0.4)] active:scale-95">
            Move to Home
          </button>
        </Link>
      </div>
      
      {/* Decorative corner accent (optional, matching the minimalist architectural style) */}
      <div className="fixed bottom-10 right-10 w-20 h-20 border-r border-b border-[#d095ff]/10 pointer-events-none"></div>
    </div>
  );
};

export default NotFoundPage;
