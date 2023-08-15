import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button/Button';

const CarouselSlide = ({ url, title, price }) => {
  return (
    <div className="relative w-full h-full ">
      <Image
        src={url}
        fill
        alt={title}
        style={{
          objectFit: 'cover',
          objectPosition: '50%',
          borderRadius: '5px',
        }}
      />
      <div className="absolute inset-0 z-10 flex items-start p-6 md:p-10 justify-end flex-col gap-4">
        <div className=" text-white ">
          <h3 className="text-xl md:text-3xl font-inter font-medium ">
            {title}
          </h3>
          <span className="text-sm md:text-lg font-poppins font-light ">
            AED {price}/hr
          </span>
        </div>
        <Button variant="whiteborder">Book now</Button>
      </div>
      <div className="absolute inset-0 opacity-30 bg-[#142f39]"></div>
    </div>
  );
};

export default CarouselSlide;