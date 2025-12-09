
import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';
import { Certificate } from '../types';
import { Award, ExternalLink, Medal, GraduationCap, ImageOff } from 'lucide-react';

const CertificateSection: React.FC<{ 
  title: string; 
  icon: React.ElementType; 
  items: Certificate[] 
}> = ({ title, icon: Icon, items }) => {
  if (items.length === 0) return null;

  // Simple state to handle individual image errors
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group flex flex-col bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800 transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5"
          >
            {/* Certificate Preview Image */}
            <div className="relative w-full h-48 sm:h-56 bg-slate-900 border-b border-slate-700/50 overflow-hidden">
              {item.imageUrl && !imgErrors[item.id] ? (
                <>
                  {/* Background Blur Layer - Fills the container colorfully */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.imageUrl} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover blur-xl opacity-30 scale-110 grayscale-0"
                      aria-hidden="true"
                    />
                  </div>
                  
                  {/* Foreground Image - Shows full certificate clearly */}
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    onError={() => handleImgError(item.id)}
                    referrerPolicy="no-referrer"
                    className="relative w-full h-full object-contain z-10 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-800/50 p-4 text-center">
                  <ImageOff className="w-8 h-8 mb-2 opacity-40" />
                  <span className="text-xs opacity-60">Preview not available</span>
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-indigo-400/80 text-sm font-medium mb-4">
                   {item.issuer}
                </p>
                <p className="text-slate-500 text-xs mb-4">
                  Issued: {item.date}
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-slate-700/50">
                {item.credentialUrl ? (
                  <a 
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-slate-700 hover:bg-indigo-600 text-slate-200 hover:text-white py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button disabled className="w-full bg-slate-800 text-slate-500 py-2.5 rounded-lg text-sm font-medium cursor-not-allowed">
                    No Link Available
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Certificates: React.FC = () => {
  const badges = CERTIFICATES.filter(c => c.category === 'badge');
  const certificates = CERTIFICATES.filter(c => c.category === 'certificate');
  const trainings = CERTIFICATES.filter(c => c.category === 'training');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">Professional Credentials</h2>
        <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          Validation of my expertise through industry-recognized certifications, digital badges, and specialized training programs.
        </p>
      </div>

      <div className="space-y-4">
        <CertificateSection 
          title="Digital Badges" 
          icon={Medal} 
          items={badges} 
        />
        
        <CertificateSection 
          title="Certifications" 
          icon={Award} 
          items={certificates} 
        />
        
        <CertificateSection 
          title="Trainings & Masterclass" 
          icon={GraduationCap} 
          items={trainings} 
        />
      </div>
    </div>
  );
};

export default Certificates;
