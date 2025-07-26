import React, { useState, useEffect } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcSet?: string;
  webpSrc?: string;
  fallbackSrc?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  loading?: 'eager' | 'lazy';
  className?: string;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Image: React.FC<ImageProps> = ({
  src,
  srcSet,
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
  style = {},
  onError,
  ...props
}) => {
  const [isWebPSupported, setIsWebPSupported] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if WebP is supported
    const checkWebPSupport = () => {
      const elem = document.createElement('canvas');
      if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    setIsWebPSupported(checkWebPSupport());
  }, []);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (onError) onError(e);
  };

  // Determine which image source to use
  const imageSource = hasError && fallbackSrc ? fallbackSrc : src;
  const webpSource = hasError && fallbackSrc ? null : webpSrc;

  return (
    <picture className={className} style={style}>
      {webpSource && isWebPSupported && !hasError && (
        <source
          srcSet={webpSource}
          type="image/webp"
          width={width}
          height={height}
        />
      )}
      <img
        src={imageSource}
        srcSet={srcSet}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={`w-full h-auto ${className}`}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default Image;
