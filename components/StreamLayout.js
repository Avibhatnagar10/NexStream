// components/StreamLayout.js
import React from 'react';
import VideoPlayer from './VideoPlayer';
import ChatBox from './ChatBox';

const StreamLayout = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-black"> {/* Set the background to black */}
      <div className="flex-1 p-4">
        <VideoPlayer />
      </div>
      <div className="w-1/4 p-4">
        <ChatBox />
      </div>
    </div>
  );
};

export default StreamLayout;
