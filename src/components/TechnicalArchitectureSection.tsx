import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../data/mockData';
import { ArchitectureLayer } from '../types';
import { Cpu, ArrowDown, Database, Layers, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const TechnicalArchitectureSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer>(ARCHITECTURE_LAYERS[2]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-white relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#BB8ED0_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-dark text-xs font-mono tracking-wider text-[#BB8ED0] border border-[#BB8ED0]/30 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>SECTION 12 • SYSTEM STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            The architecture behind <span className="text-[#BB8ED0]">intelligent environments</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Modular, high-throughput micro-architecture built for zero-trust security, multi-protocol field ingestion, and real-time spatial graph reasoning.
          </p>
        </div>

        {/* Architecture Stack & Details Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Neumorphic Module Stack */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = selectedLayer.layer === layer.layer;

              let flowBadge = 'text-[#3291B6] border-[#3291B6]/30';
              let borderLeft = 'border-l-[#3291B6]';
              if (layer.flowType === 'lavender') {
                flowBadge = 'text-[#BB8ED0] border-[#BB8ED0]/30';
                borderLeft = 'border-l-[#BB8ED0]';
              } else if (layer.flowType === 'coral') {
                flowBadge = 'text-[#E0A8A8] border-[#E0A8A8]/30';
                borderLeft = 'border-l-[#E0A8A8]';
              }

              return (
                <div
                  key={layer.layer}
                  onClick={() => setSelectedLayer(layer)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer border-l-4 ${borderLeft} ${
                    isSelected
                      ? 'neu-pressed-dark bg-[#1a2938] border-white/40 ring-1 ring-white/30 scale-[1.01]'
                      : 'neu-raised-dark bg-[#141f2a] hover:bg-[#182634]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold text-gray-400 bg-[#0d131a] px-2.5 py-1 rounded-lg neu-inset-dark">
                        {layer.step}
                      </span>
                      <h3 className="text-sm font-bold font-mono text-white tracking-wider">
                        {layer.layer}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full neu-inset-dark border ${flowBadge}`}>
                      {layer.flowType === 'teal' ? 'DATA FLOW' : layer.flowType === 'lavender' ? 'AI PROCESSING' : 'OPERATIONAL DISPATCH'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 font-sans mt-2 line-clamp-1">
                    {layer.component}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected Layer Inspector Detail Box */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-8 rounded-3xl neu-raised-dark bg-[#141f2a] border border-[#BB8ED0]/30 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#BB8ED0]" />
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                    MODULE SPECIFICATION
                  </span>
                </div>
                <span className="text-xs font-mono text-[#3291B6]">{selectedLayer.step}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white font-sans mb-1">
                {selectedLayer.layer}
              </h3>
              <span className="text-xs font-mono font-bold text-[#BB8ED0] block mb-4">
                {selectedLayer.component}
              </span>

              <p className="text-sm text-gray-300 leading-relaxed font-sans mb-6">
                {selectedLayer.description}
              </p>

              {/* Technical Specifications Checklist */}
              <div className="space-y-3 p-5 rounded-2xl neu-inset-dark bg-[#0d131a] border border-gray-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  TECHNICAL CAPABILITIES:
                </span>
                {selectedLayer.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-mono text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#3291B6] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>SECURITY: SOC2 TYPE II</span>
                <span className="text-[#3291B6] font-bold">LATENCY: &lt;15ms</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
