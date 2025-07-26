/**
 * Accessibility utilities for the application
 */

/**
 * Focus management for modals and dialogs
 */
export const trapFocus = (element: HTMLElement | null) => {
  if (!element) return;
  
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};

/**
 * Make sure all interactive elements are keyboard accessible
 */
export const ensureKeyboardNavigation = () => {
  // Add keyboard event listeners to all interactive elements
  document.querySelectorAll<HTMLElement>('button, [role="button"], [tabindex]').forEach(el => {
    el.setAttribute('tabindex', el.getAttribute('tabindex') || '0');
    
    // Add keyboard event for Enter/Space to simulate click
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        (e.target as HTMLElement).click();
      }
    };
    
    el.addEventListener('keydown', handleKeyDown);
    
    // Cleanup function to be called when component unmounts
    return () => {
      el.removeEventListener('keydown', handleKeyDown);
    };
  });
};

/**
 * Check if color contrast meets WCAG AA/AAA standards
 * @param bgColor - Background color in hex format (e.g., '#ffffff')
 * @param textColor - Text color in hex format (e.g., '#000000')
 * @returns Object with contrast ratio and compliance information
 */
export const checkContrast = (bgColor: string, textColor: string) => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };
  
  const bgRgb = hexToRgb(bgColor);
  const textRgb = hexToRgb(textColor);
  
  if (!bgRgb || !textRgb) return { ratio: 0, aa: false, aaa: false };
  
  const bgLum = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);
  const textLum = getLuminance(textRgb.r, textRgb.g, textRgb.b);
  
  const lighter = Math.max(bgLum, textLum);
  const darker = Math.min(bgLum, textLum);
  const contrastRatio = (lighter + 0.05) / (darker + 0.05);
  
  return {
    ratio: Math.round(contrastRatio * 100) / 100,
    aa: contrastRatio >= 4.5,
    aaa: contrastRatio >= 7,
  };
};

/**
 * Add skip to main content link for keyboard users
 */
export const addSkipToContentLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-blue-600';
  skipLink.textContent = 'Skip to main content';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

/**
 * Initialize accessibility features
 */
export const initAccessibility = () => {
  if (typeof window !== 'undefined') {
    addSkipToContentLink();
    ensureKeyboardNavigation();
  }
};
