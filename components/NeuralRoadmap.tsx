
import React from 'react';
import { Target, Compass, Zap, Award } from 'lucide-react';

const STEPS = [
  { icon: <Target className="text-blue-600" />, title: 'Set Goals', desc: 'Define your vision' },
  { icon: <Compass className="text-blue-600" />, title: 'Explore', desc: 'Find your path' },
  { icon: <Zap className="text-blue-600" />, title: 'Build Skills', desc: 'Bridge the gap' },
  { icon: <Award className="text-blue-600" />, title: 'Achieve', desc: 'Reach your peak' },
];

const NeuralRoadmap: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {STEPS.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
              {step.icon}
            </div>
            <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
            <p className="text-slate-500 text-xs mt-1">{step.desc}</p>
            
            {idx < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-slate-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeuralRoadmap;
