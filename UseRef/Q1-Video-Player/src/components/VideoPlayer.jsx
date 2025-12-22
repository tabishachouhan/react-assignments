import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <section className="video-section">
      <video
        ref={videoRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div className="controls">
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward 5s</button>
        <button onClick={rewindVideo}>⏪ Rewind 5s</button>
      </div>
    </section>
  );
}

export default VideoPlayer;
