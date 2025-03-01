import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
  { icon: '/x.webp', href: 'https://x.com/camelai', alt: 'X (Twitter)' },
  { icon: '/discord.webp', href: 'https://discord.gg/juNYATfJTZ', alt: 'Discord' },
  { icon: '/linkedin.webp', href: 'https://www.linkedin.com/company/usecamelai', alt: 'LinkedIn' },
  { icon: '/youtube.webp', href: 'https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw', alt: 'YouTube' },
  { icon: '/github.webp', href: 'https://github.com/qaml-ai', alt: 'GitHub' },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </Link>
        ))}
      </div>
      <div className="h-px bg-white/20 w-full"></div>
      <p className="text-sm text-white/40">
        © 2024 camelQA (DBA camelAI) | All rights reserved
      </p>
    </div>
  );
};

export default SocialLinks;
