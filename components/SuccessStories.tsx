
import React from 'react';
import { Globe, Trophy, ArrowUpRight, Award, Zap } from 'lucide-react';

const STORIES = [
  { 
    name: 'Rahul S.', 
    role: 'AI Intern @ TechGlobal', 
    achievement: 'Top 1% Global AI Ranking',
    path: 'Vision Hub', 
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
    tag: 'Elite Academic'
  },
  { 
    name: 'Priya K.', 
    role: 'Lead Data Architect', 
    achievement: '5 Global Patents Filed',
    path: 'Success Hub', 
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tag: 'Innovation Lead'
  },
  { 
    name: 'Ananya D.', 
    role: 'Founding UX Specialist', 
    achievement: 'Forbes 30 Under 30',
    path: 'Action Hub', 
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
    tag: 'Entrepreneur'
  },
  { 
    name: 'Vikram M.', 
    role: 'Quant Strategist', 
    achievement: 'Perfect SAT Score',
    path: 'Prep Hub', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tag: 'Scholarship Winner'
  },
];

const SuccessStories: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-1 h-10 bg-red-500"></div>
             <h2 className="text-5xl font-black text-white tracking-tighter uppercase">
               Hyper-Achievers
             </h2>
          </div>
          <p className="text-slate-400 font-light text-xl max-w-2xl">
            Meet the alumni who have redefined professional standards via the Global Vista ecosystem.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="glass-panel px-8 py-4 rounded-2xl border-white/5">
            <span className="block text-3xl font-black text-white">500+</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Placements</span>
          </div>
          <div className="glass-panel px-8 py-4 rounded-2xl border-white/5">
            <span className="block text-3xl font-black text-white">98%</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Success Index</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {STORIES.map((s, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col sm:flex-row glass-panel rounded-[3rem] border-white/5 overflow-hidden transition-all duration-700 hover:border-red-500/30 hover:shadow-[0_0_50px_rgba(239,68,68,0.1)]"
          >
            {/* Image Port */}
            <div className="relative w-full sm:w-60 h-72 sm:h-auto overflow-hidden">
              <img 
                src={s.img} 
                alt={s.name} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                  {s.tag}
                </span>
              </div>
            </div>
            
            {/* Achievement Matrix */}
            <div className="flex-grow p-10 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h5 className="text-3xl font-black text-white tracking-tight uppercase leading-none mb-2">{s.name}</h5>
                  <p className="text-red-500 font-black text-sm uppercase tracking-widest">{s.role}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:bg-red-500/10 transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Key Achievement</p>
                    <p className="text-base font-bold text-white leading-tight">{s.achievement}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Neural Path</p>
                    <p className="text-base font-bold text-white leading-tight">{s.path}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-6 pt-6 border-t border-white/5">
                <button className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors">
                  PORTFOLIO
                </button>
                <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                <button className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors">
                  MENTORSHIP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <button className="px-16 py-6 glass-panel border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
          LOAD MORE PATHS
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
