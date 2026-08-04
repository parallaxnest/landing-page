import React, { useState, useEffect } from "react";
import {
  Layers,
  Menu,
  X,
  ArrowUpRight,
  LayoutGrid,
  Cpu,
  Orbit,
  Gauge,
  Building2,
  BadgeDollarSign,
  CircleHelp,
} from "lucide-react";

interface NavigationProps {
  onRequestDemo: () => void;
  activeSection?: string;
}

const NAV_LINKS = [
  { name: "Platform", href: "#platform", icon: LayoutGrid },
  { name: "Technology", href: "#technology", icon: Cpu },
  { name: "Digital Twin", href: "#digital-twin", icon: Orbit },
  { name: "Command Center", href: "#solutions", icon: Gauge },
  { name: "Industries", href: "#solutions-industry", icon: Building2 },
  { name: "Pricing", href: "#pricing", icon: BadgeDollarSign },
  { name: "FAQ", href: "#faq", icon: CircleHelp },
];

export const Navigation: React.FC<NavigationProps> = ({ onRequestDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "";
      for (const link of NAV_LINKS) {
        if (link.href.startsWith("#")) {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              current = link.href;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-500 ${
        scrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav
          className={`px-5 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "neu-raised-dark bg-[#101820]/95 backdrop-blur-md border border-[#3291B6]/20"
              : "neu-raised-dark bg-[#101820]/80 backdrop-blur-sm"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center group focus:outline-none -ml-10 md:ml-0"
            aria-label="Parallax Nest Home"
          >
            <img 
              src="/Parallex Graphics/logoo.svg" 
              alt="Parallax Nest Logo" 
              className="h-7 md:h-10 object-contain drop-shadow-sm" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-xl neu-inset-dark">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#141f2a] text-[#3291B6] shadow-sm"
                      : "text-gray-300 hover:text-[#3291B6] hover:bg-[#141f2a] hover:shadow-sm"
                  }`}
                  title={!isActive ? link.name : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-w-xs opacity-100" : "max-w-0 opacity-0"}`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/product"
              className="px-5 py-2.5 rounded-xl neu-raised-dark hover:neu-glow-teal text-xs font-bold uppercase tracking-wider text-[#3291B6] hover:text-white bg-[#141f2a] hover:bg-[#3291B6] border border-[#3291B6]/30 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Nexvanta</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl neu-raised-dark text-gray-300 hover:text-[#3291B6] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl neu-raised-dark bg-[#101820] border border-[#3291B6]/20 shadow-2xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-between ${
                      activeSection === link.href
                        ? "text-[#3291B6] bg-[#1a232b]"
                        : "text-gray-200 neu-inset-dark hover:text-[#3291B6]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 shrink-0" />
                      <span>{link.name}</span>
                    </div>
                    <span className="text-xs text-[#3291B6] font-mono">→</span>
                  </button>
                );
              })}
              <div className="pt-3 border-t border-gray-800 mt-2">
                <a
                  href="/product"
                  className="w-full py-3 rounded-xl neu-raised-dark text-xs font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] flex items-center justify-center gap-2 shadow-lg"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore Nexvanta</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
