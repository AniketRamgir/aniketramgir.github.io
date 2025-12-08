import React from 'react';
import { ViewState } from '../types';
import { Layers, Award, User, Terminal } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navItems: { id: ViewState; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'certificates', label: 'Certificates', icon: Award },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-indigo-500 p-1.5 rounded-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              Aniket's Portfolio
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button could go here, omitting for brevity in this specific requested scope but keeping layout responsive */}
        </div>
      </div>
      
      {/* Mobile Nav (Simple version) */}
      <div className="md:hidden border-t border-slate-800 flex justify-around p-2 bg-slate-900">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-md text-xs font-medium ${
              currentView === item.id ? 'text-indigo-400' : 'text-slate-400'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;