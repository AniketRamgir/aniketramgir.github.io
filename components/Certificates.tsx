
import React from 'react';
import { CERTIFICATES } from '../constants';
import { Certificate } from '../types';
import { Award, ExternalLink, Medal, GraduationCap } from 'lucide-react';

const CertificateSection: React.FC<{ 
  title: string; 
  icon: React.ElementType; 
  items: Certificate[] 
}> = ({ title, icon: Icon, items }) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group flex flex-col bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800 transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-indigo-400/80 text-sm font-medium mb-4">
                   {item.issuer}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700/50">
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
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Professional Credentials</h2>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
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
          title="Trainings & Workshops" 
          icon={GraduationCap} 
          items={trainings} 
        />
      </div>
    </div>
  );
};

export default Certificates;
