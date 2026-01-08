import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HubSlider from './components/HubSlider';
import AboutUs from './components/AboutUs';
import LiveFeed from './components/LiveFeed';
import CyberSathi from './components/CyberSathi';
import RoadmapTimeline from './components/RoadmapTimeline';
import SuccessStories from './components/SuccessStories';
import ResourceLibrary from './components/ResourceLibrary';
import LoginModal from './components/LoginModal';
import MeetTeamModal from './components/MeetTeamModal';

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Micro-interaction: Data Particles following the cursor
  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const MAX_PARTICLES = 12;

    const handleMouseMove = (e: MouseEvent) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      document.body.appendChild(particle);
      particles.push(particle);

      const animation = particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 0.6 },
        { transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`, opacity: 0 }
      ], {
        duration: 800,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        particle.remove();
        particles.shift();
      };

      if (particles.length > MAX_PARTICLES) {
        particles[0].remove();
        particles.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-[#0f172a] text-slate-200 selection:bg-cyan-500/30">
      {/* Global Futuristic Background: Campus Image + Starry Sky */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ 
            backgroundImage: 'url("https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/sri-chaitanya-campus-futuristic.jpg")',
            backgroundColor: '#0f172a'
          }}
        >
          {/* Custom style to replicate the user's provided image if raw link fails */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2072&auto=format&fit=crop')] bg-cover opacity-30 mix-blend-screen"></div>
        </div>
        
        {/* Obsidian Gradient Overlays for Readability - Slightly brighter via lower opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a] opacity-80"></div>
        <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_50%, transparent 0%, #0f172a 100%) opacity-50"></div>
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#22d3ee 0.5px, transparent 0.5px), linear-gradient(90deg, #22d3ee 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <main className="relative z-10 pt-20 pb-20">
        <section className="relative overflow-hidden">
          <Hero onStartClick={() => setIsLoginOpen(true)} />
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
          <section id="hubs">
            <HubSlider />
          </section>

          <section id="about-section">
            <AboutUs onMeetTeam={() => setIsTeamOpen(true)} />
          </section>

          <section id="roadmap">
            <RoadmapTimeline />
          </section>

          <section id="success">
            <SuccessStories />
          </section>

          <section id="resources" className="pb-16">
            <ResourceLibrary />
          </section>
        </div>
      </main>

      <LiveFeed />
      <CyberSathi />
      
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {isTeamOpen && <MeetTeamModal onClose={() => setIsTeamOpen(false)} />}
      
      <style>{`
        .bg-radial-gradient {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default App;