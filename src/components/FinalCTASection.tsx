import React from 'react';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

interface FinalCTASectionProps {
  onRequestDemo: () => void;
  onExplorePlatform: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onRequestDemo,
  onExplorePlatform,
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Large Raised Neumorphic CTA Panel with Teal-to-Lavender Accent */}
        <div className="p-10 sm:p-16 rounded-3xl neu-raised-light bg-[#F1E2E2] border-2 border-white/90 shadow-2xl relative overflow-hidden text-center">
          
          {/* Visual Gradient Glow Pill Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3291B6] via-[#BB8ED0] to-[#3291B6]"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#BB8ED0]" />
            <span>THE NEXT FRONTIER OF OPERATIONAL INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101820] font-sans max-w-3xl mx-auto leading-[1.1]">
            The future of operations is <span className="text-[#3291B6]">spatial</span>.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">
            From physical environments to intelligent digital systems, Parallax Nest helps organizations understand more, simulate better, and operate smarter.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExplorePlatform}
              className="px-8 py-4 rounded-2xl neu-raised-light text-xs font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] transition-all cursor-pointer flex items-center gap-3 shadow-xl"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequestDemo}
              className="px-8 py-4 rounded-2xl neu-raised-light text-xs font-bold uppercase tracking-wider text-[#BB8ED0] hover:text-[#101820] bg-[#F1E2E2] border border-[#BB8ED0]/40 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Request a Demo</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-gray-600">
            <div>
              <span className="font-bold text-[#3291B6] block">99.4%</span>
              <span>ANOMALY PRECISION</span>
            </div>
            <div>
              <span className="font-bold text-[#BB8ED0] block">&lt;18 ms</span>
              <span>3D TWIN SYNC</span>
            </div>
            <div>
              <span className="font-bold text-[#3291B6] block">38%</span>
              <span>OPEX SAVINGS</span>
            </div>
            <div>
              <span className="font-bold text-[#E0A8A8] block">0 DOWNTIME</span>
              <span>ZERO DISRUPTION SIM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
