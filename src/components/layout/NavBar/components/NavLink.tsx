import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className="relative text-small text-[theme(--color-text-base)] font-semibold transition-colors duration-200 ease-in-out py-0.5 group hover:translate-y-[-1px] hover:text-[theme(--color-text-hover)]"
    >
      {children}
      <span 
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[theme(--color-gradient-start)] via-[theme(--color-gradient-middle)] to-[theme(--color-gradient-end)]
        transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left rounded-[1px]" 
      />
    </Link>
  );
};

export default NavLink;
