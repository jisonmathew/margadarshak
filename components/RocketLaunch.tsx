
import React, { useEffect, useState } from 'react';

interface RocketLaunchProps {
  onComplete: () => void;
}

const RocketLaunch: React.FC<RocketLaunchProps> = ({ onComplete }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Launch Portal Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[150px] animate-pulse"></div>
      
      {/* Rocket Container */}
      <div className="absolute bottom-0 right-[15%] w-20 h-40 animate-rocket-takeoff">
        {/* Holographic Rocket Body */}
        <div className="relative w-full h-full">
          {/* Main Body */}
          <div className="absolute inset-x-4 top-0 bottom-10 bg-white/10 backdrop-blur-md border border-white/40 rounded-t-full shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {/* Window */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400/40 border border-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>
          
          {/* Fins */}
          <div className="absolute bottom-8 left-0 w-6 h-12 bg-fuchsia-500/30 border-l border-white/20 -skew-x-12 rounded-bl-lg"></div>
          <div className="absolute bottom-8 right-0 w-6 h-12 bg-fuchsia-500/30 border-r border-white/20 skew-x-12 rounded-br-lg"></div>
          
          {/* Plasma Engine Flame */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-10 h-32">
             <div className="w-full h-full bg-gradient-to-t from-transparent via-fuchsia-500 to-white opacity-80 blur-sm animate-plasma-pulse"></div>
             {/* Sparks/Particles */}
             <div className="absolute top-0 inset-x-0 flex justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Trailing Particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="absolute bottom-0 right-[15%] w-1 h-1 bg-fuchsia-400 rounded-full animate-particle-float"
          style={{
            left: `${15 + (Math.random() - 0.5) * 5}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random()
          }}
        ></div>
      ))}

      <style>{`
        @keyframes rocket-takeoff {
          0% { transform: translateY(100px) scale(0.8); opacity: 0; }
          20% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
        }
        @keyframes plasma-pulse {
          0%, 100% { transform: scaleY(1); opacity: 0.8; }
          50% { transform: scaleY(1.5); opacity: 1; }
        }
        @keyframes particle-float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .animate-rocket-takeoff {
          animation: rocket-takeoff 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-plasma-pulse {
          animation: plasma-pulse 0.1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RocketLaunch;
