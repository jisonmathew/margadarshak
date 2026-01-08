
import React, { useRef, useState } from 'react';
import { Brain, Waypoints, Scroll, Satellite, ChevronRight, Share2 } from 'lucide-react';
import ShareModal from './ShareModal';
import RocketLaunch from './RocketLaunch';

const HUBS = [
  {
    id: 'vision',
    name: 'Vision Hub',
    label: 'Career Dreamer',
    description: 'Neural matching for your future self. Identify paths aligned with your synaptic strengths.',
    icon: <Brain size={32} />,
    url: 'https://grow.google/career-dreamer/home/',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(34, 211, 238, 0.4)'
  },
  {
    id: 'action',
    name: 'Action Hub',
    label: 'Skill-Bridge',
    description: 'Construct the digital infrastructure of your career. Virtual internships and live projects.',
    icon: <Waypoints size={32} />,
    url: 'https://easyshiksha.com/online_courses/internship',
    color: 'from-blue-600 to-indigo-600',
    glow: 'rgba(37, 99, 235, 0.4)'
  },
  {
    id: 'prep',
    name: 'Prep Hub',
    label: 'AI Resume',
    description: 'Generate your digital avatar\'s professional scroll. Optimized for 22nd-century neural scanning.',
    icon: <Scroll size={32} />,
    url: 'https://resume.io/',
    color: 'from-indigo-600 to-purple-600',
    glow: 'rgba(79, 70, 229, 0.4)'
  },
  {
    id: 'success',
    name: 'Success Hub',
    label: 'Job Alerts',
    description: 'Satellite transmission of global opportunities. Real-time uplink to entrance exams and openings.',
    icon: <Satellite size={32} />,
    url: 'https://www.freejobalert.com/',
    color: 'from-purple-600 to-fuchsia-600',
    glow: 'rgba(147, 51, 234, 0.4)'
  }
];

const HubSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sharingHub, setSharingHub] = useState<typeof HUBS[0] | null>(null);
  const [showRocket, setShowRocket] = useState(false);

  const handleShare = (e: React.MouseEvent, hub: typeof HUBS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    setSharingHub(hub);
  };

  const handleHubClick = (e: React.MouseEvent, hub: typeof HUBS[0]) => {
    if (hub.id === 'success') {
      setShowRocket(true);
      // Optional: Add a small delay before following the link if you want the user to see the takeoff start
      // e.preventDefault();
      // setTimeout(() => window.open(hub.url, '_blank'), 1000);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex items-end justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-cyan-400"></div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Hub Portals</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-xl font-light">The four pillars of the Margdarshak Career Cockpit. Select a portal to begin your neural uplink.</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {HUBS.map((hub) => (
          <a 
            key={hub.id}
            href={hub.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleHubClick(e, hub)}
            className="group relative flex flex-col bg-slate-900/50 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] overflow-hidden"
          >
            {/* Holographic background effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${hub.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hub.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-${hub.id}-glow group-hover:scale-110 transition-transform`}>
              {hub.icon}
            </div>
            
            <div className="mb-6">
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">
                {hub.label}
              </span>
              <h3 className="text-2xl font-black text-white mt-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                {hub.name}
              </h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light h-14 overflow-hidden">
              {hub.description}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                Initialize <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <button 
                onClick={(e) => handleShare(e, hub)}
                className={`flex items-center gap-2 transition-all p-2 rounded-full border border-white/10 ${
                  hub.id === 'action' ? 'bg-cyan-500/10 text-cyan-400 px-4' : 'text-slate-500 group-hover:text-white'
                } hover:bg-white/10 hover:border-white/20`}
              >
                <Share2 size={14} />
                {hub.id === 'action' && <span className="text-[10px] font-black uppercase tracking-widest">Share Hub</span>}
              </button>
            </div>

            {/* Scanning line animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100">
               <div className="w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#22d3ee] animate-[scan_2s_linear_infinite]"></div>
            </div>
          </a>
        ))}
      </div>

      {sharingHub && (
        <ShareModal 
          hubName={sharingHub.name} 
          hubUrl={sharingHub.url} 
          onClose={() => setSharingHub(null)} 
        />
      )}

      {showRocket && (
        <RocketLaunch onComplete={() => setShowRocket(false)} />
      )}

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </div>
  );
};

export default HubSlider;
