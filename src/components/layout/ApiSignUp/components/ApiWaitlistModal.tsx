import React from 'react';
import Image from 'next/image';

interface ApiWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiWaitlistModal: React.FC<ApiWaitlistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 mb-4 mr-4 w-[400px] bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-light-background">
        <div className="flex items-center gap-3">
          <Image
            src="/qaml-favicon.webp"
            alt="camelAI Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <h3 className="text-h3 text-white font-medium">camelAI API Waitlist</h3>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white-60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form */}
      <div className="p-6 bg-white">
        <p className="text-black mb-6">Tell us about yourself.</p>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Work Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApiWaitlistModal; 