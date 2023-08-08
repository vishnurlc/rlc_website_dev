import React from 'react';

const VideoPlayer = ({ url }) => {
  return (
    <video playsInline autoPlay muted loop preload="metadata">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
