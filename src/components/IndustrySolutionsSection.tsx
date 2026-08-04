import React, { useState } from 'react';
import { INDUSTRY_SOLUTIONS } from '../data/mockData';
import { Check, ArrowRight } from 'lucide-react';

export const IndustrySolutionsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRY_SOLUTIONS[0].id);

  return (
    <section id="solutions-industry" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <span>INDUSTRY APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            Built for environments where <span className="text-[#3291B6]">complexity matters</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Tailored spatial models for capital-intensive industries demanding high uptime, spatial precision, and zero-defect safety.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRY_SOLUTIONS.map((item) => {
            const isSelected = selectedIndustry === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIndustry(item.id)}
                className={`p-8 rounded-3xl neu-raised-light neu-raised-light-hover bg-[#F1E2E2] border border-white/80 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected ? 'ring-2 ring-[#3291B6] shadow-2xl scale-[1.02]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl neu-inset-light flex items-center justify-center text-[#3291B6] bg-[#e8d6d6]">
                      <img src={item.iconUrl} alt={item.title} className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold font-mono text-[#3291B6] block leading-none">
                        {item.metric}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#101820] font-sans mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-gray-500 block mb-4">
                    {item.subtitle}
                  </span>

                  <p className="text-xs text-gray-700 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-300/60 mb-6">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-800">
                        <div className="w-4 h-4 rounded-full neu-inset-light flex items-center justify-center text-[#3291B6] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="inline-block px-4 py-2 rounded-xl neu-inset-light bg-[#e8d6d6] text-xs font-mono font-bold text-[#3291B6] border border-[#3291B6]/20 shadow-inner">
                    <span>{item.badge || 'EXPLORE ARCHITECTURE'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
