import React from 'react';
import Logo from './Logo';

interface TrackProps {
  logos: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
  direction: 'left' | 'right';
  className?: string;
}

export const Track = ({ logos, direction, className = '' }: TrackProps) => {
  return (
    <div className={`flex w-fit ${className}`}>
      <div className={`flex gap-0 animate-scroll-${direction} hover:pause-animation`}>
        <div className="flex grow gap-2 px-2">
          {logos.map((logo, index) => (
            <Logo
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              href={logo.href}
            />
          ))}
        </div>
        <div className="flex grow gap-2 px-2">
          {logos.map((logo, index) => (
            <Logo
              key={`${logo.alt}-${index}-duplicate`}
              src={logo.src}
              alt={logo.alt}
              href={logo.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track; 