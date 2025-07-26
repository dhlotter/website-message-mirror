import { ComponentType, lazy, LazyExoticComponent, ComponentClass, FunctionComponent } from 'react';

/**
 * Type for React component with preload method
 */
type PreloadableComponent<T extends ComponentType<any>> = LazyExoticComponent<T> & {
  preload: () => Promise<{ default: T }>;
};

/**
 * Creates a lazy-loaded component with retry logic and preloading
 * @param importFn - Function that returns a dynamic import()
 * @param retries - Number of retry attempts
 * @param retryDelay - Delay between retries in milliseconds
 * @returns Lazy-loaded component with preload capability
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  retryDelay = 1000
): PreloadableComponent<T> {
  const retry = (
    importFn: () => Promise<{ default: T }>,
    retries: number,
    reason?: Error
  ): Promise<{ default: T }> => {
    if (retries <= 0) {
      console.error('Failed to load component after retries', reason);
      return Promise.reject(reason);
    }

    return importFn().catch((error) => {
      console.warn(`Retrying import (${retries} attempts remaining)`);
      // Wait for the specified delay before retrying
      return new Promise((resolve) => setTimeout(resolve, retryDelay)).then(
        () => retry(importFn, retries - 1, error)
      );
    });
  };

  const lazyComponent = lazy(() => retry(importFn, retries));
  
  // Add preload method to the lazy component
  (lazyComponent as PreloadableComponent<T>).preload = () => retry(importFn, retries);
  
  return lazyComponent as PreloadableComponent<T>;
}

/**
 * Preloads a lazy component
 * @param lazyComponent - Lazy component with preload method
 * @returns Promise that resolves when the component is loaded
 */
export const preloadLazyComponent = <T extends ComponentType<any>>(
  lazyComponent: PreloadableComponent<T>
): Promise<void> => {
  return lazyComponent.preload().then(() => {
    // Preload all chunks that the component might dynamically import
    const chunks = (window as any).__webpack_chunk_load__ ? (window as any).__webpack_chunk_load__ : [];
    return Promise.all(chunks);
  }).then(() => {});
};

/**
 * Creates a component with built-in loading state and error boundaries
 * @param importFn - Function that returns a dynamic import()
 * @param LoadingComponent - Component to show while loading
 * @param ErrorComponent - Component to show if loading fails
 * @returns A component with loading and error states
 */
export function createLazyComponent<T extends object>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  LoadingComponent: ComponentType = () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
  ErrorComponent: ComponentType<{ error?: Error; retry?: () => void }> = ({ error, retry }) => (
    <div className="p-4 bg-red-50 text-red-700 rounded-md">
      <p className="font-medium">Failed to load component</p>
      {error && <p className="text-sm mt-1">{error.message}</p>}
      {retry && (
        <button
          onClick={retry}
          className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm"
        >
          Retry
        </button>
      )}
    </div>
  )
): ComponentType<T> {
  const LazyComponent = lazyWithRetry(importFn);
  
  return function LazyWithLoading(props: T) {
    return (
      <ErrorBoundary 
        fallback={({ error, resetErrorBoundary }) => (
          <ErrorComponent error={error} retry={resetErrorBoundary} />
        )}
      >
        <React.Suspense fallback={<LoadingComponent />}>
          <LazyComponent {...props} />
        </React.Suspense>
      </ErrorBoundary>
    );
  } as ComponentType<T>;
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: (props: { error: Error | null; resetErrorBoundary: () => void }) => React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback({ 
        error: this.state.error, 
        resetErrorBoundary: this.resetErrorBoundary 
      });
    }
    
    return this.props.children;
  }
}

// Re-export with a more specific type
export type { PreloadableComponent };
