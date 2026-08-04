import React, { useState } from 'react';
import { PIPELINE_STAGES } from '../data/mockData';
import { CheckCircle2, ArrowRight, Sparkles, Terminal } from 'lucide-react';

export const PipelineSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(3); // Default to Digital Twin step

  const currentStage = PIPELINE_STAGES[activeStepIndex];

  return (
    <section id="technology" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <span>END-TO-END PIPELINE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            From physical environments to <span className="text-[#3291B6]">operational intelligence</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Click through the 7-stage spatial processing pipeline to see how raw field telemetry transforms into closed-loop physical actions.
          </p>
        </div>

        {/* Pipeline Horizontal / Responsive Grid Sequence */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            let badgeBg = 'text-gray-600';
            if (isActive) {
              if (stage.activeColor === 'teal') badgeBg = 'text-[#3291B6] border-[#3291B6]';
              if (stage.activeColor === 'lavender') badgeBg = 'text-[#BB8ED0] border-[#BB8ED0]';
              if (stage.activeColor === 'coral') badgeBg = 'text-[#E0A8A8] border-[#E0A8A8]';
            }

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl transition-all cursor-pointer text-left flex flex-col justify-between h-36 ${
                  isActive
                    ? 'neu-pressed-light bg-[#e5d3d3] border-t-4 border-t-[#3291B6] shadow-inner scale-[1.02]'
                    : 'neu-raised-light hover:neu-raised-light-hover bg-[#F1E2E2]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      isActive ? 'neu-inset-light bg-[#d8c5c5] ' + badgeBg : 'neu-inset-light text-gray-500'
                    }`}
                  >
                    {stage.step}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-[#3291B6]" />}
                </div>

                <div>
                  <h4 className={`text-[11px] font-bold font-mono uppercase tracking-wider leading-snug ${isActive ? 'text-[#101820]' : 'text-gray-700'}`}>
                    {stage.title}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-mono block mt-1 truncate">
                    {stage.metrics.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Inspector Box */}
        <div className="p-8 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stage Left Specs */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg neu-inset-light text-xs font-mono font-bold text-[#3291B6] bg-[#e8d6d6]">
                  STAGE {currentStage.step} OF 07
                </span>
                <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest">
                  PIPELINE MODULE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101820] font-sans">
                {currentStage.title}
              </h3>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                {currentStage.description}
              </p>

              <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6] text-xs font-mono text-gray-800 flex items-start gap-3">
                <Terminal className="w-5 h-5 text-[#3291B6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#3291B6] block mb-1">TECHNICAL SPECIFICATION</span>
                  <span>{currentStage.techDetails}</span>
                </div>
              </div>
            </div>

            {/* Stage Right Metric Banner */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl neu-inset-light bg-[#e5d0d0] border border-white/60 flex flex-col justify-between h-full gap-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600 block mb-2">
                    PERFORMANCE BENCHMARK
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#3291B6]">
                    {currentStage.metrics}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-300/60">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : PIPELINE_STAGES.length - 1))}
                    className="px-4 py-2 rounded-xl neu-raised-light text-xs font-bold uppercase font-mono text-gray-700 hover:text-[#3291B6] cursor-pointer"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev < PIPELINE_STAGES.length - 1 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl neu-raised-light text-xs font-bold uppercase font-mono text-[#3291B6] hover:text-[#101820] cursor-pointer flex items-center gap-1"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
