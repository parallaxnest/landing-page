import React from 'react';
import { Cpu, Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101820] text-gray-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a
              href="/"
              className="flex items-center group focus:outline-none w-fit -ml-12"
              aria-label="Parallax Nest Home"
            >
              <img 
                src="/Parallex Graphics/logoo.svg" 
                alt="Parallax Nest Logo" 
                className="h-10 object-contain drop-shadow-sm" 
              />
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Spatial Intelligence for Smarter Digital Operations. Transforming complex physical environments into intelligent digital experiences.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-[11px] font-mono text-gray-400">
                SYSTEM STATUS: ALL SPATIAL NODES OPERATIONAL
              </span>
            </div>
          </div>

          {/* Links Col 1: Platform */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase text-[#3291B6] tracking-wider mb-4">
              PLATFORM & TECH
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              <li><a href="#platform" className="hover:text-white transition-colors">The Platform</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Spatial Pipeline</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Core Capabilities</a></li>
              <li><a href="#digital-twin" className="hover:text-white transition-colors">Digital Twin Studio</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Command Center HUD</a></li>
            </ul>
          </div>

          {/* Links Col 2: Company & Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase text-[#BB8ED0] tracking-wider mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              <li><a href="#about" className="hover:text-white transition-colors">Why Parallax Nest?</a></li>
              <li><a href="#solutions-industry" className="hover:text-white transition-colors">Industry Solutions</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links Col 3: Resources & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase text-gray-300 tracking-wider mb-4">
              RESOURCES & LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              <li><a href="#faq" className="hover:text-white transition-colors font-mono">FAQ & Documentation</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors font-mono">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors font-mono">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Col */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-gray-300 tracking-wider mb-4">
                CONNECT
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/ParallaxNest1/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl neu-raised-dark text-gray-400 hover:text-[#3291B6] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@ParallaxNest"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl neu-raised-dark text-gray-400 hover:text-[#3291B6] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/ParallaxNeto"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl neu-raised-dark text-gray-400 hover:text-[#3291B6] transition-colors"
                  aria-label="X"
                >
                  <XIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl neu-raised-dark text-gray-400 hover:text-[#3291B6] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 p-3 rounded-xl neu-raised-dark text-xs font-mono text-[#3291B6] hover:text-white flex items-center gap-2 w-fit cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Full Width Map */}
        <div className="pt-10 pb-4 w-full">
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden neu-inset-dark border border-gray-800 relative shadow-inner group">
            <iframe
              title="Parallax Nest Headquarters"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(80%) opacity(0.7) contrast(1.2)' }}
              className="absolute inset-0 group-hover:filter-none transition-all duration-700"
              src="https://maps.google.com/maps?q=206%20N%20Spring%20St,%20Los%20Angeles,%20CA&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <span>© {new Date().getFullYear()} Parallax Nest Inc. All rights reserved.</span>
          <span>SPATIAL AI & DIGITAL TWIN PLATFORM</span>
        </div>
      </div>
    </footer>
  );
};
