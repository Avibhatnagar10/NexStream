// /components/VideoRoom.js
import React, { useEffect, useState } from 'react';
import { startVideoCall } from '../lib/webRTC';  // Import WebRTC functions

const VideoRoom = ({ roomId, userId }) => {
  const [videoStream, setVideoStream] = useState(null);

  useEffect(() => {
    // Start the video call when the component mounts
    startVideoCall(roomId, userId);

    // Get user media (video and audio)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setVideoStream(stream);
        const localVideo = document.getElementById('localVideo');
        if (localVideo) {
          localVideo.srcObject = stream; // Display the local video
        }
      })
      .catch(err => console.log("Error accessing media devices: ", err));
  }, [roomId, userId]);

  return (
    <div>
      <video id="localVideo" autoPlay playsInline />
      <video id="remoteVideo" autoPlay playsInline />
    </div>
  );
};

export default VideoRoom;
