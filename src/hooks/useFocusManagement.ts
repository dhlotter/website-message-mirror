import { RefObject, useEffect, useRef } from 'react';
import { trapFocus } from '../utils/accessibility';

interface FocusTrapOptions {
  isEnabled?: boolean;
  initialFocusRef?: RefObject<HTMLElement>;
  returnFocusOnUnmount?: boolean;
}

export const useFocusTrap = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: FocusTrapOptions = {}
) => {
  const { isEnabled = true, initialFocusRef, returnFocusOnUnmount = true } = options;
  const previousActiveElement = useRef<Element | null>(null);

  useEffect(() => {
    if (!isEnabled || !ref.current) return;

    // Save the currently focused element
    previousActiveElement.current = document.activeElement;

    // Focus the initial element if provided, otherwise focus the container
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else if (ref.current) {
      ref.current.focus();
    }

    // Set up the focus trap
    const cleanupTrap = trapFocus(ref.current);

    // Handle escape key to close modal/dialog
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && ref.current) {
        // Trigger any onClose handler if it exists
        const closeEvent = new Event('close', { bubbles: true });
        ref.current.dispatchEvent(closeEvent);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      // Remove event listeners
      document.removeEventListener('keydown', handleKeyDown);
      if (cleanupTrap) cleanupTrap();

      // Return focus to the previously focused element
      if (returnFocusOnUnmount && previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    };
  }, [isEnabled, initialFocusRef, ref, returnFocusOnUnmount]);

  return { ref };
};

/**
 * Hook to manage focus for a component
 * @param isOpen - Whether the component is open/mounted
 * @param options - Options for focus management
 * @returns Props to spread onto the target element
 */
export const useFocusManagement = (
  isOpen: boolean,
  options: FocusTrapOptions = {}
) => {
  const ref = useRef<HTMLElement>(null);
  const { isEnabled = true } = options;

  useFocusTrap(ref, {
    ...options,
    isEnabled: isEnabled && isOpen,
  });

  return {
    ref,
    role: 'dialog',
    'aria-modal': isOpen ? 'true' : undefined,
    tabIndex: -1,
  };
};
