import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  href,
  className = "",
}) => {
  const buttonClasses = `text-black bg-white w-48 h-[45px] flex justify-around items-center text-lg font-semibold rounded-[20px] transition-all duration-300 relative overflow-hidden z-[1] hover:translate-y-[-2px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-button-primary-gradient1 before:via-button-primary-gradient2 before:to-button-primary-gradient3 before:opacity-0 before:-z-[1] before:transition-opacity hover:before:opacity-100 ${className}`;

  const ChevronIcon = () => (
    <div className="relative w-2 h-2 mr-1 flex items-center">
      <Image
        src="/chevron-right-black.png"
        alt="→"
        width={8}
        height={8}
        className="object-contain"
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

export default PrimaryButton;
