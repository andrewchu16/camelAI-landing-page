import React from "react";
import FeatureBadge from "./FeatureBadge";

const FEATURES = [
  {
    iconSrc: "/yc-logo.webp",
    iconAlt: "Y Combinator",
    text: "Y Combinator backed"
  },
  {
    iconSrc: "/lock-icon.webp",
    iconAlt: "Security",
    text: "Enterprise Security"
  },
  {
    iconSrc: "/shield-icon.webp",
    iconAlt: "Data Privacy",
    text: "100% Data Privacy"
  }
];

export const FeatureBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {FEATURES.map((feature) => (
        <FeatureBadge
          key={feature.text}
          iconSrc={feature.iconSrc}
          iconAlt={feature.iconAlt}
          text={feature.text}
        />
      ))}
    </div>
  );
};

export default FeatureBadges; 