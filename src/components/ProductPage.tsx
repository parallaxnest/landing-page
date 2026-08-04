import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Cpu, 
  Layers, 
  Orbit, 
  Zap, 
  Box, 
  Workflow, 
  BarChart4, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export const ProductPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Real-time 3D Simulation",
      description: "Experience your physical assets in a highly responsive 3D space. Make adjustments and run simulations before executing them in the real world.",
      icon: <Box className="w-6 h-6 text-[#3291B6]" />
    },
    {
      title: "Predictive AI Engine",
      description: "Harness the power of AI to anticipate bottlenecks, forecast maintenance needs, and dynamically optimize operations on the fly.",
      icon: <Cpu className="w-6 h-6 text-[#3291B6]" />
    },
    {
      title: "Seamless IoT Integration",
      description: "Connect thousands of sensors instantly. Our architecture translates complex raw data into actionable spatial intelligence without latency.",
      icon: <Orbit className="w-6 h-6 text-[#3291B6]" />
    },
    {
      title: "Automated Workflows",
      description: "Set triggers and smart alerts. Let TwinOS handle routine adjustments autonomously while you maintain high-level oversight.",
      icon: <Workflow className="w-6 h-6 text-[#3291B6]" />
    },
    {
      title: "Advanced Analytics",
      description: "Dive deep into historical data and future projections. Generate rich, interactive reports to drive strategic business decisions.",
      icon: <BarChart4 className="w-6 h-6 text-[#3291B6]" />
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your digital twin is protected by state-of-the-art encryption. Role-based access ensures data is only available to authorized personnel.",
      icon: <ShieldCheck className="w-6 h-6 text-[#3291B6]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1E2E2] text-[#1a232b] antialiased selection:bg-[#3291B6] selection:text-white font-sans overflow-x-hidden pt-24 pb-16">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div className="mb-10 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl neu-raised-light hover:neu-raised-light-hover text-sm font-bold uppercase tracking-wider text-[#3291B6] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-light text-xs font-mono font-bold tracking-wider text-[#3291B6] mb-6">
              <Zap className="w-4 h-4" />
              <span>THE ULTIMATE PLATFORM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101820] font-sans leading-tight mb-6">
              Parallax <span className="text-[#3291B6]">TwinOS</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-normal mb-8 max-w-lg">
              The foundational operating system for physical spaces. TwinOS unifies your hardware, sensors, and spatial data into a single, interactive 3D digital twin. Take absolute control of your environment.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="/#contact"
                className="px-8 py-4 rounded-xl neu-raised-light hover:neu-pressed-light text-sm font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/#technology"
                className="px-8 py-4 rounded-xl neu-raised-light hover:neu-raised-light-hover text-sm font-bold uppercase tracking-wider text-[#101820] transition-all cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square max-h-[500px] w-full rounded-[3rem] p-4 neu-inset-light bg-[#e8d6d6] relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-[#101820]/5 to-transparent rounded-[2.5rem]"></div>
               {/* Animated Element representing TwinOS */}
               <div className="relative w-full h-full rounded-[2.5rem] neu-raised-light bg-[#F1E2E2] flex items-center justify-center border border-white/60 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#3291B6_0%,_transparent_70%)]"></div>
                  <Layers className="w-32 h-32 text-[#3291B6] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                  
                  {/* Floating abstract tech elements */}
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full neu-raised-light bg-[#F1E2E2] flex items-center justify-center animate-[bounce_4s_infinite]">
                     <Orbit className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-2xl neu-raised-light bg-[#F1E2E2] flex items-center justify-center animate-[bounce_5s_infinite_0.5s]">
                     <Cpu className="w-6 h-6 text-[#3291B6]" />
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101820] font-sans mb-4">
              Core Capabilities
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Everything you need to orchestrate complex physical operations, built natively into one cohesive operating system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl neu-raised-light bg-[#F1E2E2] hover:neu-pressed-light transition-all duration-300 border border-white/50 flex flex-col items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl neu-inset-light bg-[#e8d6d6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#101820] tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="rounded-[3rem] p-10 md:p-16 neu-raised-light bg-[#F1E2E2] border border-white/60 relative overflow-hidden text-center max-w-4xl mx-auto">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#3291B6]/10 blur-3xl rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#101820]/5 blur-2xl rounded-full"></div>
           
           <h2 className="text-3xl md:text-5xl font-extrabold text-[#101820] mb-6 relative z-10">Ready to transform your operations?</h2>
           <p className="text-gray-700 mb-10 max-w-xl mx-auto relative z-10 text-lg">
             Join leading enterprises leveraging Parallax TwinOS to bridge the gap between physical spaces and digital intelligence.
           </p>
           
           <a 
              href="/#contact"
              className="inline-flex px-10 py-4 rounded-xl neu-raised-light hover:neu-pressed-light text-sm font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] transition-all items-center justify-center gap-2 shadow-lg relative z-10 cursor-pointer"
            >
              <span>Get Started Now</span>
              <Zap className="w-4 h-4 fill-white" />
            </a>
        </div>

      </div>
    </div>
  );
};
