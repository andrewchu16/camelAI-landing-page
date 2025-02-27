import React from "react";
import Link from "next/link";
import PrimaryButton from "@/components/widgets/PrimaryButton";
import SecondaryButton from "@/components/widgets/SecondaryButton";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-semibold mb-6">The AI Data Analyst</h1>
        <p className="text-2xl mb-12">
          Ask questions, get instant charts and insights from your data.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <PrimaryButton href="/try" className="press-me-animation">
            Try free
            <span className="ml-2">→</span>
          </PrimaryButton>
          <SecondaryButton href="/demo">
            Book demo
            <span className="ml-2">→</span>
          </SecondaryButton>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="text-orange-400">Y</span>
            <span>Y Combinator backed</span>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
            <span>🔒</span>
            <span>Enterprise Security</span>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
            <span>✓</span>
            <span>100% Data Privacy</span>
          </div>
        </div>
      </div>

      {/* Video/Demo section */}
      <div className="w-full max-w-5xl mt-16 px-4">
        <div className="relative aspect-video bg-black/20 rounded-lg overflow-hidden">
          {/* Add video/demo content here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
