
import React, { useState } from 'react';
import { X, Lock, Mail, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for login would go here
    console.log('Logging in with:', email, password);
    alert('This is a demonstration. Integration with backend is required for actual login.');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Margdarshak Login</h2>
              <p className="text-sm text-slate-500 font-medium">Access your career dashboard</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@globalvista.edu"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                  Password
                </label>
                <button type="button" className="text-[10px] font-bold text-[#0072bc] hover:underline uppercase tracking-widest">
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] focus:bg-white transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 ml-1">
              <input 
                type="checkbox" 
                id="remember"
                className="w-4 h-4 rounded border-slate-300 text-[#0072bc] focus:ring-[#0072bc]"
              />
              <label htmlFor="remember" className="text-xs font-bold text-slate-500 uppercase tracking-widest cursor-pointer">
                Keep me signed in
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-4 bg-[#0072bc] text-white rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 hover:bg-[#005a96] hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign In to Margdarshak
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 font-medium">
              New to Global Vista? <button className="text-[#ed1c24] font-bold hover:underline">Contact Administration</button>
            </p>
          </div>
        </div>
        
        {/* Accent Bar */}
        <div className="h-1.5 w-full flex">
          <div className="flex-1 bg-[#0072bc]"></div>
          <div className="flex-1 bg-[#ed1c24]"></div>
          <div className="flex-1 bg-[#fff200]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
