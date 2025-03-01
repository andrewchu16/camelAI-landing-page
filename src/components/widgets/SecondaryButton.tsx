import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  href,
}) => {
  const buttonClasses = `text-white border-2 border-button-secondary-border w-48 h-[45px] flex justify-around items-center text-lg font-semibold rounded-[20px] transition-all duration-300 relative overflow-hidden z-[1] hover:translate-y-[-2px] hover:border-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[200%] before:h-full before:bg-gradient-to-r before:from-button-secondary-gradient1 before:via-button-secondary-gradient2 before:to-button-secondary-gradient3 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-600 before:-z-[1]`;

  const ChevronIcon = () => (
    <div className="relative w-2 h-2 mr-1 flex items-center">
      <Image
        src="/chevron-right-black.png"
        alt="→"
        width={8}
        height={8}
        className="object-contain invert"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
        <ChevronIcon />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
      <ChevronIcon />
    </button>
  );
};

export default SecondaryButton;
