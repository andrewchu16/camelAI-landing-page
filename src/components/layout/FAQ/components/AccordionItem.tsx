import React from 'react';
import Image from 'next/image';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <h3 className="text-p text-white font-medium">{title}</h3>
        <div className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <Image
            src="/chevron-up-white.png"
            alt={isOpen ? 'Close' : 'Open'}
            width={20}
            height={20}
            className="opacity-80"
          />
        </div>
      </button>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-small text-white font-mono bg-light-background-blue rounded-lg p-3">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem; 