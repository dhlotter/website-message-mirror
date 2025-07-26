/**
 * Keyboard utilities for better accessibility and user experience
 */

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyMap {
  [key: string]: KeyHandler;
}

/**
 * Creates a keyboard shortcut handler
 * @param keyMap - Object mapping key combinations to handler functions
 * @returns A function to be used as an event handler
 */
export const createKeyHandler = (keyMap: KeyMap) => {
  return (event: KeyboardEvent) => {
    // Skip if the event is already handled or if it's a composition event
    if (event.defaultPrevented || event.isComposing || event.keyCode === 229) {
      return;
    }

    // Create a normalized key string (e.g., "Control+Shift+KeyS")
    const keys: string[] = [];
    
    if (event.ctrlKey) keys.push('Control');
    if (event.shiftKey) keys.push('Shift');
    if (event.altKey) keys.push('Alt');
    if (event.metaKey) keys.push('Meta');
    
    // Skip if only modifier keys are pressed
    if (event.key.length > 1 && !['Control', 'Shift', 'Alt', 'Meta'].includes(event.key)) {
      keys.push(event.key);
    } else if (event.key.length === 1) {
      keys.push(event.key.toUpperCase());
    }
    
    const keyString = keys.join('+');
    const handler = keyMap[keyString];
    
    if (handler) {
      event.preventDefault();
      handler(event);
    }
  };
};

/**
 * Keyboard shortcut constants for common actions
 */
export const KEYS = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
} as const;

/**
 * Checks if the event target is a form element
 */
export const isFormElement = (target: EventTarget | null): boolean => {
  if (!target) return false;
  
  const formElements = [
    'INPUT',
    'TEXTAREA',
    'SELECT',
    'BUTTON',
    'AUDIO',
    'VIDEO',
    'A',
  ];
  
  return formElements.includes((target as HTMLElement).tagName);
};

/**
 * Focus trap for modal dialogs
 */
class FocusTrap {
  private container: HTMLElement;
  private firstFocusable: HTMLElement | null = null;
  private lastFocusable: HTMLElement | null = null;
  private previouslyFocused: HTMLElement | null = null;
  private keyDownHandler: (e: KeyboardEvent) => void;
  
  constructor(container: HTMLElement) {
    this.container = container;
    this.keyDownHandler = this.handleKeyDown.bind(this);
    this.init();
  }
  
  private init() {
    // Save the currently focused element
    this.previouslyFocused = document.activeElement as HTMLElement;
    
    // Find all focusable elements
    const focusableElements = this.container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      this.firstFocusable = focusableElements[0];
      this.lastFocusable = focusableElements[focusableElements.length - 1];
      
      // Focus the first element
      this.firstFocusable.focus();
      
      // Add event listeners
      this.container.addEventListener('keydown', this.keyDownHandler);
    }
  }
  
  private handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;
    
    // If only one focusable element, keep focus there
    if (this.firstFocusable === this.lastFocusable) {
      event.preventDefault();
      return;
    }
    
    // Handle shift + tab
    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusable) {
        event.preventDefault();
        this.lastFocusable?.focus();
      }
    } else {
      if (document.activeElement === this.lastFocusable) {
        event.preventDefault();
        this.firstFocusable?.focus();
      }
    }
  }
  
  public destroy() {
    this.container.removeEventListener('keydown', this.keyDownHandler);
    
    // Return focus to the previously focused element
    if (this.previouslyFocused && 'focus' in this.previouslyFocused) {
      (this.previouslyFocused as HTMLElement).focus();
    }
  }
}

/**
 * Creates a focus trap for a modal or dialog
 * @param container - The container element to trap focus within
 * @returns An object with a `destroy` method to clean up event listeners
 */
export const createFocusTrap = (container: HTMLElement) => {
  const trap = new FocusTrap(container);
  return {
    destroy: () => trap.destroy(),
  };
};

/**
 * Handles keyboard navigation in a list
 * @param options - Configuration options
 * @returns An object with event handlers
 */
export const createListNavigation = (options: {
  onSelect: (index: number) => void;
  onFocusChange?: (index: number) => void;
  itemCount: number;
  loop?: boolean;
  orientation?: 'horizontal' | 'vertical';
}) => {
  const {
    onSelect,
    onFocusChange,
    itemCount,
    loop = true,
    orientation = 'vertical',
  } = options;
  
  let focusedIndex = -1;
  
  const moveFocus = (delta: number) => {
    if (itemCount === 0) return;
    
    let newIndex = focusedIndex + delta;
    
    if (loop) {
      newIndex = (newIndex + itemCount) % itemCount;
    } else {
      newIndex = Math.max(0, Math.min(newIndex, itemCount - 1));
    }
    
    if (newIndex !== focusedIndex) {
      focusedIndex = newIndex;
      onFocusChange?.(focusedIndex);
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (itemCount === 0) return;
    
    switch (event.key) {
      case KEYS.ARROW_UP:
        if (orientation === 'vertical') {
          event.preventDefault();
          moveFocus(-1);
        }
        break;
        
      case KEYS.ARROW_DOWN:
        if (orientation === 'vertical') {
          event.preventDefault();
          moveFocus(1);
        }
        break;
        
      case KEYS.ARROW_LEFT:
        if (orientation === 'horizontal') {
          event.preventDefault();
          moveFocus(-1);
        }
        break;
        
      case KEYS.ARROW_RIGHT:
        if (orientation === 'horizontal') {
          event.preventDefault();
          moveFocus(1);
        }
        break;
        
      case KEYS.HOME:
        event.preventDefault();
        moveFocus(-Infinity);
        break;
        
      case KEYS.END:
        event.preventDefault();
        moveFocus(Infinity);
        break;
        
      case KEYS.ENTER:
      case KEYS.SPACE:
        event.preventDefault();
        if (focusedIndex >= 0) {
          onSelect(focusedIndex);
        }
        break;
    }
  };
  
  return {
    onKeyDown: handleKeyDown,
    setFocusedIndex: (index: number) => {
      if (index >= -1 && index < itemCount) {
        focusedIndex = index;
      }
    },
    getFocusedIndex: () => focusedIndex,
  };
};
