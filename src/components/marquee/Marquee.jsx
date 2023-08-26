'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const Marqueesection = ({ make, handleFilters, scrollIntoView }) => {
  const clickHandler = async (slug) => {
    await handleFilters({ name: 'make', value: slug });
    scrollIntoView();
  };
  return (
    <div className="marquee overflow-hidden">
      <Marquee autoFill>
        {make.data.map((e, index) => (
          <div
            className="relative w-[200px] min-h-[100px] cursor-pointer"
            key={index}
            onClick={() => {
              clickHandler(e.attributes.slug);
            }}
          >
            <Image
              key={index}
              fill
              src={e.attributes.logo.data.attributes.url}
              alt={`Car Logo ${index}`}
              className=" mr-10 w-52 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marqueesection;
