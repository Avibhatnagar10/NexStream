// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <video
        className="w-full h-full"
        controls
        autoPlay
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
