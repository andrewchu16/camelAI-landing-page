import React from 'react';
import PrimaryButton from '@/components/widgets/PrimaryButton';

const ApiSignUp = () => {
  return (
    <section className="w-full bg-light-background pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          {/* Two column layout */}
          <div className="flex justify-between max-w-5xl mx-auto">
            {/* Left side - Main content */}
            <div className="max-w-xl">
              <h2 className="font-mono text-h2 text-white mb-6">
                Want to build with camelAI?
              </h2>
              <p className="text-h3 text-white-80 mb-8">
                Embed AI-powered analytics directly in your application with our API
              </p>
              <PrimaryButton href="/api-waitlist">
                Join API Waitlist
              </PrimaryButton>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h3 text-white mb-2">
                  Natural Language → SQL
                </h3>
                <p className="text-small text-white-60 font-medium">
                  Same powerful query engine that powers camelAI
                </p>
              </div>

              <div>
                <h3 className="text-h3 text-white mb-2">
                  Secure Integration
                </h3>
                <p className="text-small text-white-60 font-medium">
                  Enterprise-grade security and permissions
                </p>
              </div>

              <div>
                <h3 className="text-h3 text-white mb-2">
                  Flexible Integration
                </h3>
                <p className="text-small text-white-60 font-medium">
                  Full control over the user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSignUp;

