
import React from 'react';

const OPPORTUNITIES = [
  "NEURAL INTERFACE DESIGNER @ TOKYO QUANTUM LABS",
  "SPACE-TIME ENGINEER @ MARS BASE ALPHA",
  "CYBERNETIC ETHICS OFFICER @ GENEVA GLOBAL",
  "SYNTHETIC BIOLOGIST @ NEO-BERLIN",
  "HOLOGRAPHIC ARCHITECT @ DUBAI VIRTUAL DISTRICT",
  "QUANTUM DATA SCIENTIST @ SINGAPORE SYSTEMS",
  "AI GUARDIAN @ ANTARCTIC RESEARCH CORE"
];

const LiveFeed: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-slate-900 border-t border-slate-800 py-1.5 overflow-hidden h-9">
      <div className="flex items-center gap-4 h-full">
        <div className="flex-shrink-0 px-4 flex items-center gap-2 border-r border-slate-700">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Global Feed
          </span>
        </div>
        
        <div className="flex-grow relative overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
            {[...OPPORTUNITIES, ...OPPORTUNITIES].map((op, idx) => (
              <span key={idx} className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {op} <span className="mx-6 text-slate-700">•</span>
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex-shrink-0 px-4 text-[9px] font-medium text-slate-500 uppercase tracking-widest hidden sm:block">
          Uptime: 99.9% • {new Date().toLocaleDateString()}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
};

export default LiveFeed;
