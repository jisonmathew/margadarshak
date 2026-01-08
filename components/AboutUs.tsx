import React, { useEffect, useState, useRef } from 'react';
import { Lightbulb, Users, Globe2, Rocket, Share2 } from 'lucide-react';

interface AboutUsProps {
  onMeetTeam: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onMeetTeam }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`relative rounded-[3rem] overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background with Sri Chaitanya Vista visual context */}
      <div className="absolute inset-0 bg-[#0f172a] border border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] text-red-500 uppercase">
              <Rocket size={14} className="animate-pulse" /> Student-Led Movement
            </div>
            <h2 className={`text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] ${isVisible ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : 'opacity-0'}`}>
              BORN IN THE<br />
              <span className="text-cyan-400">CLASSROOM.</span>
            </h2>
          </div>

          <div className={`space-y-8 text-xl font-light text-slate-400 leading-relaxed ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300' : 'opacity-0'}`}>
            <p className="border-l-4 border-cyan-400 pl-8 py-2 bg-cyan-400/5">
              Margdarshak is not just a portal; it is a <span className="text-white font-bold">movement</span>. Developed by the 
              Entrepreneurship students of Sri Chaitanya Global Vista, this platform solves the 'Global Map' gap.
            </p>
            <p>
              Guided by the innovative spirit of <span className="text-white font-bold italic">The New Generation School</span>, our team 
              built a career cockpit that bridges academic learning with 22nd-century professional reality.
            </p>
          </div>

          <div className={`flex flex-wrap gap-6 ${isVisible ? 'animate-in fade-in zoom-in-95 duration-1000 delay-500' : 'opacity-0'}`}>
            <button 
              onClick={onMeetTeam}
              className="px-10 py-5 bg-white text-slate-900 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all shadow-xl"
            >
              Meet the Team
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
              Our Mission
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          {/* Glass Mission Card */}
          <div className="glass-panel p-10 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all"></div>
            
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">System Mission</h3>
              <Share2 size={20} className="text-slate-500" />
            </div>
            
            <div className="space-y-8">
              {[
                { icon: <Globe2 />, title: 'Democratize Guidance', text: 'Ensuring global standard navigation for every local talent.' },
                { icon: <Lightbulb />, title: 'Foster Innovation', text: 'Integrating neural resources into our learning ecosystem.' },
                { icon: <Users />, title: 'Build Leaders', text: 'Sculpting the visionary creators of the 22nd century.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group/item">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-cyan-400 group-hover/item:bg-cyan-400 group-hover/item:text-slate-900 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/5 text-center">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">
                GLOBAL VISTA ENTREPRENEURSHIP UNIT • 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;