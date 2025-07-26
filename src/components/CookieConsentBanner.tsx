import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';

const COOKIE_CONSENT_KEY = 'cookie_consent';

type CookieConsent = {
  accepted: boolean;
  timestamp: number;
  version: string;
};

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user has already given consent
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay to ensure the page is loaded before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    // If consent was given, load analytics
    if (consent.accepted) {
      loadAnalytics();
    }
    
    return () => {};
  }, []);

  const getCookieConsent = (): CookieConsent | null => {
    if (typeof window === 'undefined') return null;
    
    const consentJson = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentJson) return null;
    
    try {
      return JSON.parse(consentJson);
    } catch (e) {
      console.error('Failed to parse cookie consent', e);
      return null;
    }
  };

  const saveCookieConsent = (accepted: boolean) => {
    if (typeof window === 'undefined') return;
    
    const consent: CookieConsent = {
      accepted,
      timestamp: Date.now(),
      version: '1.0.0',
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    
    if (accepted) {
      loadAnalytics();
    }
    
    // Animate out
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const loadAnalytics = () => {
    // Add your analytics scripts here
    // Example: Google Analytics, Facebook Pixel, etc.
    console.log('Loading analytics...');
  };

  const handleAccept = () => {
    saveCookieConsent(true);
  };

  const handleReject = () => {
    saveCookieConsent(false);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible || !isMounted) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50 transform transition-transform duration-300 ${
        isAnimating ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-heading"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-heading" className="text-lg font-medium mb-1">
              We value your privacy
            </h2>
            <p id="cookie-consent-description" className="text-sm text-gray-300">
              We use cookies and similar technologies to provide the best experience on our website. 
              By clicking "Accept All", you consent to our use of cookies as described in our 
              <a 
                href="/privacy-policy" 
                className="text-blue-400 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our privacy policy"
              >
                Privacy Policy
              </a>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReject}
              className="w-full sm:w-auto"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="w-full sm:w-auto"
            >
              Accept All
            </Button>
            
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close cookie consent banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
