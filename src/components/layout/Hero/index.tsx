import React from "react";
import PrimaryButton from "@/components/widgets/PrimaryButton";
import SecondaryButton from "@/components/widgets/SecondaryButton";
import FeatureBadges from "./components/FeatureBadges";
import VideoPlayerWithModal from "./components/VideoPlayerWithModal";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center text-white px-4 pb-10 pt-7">
      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-h1 font-semibold mb-6">The AI Data Analyst</h1>
        <p className="text-p mb-12">
          Ask questions, get instant charts and insights from your data.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <PrimaryButton href="/try" className="press-me-animation">
            Try free
          </PrimaryButton>
          <SecondaryButton href="/demo">Book demo</SecondaryButton>
        </div>

        {/* Feature badges */}
        <FeatureBadges />
      </div>

      {/* Video/Demo section */}
      <div className="w-full max-w-5xl mt-16 px-4">
        <VideoPlayerWithModal />
      </div>
    </section>
  );
};

export default Hero;
