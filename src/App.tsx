import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ComplexitySection } from './components/ComplexitySection';
import { AboutSection } from './components/AboutSection';
import { PipelineSection } from './components/PipelineSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { DigitalTwinExperience } from './components/DigitalTwinExperience';
import { AIIntelligenceSection } from './components/AIIntelligenceSection';
import { SimulationSection } from './components/SimulationSection';
import { CommandCenterSection } from './components/CommandCenterSection';
import { IndustrySolutionsSection } from './components/IndustrySolutionsSection';
import { TechnicalArchitectureSection } from './components/TechnicalArchitectureSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { DemoModal } from './components/DemoModal';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { TermsAndConditionsSection } from './components/TermsAndConditionsSection';
import { CookieBanner } from './components/CookieBanner';
import { ProductPage } from './components/ProductPage';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleExplorePlatform = () => {
    const el = document.querySelector('#digital-twin');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F1E2E2] text-[#1a232b] antialiased selection:bg-[#3291B6] selection:text-white font-sans">
      
      {/* 01. Floating Neumorphic Navigation */}
      <Navigation onRequestDemo={handleOpenDemoModal} />

      {window.location.pathname === '/privacy' ? (
        <PrivacyPolicySection />
      ) : window.location.pathname === '/terms' ? (
        <TermsAndConditionsSection />
      ) : window.location.pathname === '/product' ? (
        <ProductPage />
      ) : (
        <>
          {/* 02. Hero Section — Spatial Intelligence */}
          <HeroSection
            onRequestDemo={handleOpenDemoModal}
            onExplorePlatform={handleExplorePlatform}
          />

      {/* 03. The Complexity of Physical Operations */}
      <ComplexitySection />

      {/* 04. About Parallax Nest */}
      <AboutSection />

      {/* 05. The Spatial Intelligence Pipeline */}
      <PipelineSection />

      {/* 06. Core Platform Capabilities */}
      <CapabilitiesSection />

      {/* 07. Interactive Digital Twin Experience */}
      <DigitalTwinExperience />

      {/* 08. AI Environment Intelligence */}
      <AIIntelligenceSection />

      {/* 09. Simulation & Scenario Planning */}
      <SimulationSection />

      {/* 10. Spatial Operations Command Center */}
      <CommandCenterSection />

      {/* 11. Industry Solutions */}
      <IndustrySolutionsSection />

      {/* 12. Technical Architecture */}
      <TechnicalArchitectureSection />

      {/* 13. Integrations & Data Ecosystem */}
      <IntegrationsSection />

      {/* 14. Pricing */}
      <PricingSection onRequestDemo={handleOpenDemoModal} />

      {/* 15. Enterprise Testimonials & Case Studies */}
      <TestimonialsSection />

      {/* 16. FAQ */}
      <FAQSection />

      {/* 16. Contact / Request Demo */}
      <ContactSection />

      {/* 17. Final CTA */}
      <FinalCTASection
        onRequestDemo={handleOpenDemoModal}
        onExplorePlatform={handleExplorePlatform}
      />

      {/* 18. Footer */}
      <FooterSection />
      </>
      )}

      {/* Global Modals & Overlays */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
      <CookieBanner />

    </div>
  );
}
