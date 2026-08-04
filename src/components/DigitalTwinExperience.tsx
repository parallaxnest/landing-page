import React, { useState } from 'react';
import { Eye, Layers, Flame, Wind, Activity, Shield, Sparkles, Sliders, RefreshCw, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';
import { AssetNode } from '../types';

export const DigitalTwinExperience: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<AssetNode>(HERO_ASSETS[1]);
  const [activeViewMode, setActiveViewMode] = useState<'iso' | 'top' | 'side'>('iso');
  const [activeLayers, setActiveLayers] = useState<{ [key: string]: boolean }>({
    thermal: true,
    flow: true,
    iot: true,
    security: false
  });
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const toggleLayer = (layerKey: string) => {
    setActiveLayers((prev) => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  return (
    <section id="digital-twin" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3291B6]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#BB8ED0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-dark text-xs font-mono tracking-wider text-[#3291B6] border border-[#3291B6]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3291B6] animate-pulse"></span>
            <span>SECTION 07 • DIGITAL TWIN STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            See your operations in a <span className="text-[#3291B6]">new dimension</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Interact with a photorealistic, spatial representation of physical facilities. Filter telemetry layers, inspect asset kinematics, and explore AI node insights in real time.
          </p>
        </div>

        {/* Studio Command Toolbar */}
        <div className="p-4 rounded-2xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/30 mb-6 flex flex-wrap items-center justify-between gap-4">
          
          {/* Camera Perspective Angle Toggle Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400 mr-2 uppercase tracking-wider hidden sm:inline">
              PERSPECTIVE:
            </span>
            <button
              onClick={() => setActiveViewMode('iso')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeViewMode === 'iso'
                  ? 'neu-pressed-dark text-[#3291B6] border border-[#3291B6]/50 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-300 hover:text-white'
              }`}
            >
              3D ISOMETRIC
            </button>
            <button
              onClick={() => setActiveViewMode('top')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeViewMode === 'top'
                  ? 'neu-pressed-dark text-[#3291B6] border border-[#3291B6]/50 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-300 hover:text-white'
              }`}
            >
              TOP-DOWN FLOORPLAN
            </button>
            <button
              onClick={() => setActiveViewMode('side')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeViewMode === 'side'
                  ? 'neu-pressed-dark text-[#3291B6] border border-[#3291B6]/50 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-300 hover:text-white'
              }`}
            >
              SIDE ELEVATION
            </button>
          </div>

          {/* Spatial Layer Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => toggleLayer('thermal')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLayers.thermal
                  ? 'neu-pressed-dark text-[#E0A8A8] border border-[#E0A8A8]/40 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-400 opacity-60'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>THERMAL</span>
            </button>

            <button
              onClick={() => toggleLayer('flow')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLayers.flow
                  ? 'neu-pressed-dark text-[#3291B6] border border-[#3291B6]/40 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-400 opacity-60'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>AIRFLOW</span>
            </button>

            <button
              onClick={() => toggleLayer('iot')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLayers.iot
                  ? 'neu-pressed-dark text-[#BB8ED0] border border-[#BB8ED0]/40 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-400 opacity-60'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>IOT MESH</span>
            </button>

            <button
              onClick={() => toggleLayer('security')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLayers.security
                  ? 'neu-pressed-dark text-green-400 border border-green-500/40 bg-[#0d131a]'
                  : 'neu-raised-dark text-gray-400 opacity-60'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>SECURITY</span>
            </button>
          </div>

          {/* Zoom Level Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 15))}
              className="p-1.5 rounded-lg neu-raised-dark text-gray-300 hover:text-white"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#3291B6] w-12 text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(140, z + 15))}
              className="p-1.5 rounded-lg neu-raised-dark text-gray-300 hover:text-white"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Large 3D Digital Twin Viewport & Inspector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Interactive Canvas Area */}
          <div className="lg:col-span-8">
            <div className="p-6 rounded-3xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/30 shadow-2xl relative">
              
              <div
                className="relative h-[420px] sm:h-[500px] rounded-2xl neu-inset-dark bg-[#080d12] border border-[#3291B6]/20 overflow-hidden flex items-center justify-center transition-all duration-500"
                style={{ transform: `scale(${zoomLevel / 100})`, perspective: '1000px' }}
              >
                
                {/* 3D Perspective Plane */}
                <div 
                  className="absolute inset-0 w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 
                      activeViewMode === 'iso' ? 'rotateX(55deg) rotateZ(-45deg) scale(1.3)' :
                      activeViewMode === 'side' ? 'rotateX(75deg) rotateZ(0deg) scale(1.4) translateY(15%)' :
                      'rotateX(0deg) rotateZ(0deg) scale(1)'
                  }}
                >
                  {/* SVG 3D Spatial Wireframe Overlay */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="twinGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(50,145,182,0.12)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#twinGrid)" />

                  {/* Thermal Heatmap Gradient Overlays */}
                  {activeLayers.thermal && (
                    <g className="opacity-40 transition-opacity">
                      <circle cx="52%" cy="48%" r="90" fill="url(#thermalGradient)" />
                      <circle cx="65%" cy="75%" r="70" fill="url(#coralGradient)" />
                      <defs>
                        <radialGradient id="thermalGradient">
                          <stop offset="0%" stopColor="#BB8ED0" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#BB8ED0" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="coralGradient">
                          <stop offset="0%" stopColor="#E0A8A8" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#E0A8A8" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </g>
                  )}

                  {/* Airflow Vector Streams */}
                  {activeLayers.flow && (
                    <g className="stroke-[#3291B6] opacity-70">
                      <path d="M 10% 30% C 30% 20%, 50% 40%, 90% 30%" fill="none" strokeWidth="2" className="animate-data-flow" />
                      <path d="M 10% 60% C 40% 70%, 60% 50%, 90% 80%" fill="none" strokeWidth="2" className="animate-data-flow" />
                    </g>
                  )}

                  {/* IoT Mesh Connections */}
                  {activeLayers.iot && (
                    <g stroke="#BB8ED0" strokeWidth="1.5" strokeDasharray="6 4" className="opacity-80">
                      <line x1="28%" y1="32%" x2="52%" y2="48%" />
                      <line x1="52%" y1="48%" x2="74%" y2="36%" />
                      <line x1="52%" y1="48%" x2="38%" y2="68%" />
                      <line x1="52%" y1="48%" x2="65%" y2="75%" />
                    </g>
                  )}
                </svg>

                {/* Central AI Node Callout */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl neu-raised-dark bg-[#141f2a] border border-[#BB8ED0] text-[#BB8ED0] neu-glow-lavender flex items-center justify-center animate-pulse-node cursor-pointer">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-[#101820]/90 border border-[#BB8ED0]/40 text-[11px] font-mono text-[#BB8ED0] shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#BB8ED0] animate-ping"></span>
                    <span>SPATIAL REASONING NODE</span>
                  </div>
                </div>

                {/* Asset Node Markers */}
                {HERO_ASSETS.map((asset) => {
                  const isSelected = selectedAsset.id === asset.id;
                  let borderClr = 'border-[#3291B6] text-[#3291B6]';
                  if (asset.status === 'warning') borderClr = 'border-[#BB8ED0] text-[#BB8ED0]';
                  if (asset.status === 'critical') borderClr = 'border-[#E0A8A8] text-[#E0A8A8]';

                  return (
                    <button
                      key={asset.id}
                      onClick={() => setSelectedAsset(asset)}
                      style={{ left: `${asset.x}%`, top: `${asset.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl neu-raised-dark border cursor-pointer transition-all ${
                        isSelected
                          ? 'scale-125 z-30 ring-2 ring-white bg-[#1a2b3c]'
                          : 'scale-100 z-10 hover:scale-110 bg-[#141f2a]/95'
                      } ${borderClr}`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-mono font-bold text-white">{asset.name.split(' ')[0]}</span>
                        <span className="text-[10px] font-mono text-gray-300">{asset.health}% Health</span>
                      </div>
                    </button>
                  );
                })}
                </div> {/* End 3D Perspective Plane */}

                {/* Viewport HUD Footer */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl neu-raised-dark bg-[#101820]/90 border border-gray-800 text-[11px] font-mono text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span>LIVE STREAM: 10,000 EVT/SEC</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl neu-raised-dark bg-[#101820]/90 border border-gray-800 text-[11px] font-mono text-[#3291B6]">
                    SPATIAL BOUNDS: 120m x 85m x 14m
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Selected Asset Details & Environment Telemetry Panel */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top Stat Summary */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/20 text-center">
                <span className="text-[10px] font-mono text-gray-400 block mb-1">ENV HEALTH</span>
                <span className="text-xl font-bold font-mono text-[#3291B6]">98.4%</span>
              </div>
              <div className="p-4 rounded-2xl neu-raised-dark bg-[#141f2a] border border-[#BB8ED0]/20 text-center">
                <span className="text-[10px] font-mono text-gray-400 block mb-1">CONNECTED</span>
                <span className="text-xl font-bold font-mono text-[#BB8ED0]">1,284</span>
              </div>
              <div className="p-4 rounded-2xl neu-raised-dark bg-[#141f2a] border border-[#E0A8A8]/20 text-center">
                <span className="text-[10px] font-mono text-gray-400 block mb-1">ALERTS</span>
                <span className="text-xl font-bold font-mono text-[#E0A8A8]">06</span>
              </div>
            </div>

            {/* Asset Inspector Panel */}
            <div className="p-6 rounded-3xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/30 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#3291B6]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    ASSET INSPECTOR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">ID: {selectedAsset.id}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-sans">{selectedAsset.name}</h3>
                <span className="text-xs font-mono text-gray-400">{selectedAsset.zone}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl neu-inset-dark bg-[#0d131a]">
                  <span className="text-[10px] font-mono text-gray-400 block">HEALTH RATING</span>
                  <span className="text-lg font-bold font-mono text-[#3291B6]">{selectedAsset.health}%</span>
                </div>

                <div className="p-3 rounded-xl neu-inset-dark bg-[#0d131a]">
                  <span className="text-[10px] font-mono text-gray-400 block">TEMPERATURE</span>
                  <span className="text-lg font-bold font-mono text-white">{selectedAsset.temp}</span>
                </div>

                <div className="p-3 rounded-xl neu-inset-dark bg-[#0d131a]">
                  <span className="text-[10px] font-mono text-gray-400 block">WORK LOAD</span>
                  <span className="text-lg font-bold font-mono text-white">{selectedAsset.load}</span>
                </div>

                <div className="p-3 rounded-xl neu-inset-dark bg-[#0d131a]">
                  <span className="text-[10px] font-mono text-gray-400 block">EFFICIENCY</span>
                  <span className="text-lg font-bold font-mono text-white">{selectedAsset.efficiency}</span>
                </div>
              </div>

              {/* AI Recommendation Insight */}
              <div className="p-4 rounded-xl neu-inset-dark bg-[#0d131a] border border-[#BB8ED0]/30 mt-2">
                <div className="flex items-center gap-2 mb-1.5 text-[#BB8ED0]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">AI RECOMMENDATION</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-mono">
                  {selectedAsset.aiInsight}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
