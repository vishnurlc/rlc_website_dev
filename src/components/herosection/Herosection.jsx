import React from 'react';

const Herosection = ({ url, type, posterurl }) => {
  return (
    <div className="min-h-screen min-w-screen relative">
      <div className="w-screen h-screen relative">
        {type === 'image' ? (
          <Image src={url} fill alt="Hero Section Image" />
        ) : (
          <video
            playsInline
            autoPlay
            muted
            loop
            poster={posterurl}
            className="h-[100vh] absolute object-cover top-0 w-full "
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Herosection;
