import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  src: string;
  alt: string;
  href?: string;
}

export const Logo = ({ src, alt, href }: LogoProps) => {
  const LogoContent = () => (
    <div className="w-[100px] h-[100px] relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain opacity-70 brightness-[80%] transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="px-1.5">
        <LogoContent />
      </Link>
    );
  }

  return (
    <div className="px-1.5">
      <LogoContent />
    </div>
  );
};

export default Logo; 