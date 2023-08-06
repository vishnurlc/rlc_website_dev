import React from 'react';

const Herosection = () => {
  return (
    <div className="min-h-screen min-w-screen relative">
      <div className="w-screen h-screen relative">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="/assets/home/heroposter.png"
          className="h-[100vh] absolute object-cover top-0 w-full "
        >
          <source src="/assets/home/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Herosection;
