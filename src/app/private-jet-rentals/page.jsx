import { ContactForm, HeroSection, SectionHeading } from '@/components';

import Jetcard from '@/components/privatejetrental/Jetcard';
import React from 'react';

const page = () => {
  return (
    <main>
      <h1 className="sr-only ">Private Jet Rentals - Richylife Club</h1>
      <HeroSection url={'/assets/privatejet/bannerimg.png'} />

      <div className="py-[43px] md:py-[86px]">
        <SectionHeading
          title={'Indulge in Extravagance'}
          description={
            'Elevate Your Journey with Our Exclusive Private Jet Rentals'
          }
        />
        <div className="grid grid-cols-1 gap-6 md:gap-16 my-8 md:my-16">
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
        <ContactForm
          title={'Soar to New Heights'}
          description={'Book your journey with our private jet rental now'}
        />
      </div>
    </main>
  );
};

export default page;
