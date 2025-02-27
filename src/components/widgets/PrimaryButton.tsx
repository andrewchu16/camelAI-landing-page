import React from "react";
import Link from "next/link";

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
  const buttonClasses = `text-black bg-white w-40 h-[45px] flex justify-around items-center text-lg font-semibold rounded-[20px] transition-all duration-300 relative overflow-hidden z-[1] hover:translate-y-[-2px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[theme(--color-button-primary-gradient1)] before:via-[theme(--color-button-primary-gradient2)] before:to-[theme(--color-button-primary-gradient3)] before:opacity-0 before:-z-[1] before:transition-opacity hover:before:opacity-100 ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default PrimaryButton;
