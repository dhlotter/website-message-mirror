/**
 * Performance measurement and optimization utilities
 */

/**
 * Throttles a function to limit how often it can be called
 * @param func - The function to throttle
 * @param limit - Time in milliseconds to throttle the function
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounces a function to delay its execution until after a specified time
 * @param func - The function to debounce
 * @param wait - Time in milliseconds to wait before executing
 * @param immediate - Whether to execute immediately on first call
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

/**
 * Measures the execution time of a function
 * @param fn - The function to measure
 * @param label - Label for the measurement
 * @returns The result of the function
 */
export function measurePerformance<T>(
  fn: () => T,
  label: string
): T {
  if (typeof performance === 'undefined' || !performance.mark) {
    console.warn('Performance API not supported');
    return fn();
  }
  
  const startMark = `${label}-start`;
  const endMark = `${label}-end`;
  const measureName = `measure-${label}`;
  
  try {
    performance.mark(startMark);
    const result = fn();
    
    if (result instanceof Promise) {
      return result.then((res) => {
        performance.mark(endMark);
        performance.measure(measureName, startMark, endMark);
        logMeasurement(measureName);
        return res;
      }) as unknown as T;
    } else {
      performance.mark(endMark);
      performance.measure(measureName, startMark, endMark);
      logMeasurement(measureName);
      return result;
    }
  } catch (error) {
    console.error(`Error in ${label}:`, error);
    performance.clearMarks(startMark);
    performance.clearMarks(endMark);
    performance.clearMeasures(measureName);
    throw error;
  }
}

/**
 * Logs performance measurements to the console
 * @param measureName - Name of the performance measure to log
 */
function logMeasurement(measureName: string): void {
  if (typeof performance === 'undefined' || !performance.getEntriesByName) {
    return;
  }
  
  const entries = performance.getEntriesByName(measureName);
  entries.forEach((entry) => {
    console.log(`⚡ ${measureName}: ${Math.round(entry.duration * 100) / 100}ms`);
  });
  
  // Clean up
  performance.clearMeasures(measureName);
}

/**
 * Creates a memoized version of a function with a size-limited cache
 * @param fn - The function to memoize
 * @param options - Options for the memoization
 * @returns A memoized version of the function
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  options: { maxSize?: number; ttl?: number } = {}
): T {
  const { maxSize = 100, ttl } = options;
  const cache = new Map<string, { value: ReturnType<T>; expiresAt?: number }>();
  const keys = new Set<string>();
  
  return function(this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    const now = Date.now();
    
    // Check cache and return if valid
    if (cache.has(key)) {
      const cached = cache.get(key)!;
      
      // Check if cache entry has expired
      if (!cached.expiresAt || cached.expiresAt > now) {
        // Move key to the end of the keys set (LRU)
        keys.delete(key);
        keys.add(key);
        return cached.value;
      }
      
      // Remove expired entry
      cache.delete(key);
      keys.delete(key);
    }
    
    // Execute function and cache result
    const result = fn.apply(this, args);
    const expiresAt = ttl ? now + ttl : undefined;
    
    // Add to cache
    cache.set(key, { value: result, expiresAt });
    keys.add(key);
    
    // Enforce max cache size (LRU eviction)
    if (keys.size > maxSize) {
      const oldestKey = keys.values().next().value;
      cache.delete(oldestKey);
      keys.delete(oldestKey);
    }
    
    return result;
  } as T;
}

/**
 * Requests an idle callback with a fallback to setTimeout
 * @param callback - The function to call when idle
 * @param options - Options including timeout
 */
export function requestIdleCallback(
  callback: () => void,
  options: { timeout?: number } = {}
): { cancel: () => void } {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    const id = window.requestIdleCallback(callback, options);
    return {
      cancel: () => window.cancelIdleCallback(id)
    };
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    const id = setTimeout(callback, Math.min(options.timeout || 0, 100));
    return {
      cancel: () => clearTimeout(id)
    };
  }
}

/**
 * Defers execution of a function until the browser is idle
 * @param fn - The function to defer
 * @returns A promise that resolves when the function is executed
 */
export function deferExecution<T>(fn: () => T): Promise<T> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(
        () => {
          resolve(fn());
        },
        { timeout: 2000 }
      );
    } else {
      // Fallback using setTimeout with a small delay
      setTimeout(() => {
        resolve(fn());
      }, 0);
    }
  });
}

/**
 * Creates a function that only executes after a certain amount of idle time
 * @param fn - The function to execute
 * @param idleTime - Time in milliseconds to wait for idle
 * @returns A function that will execute after idle time
 */
export function executeWhenIdle<T extends (...args: any[]) => any>(
  fn: T,
  idleTime = 2000
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  return function(...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      const checkIdle = (deadline: { timeRemaining: () => number; didTimeout: boolean }) => {
        if (
          deadline.timeRemaining() > 0 || 
          deadline.didTimeout || 
          Date.now() - startTime > idleTime
        ) {
          resolve(fn(...args));
        } else {
          requestIdleCallback(checkIdle, { timeout: 100 });
        }
      };
      
      requestIdleCallback(checkIdle, { timeout: 100 });
    });
  };
}
