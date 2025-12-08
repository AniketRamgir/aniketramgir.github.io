import React from 'react';
import { PROFILE, SKILLS } from '../constants';
import { Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-medium tracking-wide text-sm uppercase">
              Portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight leading-tight">
              Hi, I'm <span className="text-indigo-500">{PROFILE.name}</span>.
              <br />
              <span className="text-slate-400">{PROFILE.title}</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-indigo-400" />
              {PROFILE.location}
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-indigo-400" />
              {PROFILE.email}
            </div>
          </div>

          <div className="flex gap-4">
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-indigo-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-4">
             <button 
                onClick={() => onNavigate('projects')}
                className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
             >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        <div className="relative">
            {/* Abstract Background Blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">Technical Expertise</h3>
                <div className="space-y-6">
                    {SKILLS.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                                <span className="text-xs text-slate-500">{skill.category}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                    className="bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;