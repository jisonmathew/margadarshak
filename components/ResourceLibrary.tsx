
import React from 'react';
import { Download, BookOpen, FileText, Globe } from 'lucide-react';

const RESOURCES = [
  { id: 1, title: 'AI Tools for Modern Students', type: 'PDF Guide', icon: <FileText size={20} />, color: 'text-blue-600' },
  { id: 2, title: 'Interview Preparation Kit', type: 'E-Book', icon: <BookOpen size={20} />, color: 'text-indigo-600' },
  { id: 3, title: 'Global University Map', type: 'Directory', icon: <Globe size={20} />, color: 'text-sky-600' },
  { id: 4, title: 'Professional CV Templates', type: 'Pack', icon: <Download size={20} />, color: 'text-violet-600' },
];

const ResourceLibrary: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Knowledge Vault</h2>
          <p className="text-slate-500 text-sm mt-1">Downloadable guides and toolkits for your journey.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-all">
          <Download size={18} /> Download All Packs
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESOURCES.map((r) => (
          <div key={r.id} className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group cursor-pointer">
            <div className={`mb-4 ${r.color}`}>
              {r.icon}
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.type}</span>
              <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                {r.title}
              </h4>
            </div>

            <div className="mt-6 flex items-center justify-between">
               <span className="text-[10px] text-slate-400 font-medium">Size: 2.4 MB</span>
               <button className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Download size={18} />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
