
import React, { useState, useMemo } from 'react';
import { TrendingUp, UserCheck, BarChart3, Star } from 'lucide-react';

const MILESTONES = [
  { 
    grade: 'Grade 9', 
    title: 'Exploration Phase', 
    desc: 'Discovery of professional interests and initial skill mapping.', 
    status: 'Foundation',
    trend: [35, 42, 40, 58, 75], 
    topCareer: 'AI Ethics Designer',
    successStory: { name: 'Aryan V.', result: 'Interned at Google DeepMind' }
  },
  { 
    grade: 'Grade 10', 
    title: 'Validation Phase', 
    desc: 'Validating dream paths through aptitude assessments and psychometric profiling.', 
    status: 'Verification',
    trend: [45, 55, 50, 72, 85],
    topCareer: 'Quantum Systems Architect',
    successStory: { name: 'Sara T.', result: 'Published research on Qubits' }
  },
  { 
    grade: 'Grade 11', 
    title: 'Acquisition Phase', 
    desc: 'Building practical skills through high-level online certifications and project work.', 
    status: 'Development',
    trend: [50, 60, 75, 82, 95],
    topCareer: 'Holographic UX Lead',
    successStory: { name: 'Kunal M.', result: 'Built a VR Campus Tour' }
  },
  { 
    grade: 'Grade 12', 
    title: 'Specialization Phase', 
    desc: 'Finalizing entrance strategy, university planning, and portfolio submission.', 
    status: 'Launch Ready',
    trend: [60, 70, 85, 95, 100],
    topCareer: 'Bio-Digital Engineer',
    successStory: { name: 'Nisha R.', result: 'MIT Full Scholarship' }
  },
];

