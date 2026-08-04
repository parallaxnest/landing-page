import React, { useState } from 'react';
import { Sliders, RefreshCw, Play, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export const SimulationSection: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(true);
  const [capacity, setCapacity] = useState<number>(85);
  const [equipmentCount, setEquipmentCount] = useState<number>(3);
  const [airflowRate, setAirflowRate] = useState<number>(110);

  // Dynamic simulation outcomes
  const projectedOutput = Math.round((capacity * 0.35) + (equipmentCount * 8) + (airflowRate * 0.05));
  const thermalRisk = capacity > 92 || airflowRate < 95 ? 'HIGH RISK' : capacity > 82 ? 'MEDIUM RISK' : 'LOW RISK';
  const riskColor = thermalRisk === 'HIGH RISK' ? 'text-[#E0A8A8]' : thermalRisk === 'MEDIUM RISK' ? 'text-[#BB8ED0]' : 'text-[#3291B6]';

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>SIMULATION & SCENARIO ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            Model the future <span className="text-[#3291B6]">before</span> changing the real world.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Safely test capacity additions, line restructuring, thermal loads, and emergency evacuations in a digital environment before committing real capital.
          </p>

          {/* Mode Switcher */}
          <div className="mt-8 inline-flex items-center p-2 rounded-2xl neu-inset-light gap-2">
            <button
              onClick={() => setIsSimulating(false)}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                !isSimulating
                  ? 'neu-pressed-light text-[#101820] bg-[#e5d0d0]'
                  : 'neu-raised-light text-gray-600 hover:text-gray-900'
              }`}
            >
              [CURRENT STATE]
            </button>

            <button
              onClick={() => setIsSimulating(true)}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                isSimulating
                  ? 'neu-raised-light text-[#BB8ED0] bg-[#F1E2E2] border border-[#BB8ED0]/40 shadow-md'
                  : 'neu-raised-light text-gray-600 hover:text-gray-900'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>[SIMULATION MODE]</span>
            </button>
          </div>
        </div>

        {/* Side-by-Side Current vs Simulated State Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Controls Panel */}
          <div className={`lg:col-span-5 p-8 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-xl flex flex-col justify-between transition-all duration-500 ${!isSimulating ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
            <div>
              <h3 className="text-lg font-bold font-mono text-[#101820] uppercase tracking-wider mb-6 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#3291B6]" />
                <span>SCENARIO CONTROLS</span>
              </h3>

              {/* Slider 1: Target Line Capacity */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-gray-700 font-bold">TARGET LINE CAPACITY</span>
                  <span className="text-[#3291B6] font-extrabold">{capacity}%</span>
                </div>
                <div className="p-2 rounded-xl neu-inset-light bg-[#e8d6d6]">
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="w-full accent-[#3291B6] cursor-pointer"
                  />
                </div>
              </div>

              {/* Slider 2: Robotic Arm Additions */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-gray-700 font-bold">NEW ROBOTIC ARMS ADDED</span>
                  <span className="text-[#BB8ED0] font-extrabold">+{equipmentCount} Units</span>
                </div>
                <div className="p-2 rounded-xl neu-inset-light bg-[#e8d6d6]">
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={equipmentCount}
                    onChange={(e) => setEquipmentCount(Number(e.target.value))}
                    className="w-full accent-[#BB8ED0] cursor-pointer"
                  />
                </div>
              </div>

              {/* Slider 3: HVAC Airflow Rate */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-gray-700 font-bold">HVAC AIRFLOW VOLUME</span>
                  <span className="text-[#3291B6] font-extrabold">{airflowRate} CFM</span>
                </div>
                <div className="p-2 rounded-xl neu-inset-light bg-[#e8d6d6]">
                  <input
                    type="range"
                    min="80"
                    max="150"
                    value={airflowRate}
                    onChange={(e) => setAirflowRate(Number(e.target.value))}
                    className="w-full accent-[#3291B6] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-300/60 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">SIMULATION ENGINE:</span>
              <span className="text-[#3291B6] font-bold">MONTE CARLO 1,000 RUNS</span>
            </div>
          </div>

          {/* Right Outcome Metrics Box */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Current State Card */}
            <div className="p-6 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
                    CURRENT LIVE STATE
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6]">
                    <span className="text-[10px] font-mono text-gray-500 block">CURRENT CAPACITY</span>
                    <span className="text-2xl font-extrabold font-mono text-[#101820]">78%</span>
                  </div>

                  <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6]">
                    <span className="text-[10px] font-mono text-gray-500 block">NEW EQUIPMENT</span>
                    <span className="text-2xl font-extrabold font-mono text-gray-600">+0 Units</span>
                  </div>

                  <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6]">
                    <span className="text-[10px] font-mono text-gray-500 block">OPERATIONAL RISK</span>
                    <span className="text-lg font-bold font-mono text-green-600">LOW (MINIMAL)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-300/60 text-[11px] font-mono text-gray-500 text-center">
                BASELINE SCADA MEASUREMENTS
              </div>
            </div>

            {/* Simulated State Card */}
            <div className={`p-6 rounded-3xl neu-raised-light bg-[#F1E2E2] border-2 shadow-xl flex flex-col justify-between transition-all duration-500 ${isSimulating ? 'border-[#BB8ED0]/40' : 'border-transparent opacity-50 grayscale pointer-events-none'}`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#BB8ED0] uppercase tracking-widest flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>SIMULATED STATE</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full neu-inset-light text-[10px] font-mono text-[#BB8ED0] font-bold">
                    PREDICTED
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6]">
                    <span className="text-[10px] font-mono text-gray-500 block">PROJECTED CAPACITY</span>
                    <span className="text-2xl font-extrabold font-mono text-[#3291B6]">{capacity}%</span>
                  </div>

                  <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6]">
                    <span className="text-[10px] font-mono text-gray-500 block">ESTIMATED OUTPUT GAIN</span>
                    <span className="text-2xl font-extrabold font-mono text-[#BB8ED0]">+{projectedOutput}%</span>
                  </div>

                  <div className="p-4 rounded-xl neu-inset-light bg-[#e8d6d6]">
                    <span className="text-[10px] font-mono text-gray-500 block">PREDICTED RISK LEVEL</span>
                    <span className={`text-lg font-bold font-mono ${riskColor}`}>{thermalRisk}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-300/60 text-[11px] font-mono text-[#BB8ED0] text-center font-bold">
                SIMULATION CONFIDENCE: 97.8%
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
