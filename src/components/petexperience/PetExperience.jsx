import Image from 'next/image';
import React from 'react';
import { SectionHeading } from '..';
import Section2 from './Section2';

const PetExperience = () => {
  return (
    <div className="relative h-auto px-6 py-9 md:p-20">
      <div className="relative z-20 max-w-[1200px] mx-auto">
        <SectionHeading
          title={'Explore a World of Wonders'}
          title_color={'gold'}
        />
        <Section2 />
      </div>
      <div className="absolute inset-0 ">
        <Image
          src="/assets/petpage/bg.png"
          alt="exotic vip pet services"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#162428] bg-opacity-95"></div>
    </div>
  );
};

export default PetExperience;