const DynamicTrendGraph: React.FC<{ data: number[]; color?: string }> = ({ data, color = "#22d3ee" }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const width = 200;
  const height = 60;
  const padding = 10;
  
  // High-Performance Optimization: Memoize coordinate calculations
  // This handles virtualization conceptually by allowing the line to render 
  // thousands of points while the interactive layer can be sampled.
  const { points, linePath, areaPath, interactivePoints } = useMemo(() => {
    const allPoints = data.map((val, i) => ({
      x: (i / (data.length - 1)) * width,
      y: height - (val / 100) * (height - padding * 2) - padding,
      value: val,
      index: i
    }));

    const line = allPoints.reduce((acc, p, i) => 
      i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, 
    "");
    
    const area = `${line} L ${width} ${height} L 0 ${height} Z`;

    // Virtualization/Sampling: Only render interactive hit-targets for a maximum of 20 points
    // This prevents DOM bloat if the trend data grows to thousands of points.
    const samplingRate = Math.max(1, Math.ceil(allPoints.length / 20));
    const sampled = allPoints.filter((_, i) => i % samplingRate === 0 || i === allPoints.length - 1);

    return { points: allPoints, linePath: line, areaPath: area, interactivePoints: sampled };
  }, [data, width, height, padding]);

  return (
    <div className="mt-4 relative h-20 w-full bg-cyan-500/5 backdrop-blur-sm rounded-xl border border-white/5 overflow-visible group">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Main Area Chart */}
        <path d={areaPath} fill={`url(#grad-${color})`} className="transition-all duration-700 ease-out" />
        
        {/* Main Optimized Line */}
        <path 
          d={linePath} 
          fill="none" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          className="animate-draw-line" 
          style={{ strokeDasharray: 400, strokeDashoffset: 400 }} 
        />

        {/* Optimized Interactive Layer (Virtualization through Sampling) */}
        {interactivePoints.map((p) => (
          <g key={p.index} onMouseEnter={() => setHoveredIndex(p.index)} onMouseLeave={() => setHoveredIndex(null)}>
            {/* Expanded Hit Target */}
            <rect 
              x={p.x - 10} 
              y={0} 
              width={20} 
              height={height} 
              fill="transparent" 
              className="cursor-crosshair" 
            />
            
            {/* Visual Point */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r={hoveredIndex === p.index ? "4" : "2"} 
              fill={hoveredIndex === p.index ? color : "white"} 
              className={`transition-all duration-200 ${hoveredIndex === p.index ? 'opacity-100 scale-125' : 'opacity-0 group-hover:opacity-40'}`}
              filter={hoveredIndex === p.index ? "url(#neon-glow)" : ""}
            />

            {/* Holographic Tooltip */}
            {hoveredIndex === p.index && (
              <g className="animate-in fade-in zoom-in-95 duration-200">
                <rect x={p.x - 12} y={p.y - 18} width={24} height={12} rx={2} fill="rgba(15, 23, 42, 0.9)" />
                <rect x={p.x - 12} y={p.y - 18} width={24} height={12} rx={2} fill="none" stroke={color} strokeWidth="0.5" />
                <text x={p.x} y={p.y - 10} fontSize="7" fontWeight="900" fill="white" textAnchor="middle">{p.value}%</text>
              </g>
            )}
          </g>
        ))}
      </svg>
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,#000_50%)] bg-[length:100%_4px]"></div>

      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-line {
          animation: drawLine 2s cubic-bezier(0.2, 0, 0, 1) forwards;
        }
      `}</style>
    </div>
  );
};

const RoadmapTimeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-24">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-cyan-500/20 mb-4">
          Neural Interface Mapping
        </div>
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase">
          Neural <span className="text-cyan-400">Roadmap</span>
        </h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
          An interactive constellation of career milestones, optimized for real-time telemetry and deep space navigation.
        </p>
      </div>

      <div className="relative">
        {/* Constellation Connecting Line */}
        <div className="absolute left-1/2 -ml-px top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block"></div>

        <div className="space-y-32">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className={`relative md:flex items-center gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Constellation Star Node */}
              <div className="absolute left-1/2 -ml-4 top-1/2 -mt-4 z-20 hidden md:block">
                <div className="relative group">
                   <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all animate-pulse"></div>
                   <div className="relative w-8 h-8 rounded-full border-2 border-cyan-400 bg-slate-900 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                     <Star size={14} fill="currentColor" />
                   </div>
                </div>
              </div>

              {/* Data Card */}
              <div className="md:w-1/2">
                <div className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-visible">
                  <div className="absolute -top-6 left-10">
                     <span className="bg-red-500 text-white font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                       NODE: {m.grade}
                     </span>
                  </div>

                  <div className="mb-8 flex justify-between items-center">
                    <h4 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                      {m.title}
                    </h4>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-800 px-3 py-1 rounded">
                      {m.status}
                    </span>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
                    {m.desc}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8 border-t border-white/5">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">
                        <TrendingUp size={12} className="text-cyan-400" /> Sector Growth
                      </div>
                      <DynamicTrendGraph data={m.trend} />
                      <p className="text-[10px] text-cyan-400 mt-4 font-black uppercase tracking-widest">
                        Target: {m.topCareer}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        <UserCheck size={12} className="text-red-500" /> Success Uplink
                      </div>
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/5 group-hover:bg-white/[0.08] transition-all">
                        <p className="text-sm font-black text-white mb-1">
                          {m.successStory.name}
                        </p>
                        <p className="text-xs text-cyan-400 font-bold">
                          {m.successStory.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout Spacer */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic Analytics Footer */}
      <div className="glass-panel p-12 rounded-[3.5rem] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-red-500/5 opacity-30 group-hover:opacity-60 transition-opacity"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-cyan-400 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              <BarChart3 size={14} /> Global Vista Analytics
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tight text-white">Career Pulse Interface</h3>
            <p className="text-slate-400 text-lg max-w-xl font-light">
              Margdarshak's predictive algorithms calculate a <span className="text-cyan-400 font-bold">4.2x faster</span> career launch trajectory for New Generation leaders.
            </p>
          </div>
          <button className="px-12 py-6 bg-cyan-500 text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            EXPORT NEURAL INSIGHTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
