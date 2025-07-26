import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  circle?: boolean;
  height?: number | string;
  width?: number | string;
  count?: number;
  inline?: boolean;
  style?: React.CSSProperties;
  containerClassName?: string;
  containerTestId?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  circle = false,
  height = '1em',
  width = '100%',
  count = 1,
  inline = false,
  style = {},
  containerClassName = '',
  containerTestId,
  ...props
}) => {
  const elements = [];
  
  for (let i = 0; i < count; i++) {
    const skeletonStyle = {
      height: typeof height === 'number' ? `${height}px` : height,
      width: i === count - 1 ? width : '100%',
      borderRadius: circle ? '50%' : '0.25rem',
      ...style,
    };
    
    elements.push(
      <span
        key={i}
        className={cn(
          'bg-gray-200 dark:bg-gray-700 animate-pulse block',
          className
        )}
        style={skeletonStyle}
        {...props}
      />
    );
  }
  
  const containerClasses = cn(
    'skeleton-container',
    {
      'inline-block': inline,
      'flex items-center space-x-2': count > 1,
    },
    containerClassName
  );
  
  return (
    <span 
      className={containerClasses}
      data-testid={containerTestId}
      aria-live="polite"
      aria-busy={true}
    >
      {elements}
    </span>
  );
};

// Skeleton variants for common use cases
export const TextSkeleton: React.FC<Omit<SkeletonProps, 'height' | 'width'>> = (props) => (
  <Skeleton height="1em" width="100%" {...props} />
);

export const TitleSkeleton: React.FC<Omit<SkeletonProps, 'height' | 'width'>> = (props) => (
  <Skeleton height="2rem" width="70%" className="mb-2" {...props} />
);

export const AvatarSkeleton: React.FC<Omit<SkeletonProps, 'height' | 'width' | 'circle'>> = (props) => (
  <Skeleton height="40px" width="40px" circle {...props} />
);

export const ButtonSkeleton: React.FC<Omit<SkeletonProps, 'height' | 'width'>> = (props) => (
  <Skeleton height="40px" width="120px" className="rounded-md" {...props} />
);

export const CardSkeleton: React.FC<Omit<SkeletonProps, 'height' | 'width'>> = ({
  className = '',
  ...props
}) => (
  <div className={cn('p-4 space-y-3', className)}>
    <Skeleton height="160px" width="100%" className="rounded-lg" {...props} />
    <div className="space-y-2">
      <Skeleton height="1.25rem" width="80%" {...props} />
      <Skeleton height="0.875rem" width="100%" {...props} />
      <Skeleton height="0.875rem" width="60%" {...props} />
    </div>
  </div>
);

export default Skeleton;
