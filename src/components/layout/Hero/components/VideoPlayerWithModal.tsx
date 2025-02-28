'use client';

import React, { useState } from "react";
import VideoModal from "./VideoModal";
import VideoPlayer from "./VideoPlayer";

const VIDEO_ID = "rdPeT8-iiqY";

export const VideoPlayerWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <VideoPlayer onPlayClick={() => setIsModalOpen(true)} />
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={VIDEO_ID}
      />
    </>
  );
};

export default VideoPlayerWithModal; 