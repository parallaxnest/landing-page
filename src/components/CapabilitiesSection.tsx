import React, { useState } from 'react';
import { CAPABILITY_CARDS } from '../data/mockData';
import { CapabilityCard } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface CapabilitiesSectionProps {
  onSelectCapability?: (capability: CapabilityCard) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const [activeCardId, setActiveCardId] = useState<string>(CAPABILITY_CARDS[0].id);

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'spatial-engine': return '/Parallex Graphics/core platform.svg';
      case 'digital-twin': return '/Parallex Graphics/core platform (2).svg';
      case 'simulation-framework': return '/Parallex Graphics/core platform (3).svg';
      case 'ai-analytics': return '/Parallex Graphics/core platform (4).svg';
      case 'operations-center': return '/Parallex Graphics/core platform (5).svg';
      default: return '/Parallex Graphics/core platform.svg';
    }
  };

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <span>CORE PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            One platform. Multiple layers of <span className="text-[#3291B6]">spatial intelligence</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Designed for mission-critical industrial, facilities, and physical operations demanding real-time precision and spatial context.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITY_CARDS.map((card) => {
            const iconPath = getCardIcon(card.id);
            const isActive = activeCardId === card.id;

            let borderAccent = 'border-t-[#3291B6]';
            let iconColor = 'text-[#3291B6]';
            let badgeColor = 'text-[#3291B6] bg-[#e2d0d0]';

            if (card.color === 'lavender') {
              borderAccent = 'border-t-[#BB8ED0]';
              iconColor = 'text-[#BB8ED0]';
              badgeColor = 'text-[#BB8ED0] bg-[#e2d0d0]';
            } else if (card.color === 'coral') {
              borderAccent = 'border-t-[#E0A8A8]';
              iconColor = 'text-[#E0A8A8]';
              badgeColor = 'text-[#E0A8A8] bg-[#e2d0d0]';
            } else if (card.color === 'teal-lavender') {
              borderAccent = 'border-t-[#3291B6]';
              iconColor = 'text-[#BB8ED0]';
            }

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                className={`p-8 rounded-3xl neu-raised-light neu-raised-light-hover bg-[#F1E2E2] border-t-4 ${borderAccent} transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive ? 'shadow-2xl ring-2 ring-[#3291B6]/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl neu-inset-light flex items-center justify-center bg-[#e8d6d6]">
                      <img src={iconPath} alt={`${card.title} icon`} className="w-8 h-8 object-contain" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full neu-inset-light ${badgeColor}`}>
                      {card.metricValue}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#101820] font-sans mb-1">
                    {card.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-gray-500 block mb-4">
                    {card.subtitle}
                  </span>

                  <p className="text-xs text-gray-700 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-300/60">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-800">
                        <div className="w-4 h-4 rounded-full neu-inset-light flex items-center justify-center shrink-0 mt-0.5 text-[#3291B6]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags & Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-gray-600 px-2.5 py-1 rounded-lg neu-inset-light bg-[#e8d6d6]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl neu-inset-light bg-[#e8d6d6] flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500">{card.metricLabel}</span>
                    <span className="font-bold text-[#101820]">{card.metricValue}</span>
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
