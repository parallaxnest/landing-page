import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== 'true' && consent !== 'dismissed') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem('cookie-consent', 'dismissed');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[95vw] sm:w-auto flex justify-center">
      <div className="neu-raised-light bg-[#F1E2E2]/95 backdrop-blur-xl border border-white/60 p-3 sm:px-4 sm:py-3 rounded-3xl sm:rounded-full flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full max-w-md sm:max-w-none shadow-2xl">
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center neu-inset-light text-[#3291B6] shrink-0">
            <Cookie className="w-5 h-5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-xs font-semibold text-gray-700 font-sans leading-relaxed flex-1 text-left">
            We use cookies to optimize your experience and analyze traffic.
          </span>
        </div>
        
        <div className="flex items-center justify-end sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-gray-300 pt-3 sm:pt-0 sm:pl-4 w-full sm:w-auto">
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-5 py-2.5 sm:px-4 sm:py-2 rounded-full neu-raised-light hover:neu-raised-light-hover transition-all text-xs font-bold uppercase tracking-wider text-[#3291B6]"
          >
            Accept
          </button>
          <button
            onClick={handleClose}
            className="p-2.5 sm:p-2 rounded-full text-gray-500 hover:text-[#3291B6] hover:bg-white/50 transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-4 sm:h-4" />
          </button>
        </div>
        
      </div>
    </div>
  );
};
