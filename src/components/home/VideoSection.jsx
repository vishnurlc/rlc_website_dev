const VideoSection = ({ url, posterurl }) => {
  return (
    <div className="w-full relative py-24 px-4">
      <div className="w-full h-full relative aspect-[16:9] max-w-[1200px] mx-auto rounded overflow-hidden">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster={posterurl}
          className="h-full w-full object-cover"
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
