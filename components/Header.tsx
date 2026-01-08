import React from 'react';

interface HeaderProps {
  onLoginClick: () => void;
}

const HolographicOrb: React.FC = () => {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all duration-1000 animate-pulse"></div>
      
      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20"></div>
          <img 
            src="https://api.dicebear.com/7.x/initials/svg?seed=SC&backgroundColor=00a99d" 
            alt="Texture" 
            className="w-full h-full opacity-30 scale-150 rotate-45"
          />
        </div>

        <div className="relative z-10 w-8 h-8 flex flex-col items-center justify-center">
           <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/initials/svg?seed=Vista&backgroundColor=ed1c24" 
                alt="Emblem" 
                className="w-4 h-4 animate-pulse" 
              />
           </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const navItems = [
    { label: 'Hubs', id: 'hubs' },
    { label: 'About Us', id: 'about-section' },
    { label: 'Timeline', id: 'roadmap' },
    { label: 'Success', id: 'success' },
    { label: 'Resources', id: 'resources' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-[#0f172a]/40 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-4 lg:px-12 shadow-2xl">
      <div className="flex items-center gap-6">
        <HolographicOrb />

        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <h1 className="text-lg md:text-xl font-black text-white leading-none tracking-tight">
              Sri Chaitanya
            </h1>
            <h2 className="text-lg md:text-xl font-black text-[#ed1c24] leading-none tracking-tight">
              GLOBAL VISTA
            </h2>
          </div>
          <div className="mt-1 flex flex-col">
            <div className="bg-[#fff200] px-2 py-0.5 inline-block rounded-sm">
              <span className="text-[9px] md:text-[10px] font-black text-slate-900 uppercase tracking-tighter">
                THE NEW GENERATION SCHOOL
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`}
            className="text-xs font-black text-slate-400 hover:text-cyan-400 transition-all uppercase tracking-widest"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={onLoginClick}
          className="group relative px-6 py-2 bg-white text-slate-900 rounded-md font-black text-xs transition-all overflow-hidden uppercase tracking-widest hover:bg-cyan-400"
        >
          <span className="relative z-10">Neural Login</span>
        </button>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </header>
  );
};

export default Header;