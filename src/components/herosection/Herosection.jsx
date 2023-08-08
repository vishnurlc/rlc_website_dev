'use client';
import React from 'react';
import { Button } from '../ui/button/Button';
import Image from 'next/image';

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
            <source src={''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 h-fit">
          <Button variant={'whiteborder'} href="#services">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
