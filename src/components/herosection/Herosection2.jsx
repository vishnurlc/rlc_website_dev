import Image from 'next/image';
import React from 'react';

const Herosection2 = () => {
  return (
    <div className="w-full h-screen md:h-[90vh] relative">
      <Image
        src="/assets/petpage/vippetbanner.png"
        alt="Exclusive VIP pet Experiences"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className="absolute z-10 top-3/4 md:top-1/2 left-[5vw] text-white -translate-y-1/2 p-8 backdrop-blur-[2px]  ">
        <span className="text-gold text-opacity-70 font-inter text-sm md:text-lg">
          Journey into the Extraordinary
        </span>
        <h1 className="text-white text-5xl md:text-[64px] max-w-[400px] leading-tight font-poppins font-bold">
          Exotic Pet <br /> Experiences
        </h1>
        <button className="bg-primary px-6 py-2 mt-6 bg-opacity-80 rounded-sm text-gold border border-solid border-gold border-opacity-50">
          Visit Us
        </button>
      </div>
    </div>
  );
};

export default Herosection2;
