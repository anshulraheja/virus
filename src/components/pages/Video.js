import React from "react";

function Video() {
  return (
    <div className="video-container">
      <div class="flex flex-col items-center justify-around text-center w-full mb-10 mt-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 py-2">
          See how cool Meto is!
        </h1>
        <div class="w-16 h-1 rounded-full bg-first inline-flex mb-5"></div>
      </div>
      <div className="video">
        <iframe
          width="700"
          height="394"
          className="video-iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
