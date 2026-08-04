import React from "react";
import { ArrowDown } from "lucide-react";

export const AboutSection: React.FC = () => {
  const systemLayers = [
    {
      title: "PHYSICAL WORLD",
      subtitle: "Assets, Equipment & Infrastructure",
      description:
        "Physical machines, factory floors, commercial towers, pipeline networks, and environmental conditions.",
      icon: "/Parallex Graphics/about.svg",
      color: "border-l-[#101820]",
      accentColor: "text-[#101820]",
    },
    {
      title: "SPATIAL CONTEXT",
      subtitle: "3D Geometry & Topological Mapping",
      description:
        "BIM blueprints, LiDAR spatial meshes, coordinates, and physical proximity constraints binding components together.",
      icon: "/Parallex Graphics/about (2).svg",
      color: "border-l-[#3291B6]",
      accentColor: "text-[#3291B6]",
    },
    {
      title: "DIGITAL TWIN",
      subtitle: "Live Synchronized 3D Environment",
      description:
        "A dynamic, photorealistic digital mirror receiving sub-second SCADA and IoT sensor updates.",
      icon: "/Parallex Graphics/about (3).svg",
      color: "border-l-[#BB8ED0]",
      accentColor: "text-[#BB8ED0]",
    },
    {
      title: "AI INTELLIGENCE",
      subtitle: "Context-Aware Analytics & Simulation",
      description:
        "Predictive scenario planning, root-cause anomaly detection, and automated operational directives.",
      icon: "/Parallex Graphics/about (4).svg",
      color: "border-l-[#3291B6]",
      accentColor: "text-[#3291B6]",
    },
  ];

  return (
    <section
      id="platform"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E2E2] text-[#1a232b] relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] w-fit">
              <span>ABOUT PARALLAX NEST</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101820] font-sans leading-[1.15]">
              Building Smarter Digital Experiences{" "}
              <span className="text-[#3291B6]">for Real-World </span>{" "}
              Operations.
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              At Parallax Nest, we believe every physical environment has the
              potential to become an intelligent digital ecosystem. We help
              organizations transform facilities, infrastructure, and
              operational assets into interactive digital twins powered by
              Spatial AI.
            </p>

            <div className="p-6 rounded-2xl neu-inset-light bg-[#e8d6d6] border border-[#3291B6]/20">
              <p className="text-xs font-mono text-gray-700 leading-relaxed">
                <strong className="text-[#3291B6]">CORE MISSION:</strong> To
                eliminate physical operational blind spots by bridging
                real-world spatial physics with high-speed artificial
                intelligence.
              </p>
            </div>
          </div>

          {/* Right Neumorphic Vertical System Diagram */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {systemLayers.map((layer, idx) => {
              return (
                <React.Fragment key={layer.title}>
                  <div
                    className={`p-6 rounded-2xl neu-raised-light neu-raised-light-hover bg-[#F1E2E2] border-l-4 ${layer.color} transition-all`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl neu-inset-light flex items-center justify-center bg-[#e8d6d6]">
                          <img
                            src={layer.icon}
                            alt={`${layer.title} icon`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold font-mono tracking-wider text-[#101820] flex items-center gap-2">
                            <span>{layer.title}</span>
                          </h3>
                          <span
                            className={`text-xs font-mono font-semibold ${layer.accentColor}`}
                          >
                            {layer.subtitle}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 bg-[#e8d6d6] px-3 py-1 rounded-lg neu-inset-light">
                        LAYER 0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-3 font-normal leading-relaxed pl-16">
                      {layer.description}
                    </p>
                  </div>

                  {/* Connecting Arrow between blocks */}
                  {idx < systemLayers.length - 1 && (
                    <div className="flex justify-center my-[-4px] z-10">
                      <div className="w-8 h-8 rounded-full neu-inset-light flex items-center justify-center text-[#3291B6]">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
