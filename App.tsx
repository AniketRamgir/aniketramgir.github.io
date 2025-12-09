import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Handle browser back button navigation
  useEffect(() => {
    // Set the initial history state so we have a base to return to
    if (!window.history.state) {
      window.history.replaceState({ view: 'home' }, '', '');
    }

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setCurrentView(event.state.view);
      } else {
        // Fallback to home if history state is missing
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewState) => {
    if (view === currentView) return;
    
    // Push new state to browser history
    window.history.pushState({ view }, '', '');
    setCurrentView(view);
    
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-500">
            <Hero onNavigate={handleNavigate} />
          </div>
        );
      case 'projects':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Projects />
          </div>
        );
      case 'certificates':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Certificates />
          </div>
        );
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="relative z-0">
        {/* Decorative background elements */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
        </div>

        {renderContent()}
      </main>
      
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 mt-auto">
        <p>&copy; {new Date().getFullYear()} Aniket Ramgir</p>
      </footer>
    </div>
  );
};

export default App;