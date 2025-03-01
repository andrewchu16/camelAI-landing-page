'use client';

import React, { useState } from 'react';
import PrimaryButton from '@/components/widgets/PrimaryButton';
import ApiWaitlistModal from './components/ApiWaitlistModal';

const ApiSignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-light-background pb-0 sm:pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row lg:justify-between max-w-5xl mx-auto gap-8 lg:gap-12">
            {/* Left side - Main content */}
            <div className="max-w-lg">
              <h2 className="font-mono text-2xl text-white mb-4 text-left">
                Want to build with camelAI?
              </h2>
              <p className="text-lg text-white-80 mb-6 text-left">
                Embed AI-powered analytics directly in your application with our API
              </p>
              <div className="flex justify-start">
                <PrimaryButton onClick={() => setIsModalOpen(true)} className="px-3">
                  Join API Waitlist
                </PrimaryButton>
              </div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-6 w-full lg:w-auto">
              <div className="text-left">
                <h3 className="text-lg text-white mb-2">
                  Natural Language → SQL
                </h3>
                <p className="text-sm text-white-60 font-medium">
                  Same powerful query engine that powers camelAI
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-lg text-white mb-2">
                  Secure Integration
                </h3>
                <p className="text-sm text-white-60 font-medium">
                  Enterprise-grade security and permissions
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-lg text-white mb-2">
                  Flexible Integration
                </h3>
                <p className="text-sm text-white-60 font-medium">
                  Full control over the user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApiWaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ApiSignUp;

