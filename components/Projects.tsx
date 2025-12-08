
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ImageOff } from 'lucide-react';

const Projects: React.FC = () => {
  // State to track which images failed to load
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Featured Projects</h2>
        <p className="text-slate-400 max-w-2xl">
          A collection of projects showcasing my expertise in Power BI, SQL, Python and Advanced Excel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 h-full"
          >
            {/* Image Container: Aspect Ratio 16:9 for Dashboards */}
            <div className="relative w-full aspect-video bg-slate-800 border-b border-slate-700/50 overflow-hidden">
              {imageErrors[project.id] ? (
                // Fallback UI if image fails to load
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-800 p-4 text-center">
                  <ImageOff className="w-10 h-10 mb-2 opacity-50" />
                  <span className="text-xs">Image not found</span>
                  <span className="text-[10px] font-mono mt-1 text-red-400/80 bg-red-900/20 px-2 py-1 rounded">
                    {project.imageUrl}
                  </span>
                </div>
              ) : (
                // Project Image
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  onError={() => handleImageError(project.id)}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors leading-tight">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-700/50 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
