import { HeroSection, SectionHeading } from '@/components';
import Jetcard from '@/components/privatejetrental/Jetcard';
import React from 'react';

const page = () => {
  return (
    <div className="">
      <HeroSection url={'/assets/privatejet/bannerimg.png'} />
      <div className="py-[25px] md:py-[86px]">
        <SectionHeading
          title={'Indulge in Extravagance'}
          description={
            'Elevate Your Journey with Our Exclusive Private Jet Rentals'
          }
        />
        <div className="grid grid-cols-1">
          <Jetcard
            data={{
              title: 'Private Jet',
              price: '120,987',
              url: '/assets/privatejet/1.png',
            }}
          />
          <Jetcard
            data={{
              title: 'Private Jet',
              price: '120,987',
              url: '/assets/privatejet/1.png',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
