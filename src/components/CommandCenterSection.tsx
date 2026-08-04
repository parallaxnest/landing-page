import React, { useState } from 'react';
import {
  Activity,
  Globe,
  Radio,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  Sliders,
  Filter,
  Layers,
  Search,
  Maximize2,
  Minimize2
} from 'lucide-react';

export const CommandCenterSection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('All Zones');
  const [timelineVal, setTimelineVal] = useState<number>(100); // 100% is live now

  const kpiData = [
    { title: 'ACTIVE ENVIRONMENTS', val: '08', metric: 'Global Sites', color: 'text-white' },
    { title: 'CONNECTED ASSETS', val: '12,482', metric: 'Live Telemetry', color: 'text-[#3291B6]' },
    { title: 'OPERATIONAL HEALTH', val: '96.8%', metric: '+0.4% this week', color: 'text-[#3291B6]' },
    { title: 'ACTIVE ALERTS', val: '06', metric: '0 Critical', color: 'text-[#E0A8A8]' }
  ];

  const liveAlerts = [
    { time: '14:22:05', zone: 'Zone B', text: 'Vibration deviation on Conveyor 2', severity: 'warning' },
    { time: '14:18:12', zone: 'Utility Room', text: 'Chiller Pump 3 thermal spike', severity: 'critical' },
    { time: '14:05:44', zone: 'North Wing', text: 'Server Rack E-09 queue sync ok', severity: 'optimal' }
  ];

  const filteredAlerts = selectedZone === 'All Zones'
    ? liveAlerts
    : liveAlerts.filter(alert => alert.zone === selectedZone);

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-dark text-xs font-mono tracking-wider text-[#3291B6] border border-[#3291B6]/30 mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>SECTION 10 • ENTERPRISE COMMAND HUD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            One command center for <span className="text-[#3291B6]">every environment</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            A unified, multi-facility spatial command platform. Monitor operations, inspect live digital twins, track AI insights, and execute closed-loop SCADA commands.
          </p>
        </div>

        {/* Top Raised Neumorphic KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {kpiData.map((kpi) => (
            <div
              key={kpi.title}
              className="p-6 rounded-2xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/20 flex flex-col justify-between"
            >
              <span className="text-[11px] font-mono text-gray-400 font-semibold block mb-2">
                {kpi.title}
              </span>
              <div className={`text-3xl sm:text-4xl font-extrabold font-mono ${kpi.color} mb-1`}>
                {kpi.val}
              </div>
              <span className="text-xs font-mono text-gray-400">
                {kpi.metric}
              </span>
            </div>
          ))}
        </div>

        {/* Dashboard Frame Interface */}
        <div className="p-6 sm:p-8 rounded-3xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/30 shadow-2xl">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                PARALLAX OS v4.2 • COMMAND CENTER HUD
              </span>
            </div>

            {/* Zone Filter Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-gray-400 mr-2 hidden sm:inline">FILTER ZONE:</span>
              {['All Zones', 'Zone A', 'Zone B', 'North Wing', 'Utility Room'].map((z) => (
                <button
                  key={z}
                  onClick={() => setSelectedZone(z)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                    selectedZone === z
                      ? 'neu-pressed-dark text-[#3291B6] border border-[#3291B6]/50 bg-[#0d131a]'
                      : 'neu-raised-dark text-gray-400 hover:text-white'
                  }`}
                >
                  {z}
                </button>
              ))}
            </div>
          </div>

          {/* Main Workspace Split Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* Center Digital Twin Viewport */}
            <div className="lg:col-span-8 rounded-2xl h-[360px] p-4 neu-inset-dark bg-[#080d12] border border-[#3291B6]/20 relative flex flex-col justify-between overflow-hidden transition-all duration-500">
              
              {/* Live Video Background */}
              <video
                src="/Parallex Graphics/livevideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
              />

              {/* Simulated Spatial Grid Floor Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3291B6_1px,transparent_1px)] [background-size:20px_20px]"></div>

              {/* Top Viewport Indicator */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-gray-400">
                <div className="px-3 py-1 rounded-lg neu-raised-dark bg-[#101820]/90 border border-gray-800 text-[#3291B6]">
                  VIEWPORT: MAIN FACILITY 01 • {selectedZone.toUpperCase()}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold bg-[#101820]/80 px-2 py-0.5 rounded">● LIVE STREAM</span>
                </div>
              </div>

              {/* Spacing element to push timeline to bottom */}
              <div className="my-auto"></div>

              {/* Bottom Interactive Spatial Timeline Slider */}
              <div className="relative z-10 p-3 rounded-xl neu-raised-dark bg-[#101820]/90 border border-gray-800">
                <div className="flex justify-between items-center text-[11px] font-mono text-gray-400 mb-1">
                  <span className="flex items-center gap-1">
                    <RotateCcw className="w-3.5 h-3.5 text-[#3291B6]" />
                    <span>TIMELINE REWIND / REPLAY:</span>
                  </span>
                  <span className="text-[#3291B6] font-bold">
                    {timelineVal === 100 ? 'NOW (LIVE)' : `-${100 - timelineVal} MINS AGO`}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={timelineVal}
                  onChange={(e) => setTimelineVal(Number(e.target.value))}
                  className="w-full accent-[#3291B6] cursor-pointer"
                />
              </div>

            </div>

            {/* Right Live Operational Stream Feed */}
            <div className="lg:col-span-4 p-5 rounded-2xl neu-inset-dark bg-[#0a1016] border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-xs font-mono font-bold text-gray-300">
                  <span className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#E0A8A8] animate-pulse" />
                    <span>LIVE EVENTS STREAM</span>
                  </span>
                  <span className="text-gray-500">REALTIME</span>
                </div>

                <div className="space-y-3">
                  {filteredAlerts.length > 0 ? (
                    filteredAlerts.map((alert, idx) => (
                      <div key={idx} className="p-3 rounded-xl neu-raised-dark bg-[#141f2a] border border-gray-800/80">
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                          <span className="text-[#3291B6] font-bold">{alert.zone}</span>
                          <span className="text-gray-500">{alert.time}</span>
                        </div>
                        <p className="text-xs text-gray-200 font-sans font-medium">{alert.text}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 rounded-xl neu-raised-dark bg-[#141f2a] border border-gray-800/80 text-center flex flex-col items-center justify-center">
                      <span className="text-gray-500 text-xs font-mono">No active events</span>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Auto Dispatch Summary */}
              <div className="p-3 rounded-xl neu-inset-dark bg-[#0d131a] border border-[#BB8ED0]/30 mt-4 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-1.5 text-[#BB8ED0] font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI AUTOMATION DISPATCH</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Auto-routing work order #9821 to Field Technician Team Bravo.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
