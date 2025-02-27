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
      className="relative text-white text-sm font-semibold transition-colors duration-200 ease-in-out py-0.5 group hover:translate-y-[-1px]"
    >
      {children}
      <span 
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80]
        transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left rounded-[1px]" 
      />
    </Link>
  );
};

export default NavLink;
