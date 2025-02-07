import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '' }) => {
  // Add WebP format and optimize quality
  const optimizedSrc = src.includes('?') 
    ? `${src}&fm=webp&q=80&auto=format,compress` 
    : `${src}?fm=webp&q=80&auto=format,compress`;

  return (
    <div className={`relative ${className}`}>
      <img
        src={optimizedSrc}
        alt={alt}
        loading="lazy"
        className={className}
        decoding="async"
      />
    </div>
  );
};

export default React.memo(OptimizedImage);