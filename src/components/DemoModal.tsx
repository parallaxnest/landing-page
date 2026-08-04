import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, Cpu, Sliders } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'build' | 'success'>('build');
  const [facilityType, setFacilityType] = useState('Automotive Manufacturing');
  const [assetVolume, setAssetVolume] = useState('1,000 - 10,000 Assets');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl p-8 rounded-3xl neu-raised-dark bg-[#141f2a] border border-[#3291B6]/40 text-white shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl neu-raised-dark text-gray-400 hover:text-white cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'build' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl neu-inset-dark flex items-center justify-center text-[#3291B6]">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold font-sans text-white">
                  Instant Spatial Twin Demo
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  BUILD YOUR CUSTOM ENVIRONMENT PREVIEW
                </span>
              </div>
            </div>

            <form onSubmit={handleNext} className="space-y-5 mt-6">
              
              {/* Select Facility */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                  1. SELECT ENVIRONMENT CATEGORY
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Automotive Manufacturing',
                    'Commercial High-Rise',
                    'Data Center & Telco',
                    'Chemical & Refinery'
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFacilityType(cat)}
                      className={`p-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                        facilityType === cat
                          ? 'neu-pressed-dark text-[#3291B6] border border-[#3291B6]/50 bg-[#0d131a]'
                          : 'neu-raised-dark text-gray-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Scale */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                  2. ESTIMATED ASSET SCALE
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['<1,000 Assets', '1,000 - 10,000 Assets', '10,000+ Assets'].map((vol) => (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => setAssetVolume(vol)}
                      className={`p-3 rounded-xl text-xs font-mono transition-all text-center cursor-pointer ${
                        assetVolume === vol
                          ? 'neu-pressed-dark text-[#BB8ED0] border border-[#BB8ED0]/50 bg-[#0d131a]'
                          : 'neu-raised-dark text-gray-400 hover:text-white'
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">YOUR NAME *</label>
                  <div className="p-1 rounded-xl neu-inset-dark bg-[#0d131a]">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Wright"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-transparent text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">WORK EMAIL *</label>
                  <div className="p-1 rounded-xl neu-inset-dark bg-[#0d131a]">
                    <input
                      type="email"
                      required
                      placeholder="marcus@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-transparent text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl neu-raised-dark text-xs font-bold uppercase tracking-wider text-white bg-[#3291B6] hover:bg-[#287796] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Custom Demo Environment</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl neu-raised-dark flex items-center justify-center text-[#3291B6] mx-auto">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-sans">
              Digital Twin Provisioned!
            </h3>
            <p className="text-xs text-gray-300 font-mono leading-relaxed">
              We have generated a custom spatial simulation for <strong>{facilityType}</strong> ({assetVolume}). Access credentials sent to <strong>{email}</strong>.
            </p>
            <button
              onClick={() => {
                setStep('build');
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl neu-raised-dark text-xs font-bold font-mono text-[#3291B6] cursor-pointer"
            >
              Return to Platform
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
