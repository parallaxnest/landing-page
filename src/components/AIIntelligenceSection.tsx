import React, { useState } from 'react';
import { Cpu, Sparkles, AlertTriangle, ArrowRight, ShieldAlert, CheckCircle, Loader2, CheckCircle2 } from 'lucide-react';

export const AIIntelligenceSection: React.FC = () => {
  const [activeAnomaly, setActiveAnomaly] = useState<number>(0);
  const [dispatchStatus, setDispatchStatus] = useState<Record<number, 'idle' | 'dispatching' | 'dispatched'>>({});

  const handleDispatch = () => {
    if (dispatchStatus[activeAnomaly] === 'dispatching' || dispatchStatus[activeAnomaly] === 'dispatched') return;
    
    setDispatchStatus(prev => ({ ...prev, [activeAnomaly]: 'dispatching' }));
    setTimeout(() => {
      setDispatchStatus(prev => ({ ...prev, [activeAnomaly]: 'dispatched' }));
    }, 1200);
  };

  const anomalies = [
    {
      zone: 'Zone B - Mezzanine Assembly',
      title: 'Vibration & Thermal Coupling Anomaly',
      metric: 'Activity increased by 18%',
      recommendation: 'Review asset routing and re-tension Conveyor 2 drive belt within 48 hours.',
      status: 'HIGH PRIORITY',
      color: 'coral'
    },
    {
      zone: 'Zone A - Precision Robotics',
      title: 'Airflow Recirculation Hotspot',
      metric: 'Thermal load +4.2 °C above baseline',
      recommendation: 'Adjust HVAC damper B-4 open angle by +15° to dissipate localized heat pocket.',
      status: 'PREDICTIVE ACTION',
      color: 'lavender'
    },
    {
      zone: 'Data Hub - North Wing',
      title: 'Data Ingestion Queue Surge',
      metric: 'Packet throughput +32%',
      recommendation: 'Provision secondary edge gateway node to balance telemetry payload.',
      status: 'OPTIMIZATION',
      color: 'teal'
    }
  ];

  const currentAnomaly = anomalies[activeAnomaly];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#BB8ED0] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI ENVIRONMENT INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            AI that understands the environment, <span className="text-[#BB8ED0]">not just the numbers</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Traditional AI evaluates numbers in isolation. Parallax Nest correlates physical coordinates, structural walls, airflow dynamics, and mechanical proximity to understand true operational causality.
          </p>
        </div>

        {/* Visual Formula Transformation Banner */}
        <div className="p-8 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center md:text-left">
            
            <div className="p-4 rounded-2xl neu-inset-light bg-[#e8d6d6] w-full md:w-auto flex-1">
              <span className="text-gray-500 block mb-1">INPUT 01</span>
              <span className="text-sm font-bold text-[#3291B6]">RAW DATA FEEDS</span>
            </div>

            <span className="text-xl font-bold text-[#3291B6]">+</span>

            <div className="p-4 rounded-2xl neu-inset-light bg-[#e8d6d6] w-full md:w-auto flex-1">
              <span className="text-gray-500 block mb-1">INPUT 02</span>
              <span className="text-sm font-bold text-[#BB8ED0]">SPATIAL CONTEXT</span>
            </div>

            <span className="text-xl font-bold text-[#BB8ED0]">+</span>

            <div className="p-4 rounded-2xl neu-inset-light bg-[#e8d6d6] w-full md:w-auto flex-1">
              <span className="text-gray-500 block mb-1">INPUT 03</span>
              <span className="text-sm font-bold text-[#101820]">ENVIRONMENTAL RELATIONSHIPS</span>
            </div>

            <span className="text-xl font-bold text-[#101820] font-sans">→</span>

            <div className="p-4 rounded-2xl neu-raised-light bg-[#F1E2E2] border border-[#BB8ED0]/40 w-full md:w-auto flex-1 neu-raised-light-hover">
              <span className="text-[#BB8ED0] block mb-1 font-bold">OUTPUT</span>
              <span className="text-sm font-extrabold text-[#101820]">CONTEXT-AWARE AI</span>
            </div>

          </div>
        </div>

        {/* AI Insight Interactive Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Anomaly Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-600 mb-2">
              SELECT REAL-TIME AI INCIDENT:
            </h3>

            {anomalies.map((item, idx) => {
              const isSelected = activeAnomaly === idx;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveAnomaly(idx)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'neu-pressed-light bg-[#e5d0d0] border-l-4 border-l-[#E0A8A8] shadow-inner'
                      : 'neu-raised-light bg-[#F1E2E2] hover:bg-[#ebd9d9]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#3291B6]">{item.zone}</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full neu-inset-light font-bold text-[#E0A8A8]">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-sans text-[#101820]">{item.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Featured Raised AI Insight Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl neu-raised-light bg-[#F1E2E2] border-2 border-white/90 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl neu-inset-light flex items-center justify-center text-[#E0A8A8] bg-[#e8d6d6]">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E0A8A8] block">AI INSIGHT CARD</span>
                    <span className="text-xs font-mono text-gray-600">{currentAnomaly.zone}</span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg neu-inset-light font-mono text-xs text-[#3291B6]">
                  99.4% CONFIDENCE
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#101820] font-sans mb-3">
                  {currentAnomaly.title}
                </h3>

                <div className="inline-block px-4 py-2 rounded-xl neu-inset-light bg-[#e8d6d6] font-mono text-xs text-[#E0A8A8] font-bold">
                  {currentAnomaly.metric}
                </div>
              </div>

              {/* Recommended Action Container */}
              <div className="p-6 rounded-2xl neu-inset-light bg-[#e8d6d6] border border-[#BB8ED0]/30 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BB8ED0] block mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>RECOMMENDED ACTION</span>
                </span>
                <p className="text-sm text-gray-800 leading-relaxed font-sans font-medium">
                  {currentAnomaly.recommendation}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-600 pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#3291B6]" />
                  <span>SCADA Dispatch Ready</span>
                </span>

                <button 
                  onClick={handleDispatch}
                  disabled={dispatchStatus[activeAnomaly] === 'dispatching' || dispatchStatus[activeAnomaly] === 'dispatched'}
                  className={`px-5 py-2.5 rounded-xl neu-raised-light font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    dispatchStatus[activeAnomaly] === 'dispatched' 
                      ? 'text-emerald-600 bg-emerald-50/50 cursor-default' 
                      : 'text-[#3291B6] hover:text-[#101820]'
                  }`}
                >
                  {dispatchStatus[activeAnomaly] === 'dispatching' ? (
                    <>
                      <span>Dispatching...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : dispatchStatus[activeAnomaly] === 'dispatched' ? (
                    <>
                      <span>Directive Dispatched</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Dispatch Maintenance Directive</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
