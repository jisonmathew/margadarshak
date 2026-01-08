
import React from 'react';

interface HeroProps {
  onStartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Background Image Layer - High Res Motion Blur Campus */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110 blur-[2px]"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2066&auto=format&fit=crop")', // Symbolic campus placeholder matching high-tech feel
          opacity: 0.4
        }}
      >
        {/* Obsidian Deep Space Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Holographic school badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 rounded-full text-[10px] font-black tracking-[0.3em] text-cyan-400 uppercase mb-10 breathing-glow shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          Neural Uplink Established
        </div>
        
        <div className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-slate-400 tracking-[0.5em] uppercase animate-pulse">
            Margdarshak
          </h2>
          <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 tracking-tighter leading-[0.9] drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            ACTIVATE YOUR<br />
            <span className="text-cyan-400">FUTURE.</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed mb-14">
          Sri Chaitanya Global Vista's <span className="text-white font-bold">22nd-century</span> cockpit for professional navigation. Navigate through the stars of your potential.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <button 
            onClick={onStartClick}
            className="group relative px-12 py-5 bg-cyan-500 text-slate-900 rounded-xl font-black text-lg transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">INITIALIZE PATHWAY</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </button>
          
          <button 
            onClick={() => {
              const element = document.getElementById('hubs');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-5 bg-transparent border-2 border-slate-700 text-white rounded-xl font-black text-lg hover:bg-white hover:text-slate-900 transition-all hover:border-white shadow-lg"
          >
            EXPLORE HUBS
          </button>
        </div>

        {/* School Name Overlay */}
        <div className="mt-24 text-slate-500 font-black text-[10px] tracking-[0.8em] uppercase">
          SRI CHAITANYA GLOBAL VISTA - THE NEW GENERATION SCHOOL
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-cyan-500/10 rounded-lg rotate-45 animate-pulse"></div>
    </div>
  );
};

export default Hero;
