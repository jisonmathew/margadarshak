
import React, { useState } from 'react';
import { X, Copy, Check, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';

interface ShareModalProps {
  hubName: string;
  hubUrl: string;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ hubName, hubUrl, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { name: 'Twitter', icon: <Twitter size={18} />, url: `https://twitter.com/intent/tweet?text=Check out the ${hubName} on Margdarshak!&url=${encodeURIComponent(hubUrl)}`, color: 'hover:text-[#1DA1F2]' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(hubUrl)}`, color: 'hover:text-[#0A66C2]' },
    { name: 'Facebook', icon: <Facebook size={18} />, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(hubUrl)}`, color: 'hover:text-[#1877F2]' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-md glass-panel rounded-[2rem] border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">Neural Share</span>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase mt-1">Broadcast Hub</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Target Gateway</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <LinkIcon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{hubName}</p>
                  <p className="text-[10px] text-slate-500 truncate">{hubUrl}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Direct Link</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-400 truncate">
                  {hubUrl}
                </div>
                <button 
                  onClick={handleCopy}
                  className={`px-4 rounded-xl flex items-center justify-center transition-all ${
                    copied ? 'bg-green-500 text-white' : 'bg-white text-slate-900 hover:bg-cyan-400'
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <div className="flex gap-4">
                {shareLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all ${link.color} hover:bg-white/10 hover:border-white/20`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default ShareModal;
