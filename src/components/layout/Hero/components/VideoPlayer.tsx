'use client';

import React from "react";

interface VideoPlayerProps {
  onPlayClick: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ onPlayClick }) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden group drop-shadow-lg">
      <video
        className="w-full h-full object-cover rounded-lg"
        autoPlay={!isDevelopment}
        loop
        muted
        playsInline
        poster="/camelai-gif-poster.webp"
      >
        <source src="/camelai-gif.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play button overlay */}
      <button
        onClick={onPlayClick}
        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Play video"
      >
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-transform duration-300 transform group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default VideoPlayer; 