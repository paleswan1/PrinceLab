import React from "react";

const VideoLanding = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-6 min-h-screen">
      <iframe
        className="w-full h-screen rounded-lg"
        src="https://www.youtube.com/watch?v=dpEPNioJ1Ik&ab_channel=PrinceLab"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoLanding;
