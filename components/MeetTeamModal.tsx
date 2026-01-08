
import React from 'react';
import { X, User, Briefcase, Layout, Database } from 'lucide-react';

interface MeetTeamModalProps {
  onClose: () => void;
}

const TEAM = [
  { role: 'Project Lead', icon: <User />, name: 'Visionary Lead', desc: 'Strategy & Execution' },
  { role: 'UI Designer', icon: <Layout />, name: 'Creative Head', desc: 'Holographic Interfaces' },
  { role: 'Resource Manager', icon: <Database />, name: 'Intel Architect', desc: 'Global Portal Sync' },
  { role: 'Social Impact', icon: <Briefcase />, name: 'Mission Lead', desc: 'Community Outreach' },
];

const MeetTeamModal: React.FC<MeetTeamModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        <div className="p-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[#0072bc] text-xs font-black uppercase tracking-[0.3em]">The Innovators</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mt-1">Margdarshak Team</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-3 text-slate-400 hover:text-[#ed1c24] hover:bg-slate-100 rounded-full transition-all"
            >
              <X size={28} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-5 group hover:bg-white hover:border-[#0072bc]/30 hover:shadow-xl transition-all duration-300 cursor-default">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#0072bc] group-hover:bg-[#0072bc] group-hover:text-white transition-all shadow-sm">
                  {member.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{member.role}</span>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">{member.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-center">
            <p className="text-sm text-slate-600 font-medium italic">
              "We applied the Lean Startup methodology to solve career confusion for our community."
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <span className="px-3 py-1 bg-white border border-blue-200 rounded-full text-[9px] font-bold text-blue-600 uppercase tracking-widest">Lean Methodology</span>
              <span className="px-3 py-1 bg-white border border-blue-200 rounded-full text-[9px] font-bold text-blue-600 uppercase tracking-widest">Rapid Prototyping</span>
            </div>
          </div>
        </div>
        
        {/* Visual Accent */}
        <div className="h-2 w-full flex">
          <div className="flex-1 bg-[#0072bc]"></div>
          <div className="flex-1 bg-[#ed1c24]"></div>
          <div className="flex-1 bg-[#fff200]"></div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeamModal;
