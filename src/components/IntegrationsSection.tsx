import React, { useState } from 'react';
import { INTEGRATION_NODES } from '../data/mockData';
import { IntegrationNode } from '../types';
import { Network, Database, Radio, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<IntegrationNode>(INTEGRATION_NODES[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>INTEGRATIONS & DATA ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans">
            Connect the systems that <span className="text-[#3291B6]">power your operations</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Plug directly into BIM software, industrial SCADA controllers, enterprise ERPs, and IoT clouds with bi-directional streaming drivers.
          </p>
        </div>

        {/* Integration Hub Diagram */}
        <div className="p-8 sm:p-12 rounded-3xl neu-raised-light bg-[#F1E2E2] border border-white/80 shadow-2xl relative mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {INTEGRATION_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-6 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? 'neu-pressed-light bg-[#e2d0d0] border-l-4 border-l-[#3291B6] shadow-inner scale-[1.02]'
                      : 'neu-raised-light neu-raised-light-hover bg-[#F1E2E2]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-gray-500 bg-[#e8d6d6] px-2.5 py-1 rounded-md neu-inset-light">
                      {node.category}
                    </span>
                    <span className="text-xs font-mono text-[#3291B6] font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#3291B6] animate-pulse"></span>
                      <span>{node.status.toUpperCase()}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold font-sans text-[#101820] mb-1">
                    {node.name}
                  </h3>
                  <span className="text-xs font-mono text-gray-600 block mb-3">
                    PROTOCOL: {node.protocol}
                  </span>

                  <p className="text-xs text-gray-700 leading-relaxed font-normal">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Central Connecting Data Hub Bar */}
          <div className="p-6 rounded-2xl neu-inset-light bg-[#e6d4d4] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl neu-raised-light flex items-center justify-center text-[#3291B6] bg-[#F1E2E2]">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-mono text-[#101820]">PARALLAX NEST SPATIAL GRAPH HUB</h4>
                <p className="text-xs text-gray-600">Bi-directional 120+ Industrial Connector Drivers</p>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl neu-raised-light bg-[#F1E2E2] font-mono text-xs text-[#3291B6] font-bold">
              ZERO-TRUST END-TO-END ENCRYPTED
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
