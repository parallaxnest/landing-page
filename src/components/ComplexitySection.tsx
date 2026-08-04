import React, { useState } from 'react';
import { Wifi, Database, Radio, Server, Link, Sparkles, CheckCircle, ArrowDown } from 'lucide-react';

export const ComplexitySection: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <span>PHYSICAL OPERATIONS FRAGMENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            The physical world is connected. <span className="text-[#3291B6]">Your data should be too.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Physical facilities operate as a complex web of isolated sensors, legacy SCADA, BIM blueprints, and enterprise databases. Parallax Nest binds these siloed streams into a unified spatial graph.
          </p>

          {/* Interactive Toggle for Storytelling */}
          <div className="mt-8 inline-flex items-center p-2 rounded-2xl neu-inset-light gap-2">
            <button
              onClick={() => setIsConnected(false)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                !isConnected
                  ? 'neu-pressed-light text-[#E0A8A8] bg-[#e5d0d0]'
                  : 'neu-raised-light text-gray-600 hover:text-gray-900'
              }`}
            >
              Fragmented Silos
            </button>
            <button
              onClick={() => setIsConnected(true)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                isConnected
                  ? 'neu-raised-light text-[#3291B6] bg-[#F1E2E2] shadow-md border border-[#3291B6]/30'
                  : 'neu-raised-light text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#3291B6]" />
              <span>Parallax Spatial Layer</span>
            </button>
          </div>
        </div>

        {/* Dynamic Nodes Visual Transformation */}
        <div className="p-8 sm:p-12 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 relative z-10">
            {/* Silo Node 1 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-500 ${
                isConnected
                  ? 'neu-raised-light bg-[#F1E2E2] border-l-4 border-l-[#3291B6]'
                  : 'neu-inset-light bg-[#e8d6d6] opacity-80'
              }`}
            >
              <div className="w-12 h-12 rounded-xl neu-inset-light flex items-center justify-center text-[#3291B6] mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm font-mono text-[#101820]">CONNECTED ASSETS</h3>
              <p className="text-xs text-gray-600 mt-2">Real-time telemetry from equipment, devices, and operational environments.</p>
              <div className="mt-4 pt-3 border-t border-gray-300/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500">STATUS</span>
                <span className={isConnected ? 'text-[#3291B6] font-bold' : 'text-gray-400'}>
                  {isConnected ? 'INTELLIGENCE STREAM ACTIVE' : 'ISOLATED STREAM'}
                </span>
              </div>
            </div>

            {/* Silo Node 2 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-500 ${
                isConnected
                  ? 'neu-raised-light bg-[#F1E2E2] border-l-4 border-l-[#3291B6]'
                  : 'neu-inset-light bg-[#e8d6d6] opacity-80'
              }`}
            >
              <div className="w-12 h-12 rounded-xl neu-inset-light flex items-center justify-center text-[#3291B6] mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm font-mono text-[#101820]">SPATIAL MODELS</h3>
              <p className="text-xs text-gray-600 mt-2">Architectural plans, BIM data, CAD models, and environmental layouts.</p>
              <div className="mt-4 pt-3 border-t border-gray-300/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500">STATUS</span>
                <span className={isConnected ? 'text-[#3291B6] font-bold' : 'text-gray-400'}>
                  {isConnected ? 'DIGITAL TWIN GENERATED' : 'STATIC FILES'}
                </span>
              </div>
            </div>

            {/* Silo Node 3 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-500 ${
                isConnected
                  ? 'neu-raised-light bg-[#F1E2E2] border-l-4 border-l-[#BB8ED0]'
                  : 'neu-inset-light bg-[#e8d6d6] opacity-80'
              }`}
            >
              <div className="w-12 h-12 rounded-xl neu-inset-light flex items-center justify-center text-[#BB8ED0] mb-4">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm font-mono text-[#101820]">OPERATIONAL SYSTEMS</h3>
              <p className="text-xs text-gray-600 mt-2">Industrial controllers, automation networks, sensor infrastructure, and visual data sources.</p>
              <div className="mt-4 pt-3 border-t border-gray-300/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500">STATUS</span>
                <span className={isConnected ? 'text-[#BB8ED0] font-bold' : 'text-gray-400'}>
                  {isConnected ? 'LIVE DATA SYNCHRONIZED' : 'LOCAL LOGS'}
                </span>
              </div>
            </div>

            {/* Silo Node 4 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-500 ${
                isConnected
                  ? 'neu-raised-light bg-[#F1E2E2] border-l-4 border-l-[#BB8ED0]'
                  : 'neu-inset-light bg-[#e8d6d6] opacity-80'
              }`}
            >
              <div className="w-12 h-12 rounded-xl neu-inset-light flex items-center justify-center text-[#BB8ED0] mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm font-mono text-[#101820]">BUSINESS INTEGRATIONS</h3>
              <p className="text-xs text-gray-600 mt-2">Enterprise platforms, maintenance workflows, operational records, and business intelligence systems.</p>
              <div className="mt-4 pt-3 border-t border-gray-300/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500">STATUS</span>
                <span className={isConnected ? 'text-[#BB8ED0] font-bold' : 'text-gray-400'}>
                  {isConnected ? 'KNOWLEDGE GRAPH CONNECTED' : 'SPOKEN SEPARATELY'}
                </span>
              </div>
            </div>
          </div>

          {/* Connection Story Sequence Flow Bar */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 p-6 rounded-2xl neu-inset-light bg-[#e6d4d4]">
            
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl neu-raised-light font-mono font-bold text-xs text-[#101820] bg-[#F1E2E2]">
                1. PHYSICAL DATA
              </div>
              <span className="text-[#3291B6] font-bold">→</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl neu-raised-light font-mono font-bold text-xs text-[#3291B6] bg-[#F1E2E2] border border-[#3291B6]/30">
                2. SPATIAL CONTEXT
              </div>
              <span className="text-[#BB8ED0] font-bold">→</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl neu-raised-light font-mono font-bold text-xs text-[#BB8ED0] bg-[#F1E2E2] border border-[#BB8ED0]/30 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3291B6]" />
                <span>3. INTELLIGENT ENVIRONMENT</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
