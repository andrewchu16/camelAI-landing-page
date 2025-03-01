import React from 'react';
import Image from 'next/image';

interface DemoSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: string;
}

const DemoSection: React.FC<DemoSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[1340px] mx-auto mb-24">
      <div className="mb-6">
        <div className="flex items-center justify-center gap-3 mb-5 w-fit mx-auto p-5 rounded-md
          [background-image:linear-gradient(90deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(90deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(0deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(0deg,rgba(255,255,255,0.1)_50%,transparent_50%)]
          [background-position:0_0,0_100%,0_0,100%_0]
          [background-size:18px_2px,18px_2px,2px_18px,2px_18px]
          [background-repeat:repeat-x,repeat-x,repeat-y,repeat-y]">
          <Image
            src={icon}
            alt="Section icon"
            width={24}
            height={24}
            className="opacity-80"
          />
          <h2 className="font-mono text-[32px] text-white font-light">{title}</h2>
        </div>
        <p className="text-p max-w-2xl mx-auto text-white-80 font-medium">{description}</p>
      </div>
      <div className="w-full rounded-lg overflow-hidden shadow-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1340}
          height={900}
          className="w-full"
          quality={95}
        />
      </div>
    </div>
  );
};

export default DemoSection; 