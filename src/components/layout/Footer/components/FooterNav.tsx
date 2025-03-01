import React from 'react';
import Link from 'next/link';

const NAV_SECTIONS = {
  Company: [
    { label: 'About Us', href: 'https://camelai.com/about-us' },
    { label: 'Schedule a call', href: 'https://cal.com/ipr-camelai/book-a-demo' },
    { label: 'Email Us', href: 'mailto:support@camelai.com' },
  ],
  Links: [
    { label: 'Data Sources', href: 'https://camelai.com/data-sources' },
    { label: 'Demo Videos', href: 'https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw' },
    { label: 'Blog', href: 'https://camelai.com/blog' },
    { label: 'Product Hunt', href: 'https://www.producthunt.com/products/camelai' },
  ],
  Legal: [
    { label: 'Terms', href: 'https://camelai.com/terms' },
    { label: 'Privacy Policy', href: 'https://camelai.com/privacy-policy' },
    { label: 'Security', href: 'https://camelai.com/security' },
    { label: 'Acceptable Use', href: 'https://camelai.com/acceptable-use' },
  ],
};

export const FooterNav = () => {
  return (
    <nav className="grid grid-cols-3 gap-12">
      {Object.entries(NAV_SECTIONS).map(([title, links]) => (
        <div key={title} className="flex flex-col gap-6">
          <h3 className="text-gray-400 text-sm">{title}</h3>
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors whitespace-nowrap text-sm font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;
