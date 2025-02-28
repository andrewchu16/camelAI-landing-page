import React from "react";
import Image from "next/image";

interface FeatureBadgeProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

export const FeatureBadge: React.FC<FeatureBadgeProps> = ({ iconSrc, iconAlt, text }) => {
  return (
    <div className="bg-button-secondary-gradient1 px-2 py-1.5 rounded-lg flex items-center gap-1">
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
        className="flex-shrink-0 w-[20px] h-[20px]"
      />
      <span>{text}</span>
    </div>
  );
};

export default FeatureBadge; 