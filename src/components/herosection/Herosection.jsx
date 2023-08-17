'use client';
import React from 'react';
import { Button } from '../ui/button/Button';
import Image from 'next/image';

const Herosection = ({ url, type, posterurl, alt }) => {
  return (
    <div className="h-screen w-full relative">
      <div className="w-full h-full">
        {type === 'video' ? (
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
        ) : (
          <Image
            src={url}
            fill
            alt={alt || 'Hero Section Image'}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        )}

        <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-10 h-fit">
          <Button variant={'whiteborder'} href="#services">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
