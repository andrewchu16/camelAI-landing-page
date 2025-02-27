import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./components/NavLink";

export const NavBar = () => {
  return (
    <nav className="bg-black/10 backdrop-blur-[10px] font-semibold text-[theme(--fs-small)] flex justify-center py-2.5 w-full rounded-lg transition-all duration-700 ease-in-out">
      <div className="max-w-[1340px] w-full flex flex-row px-5">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/main-camelai.webp"
            alt="camelAI Logo"
            width={200}
            height={40}
            className="h-[25px] w-auto aspect-auto flex-shrink-0"
            priority
          />
        </Link>

        <div className="flex flex-row justify-end items-center w-full gap-8">
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/login">Log in</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
