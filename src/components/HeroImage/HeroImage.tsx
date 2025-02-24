// HeroImage.tsx
import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  overlayText?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, overlayText }) => {
  return (
    <div className="hero-image-container" style={{ position: 'relative', textAlign: 'center' }}>
      <img src={src} alt={alt} className="hero-image" style={{ width: '100%', height: 'auto' }} />
      {overlayText && (
        <div className="hero-overlay">
          <h2 style={{ color: 'white', fontSize: '2rem' }}>{overlayText}</h2>
        </div>
      )}
    </div>
  );
};

export default HeroImage;
