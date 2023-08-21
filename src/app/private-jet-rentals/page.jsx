import {
  ContactForm,
  HeroSection,
  HeroSection2,
  SectionHeading,
} from '@/components';

import Jetcard from '@/components/privatejetrental/Jetcard';
import React from 'react';

const page = () => {
  return (
    <main>
      <h1 className="sr-only ">Private Jet Rentals - Richylife Club</h1>
      <HeroSection2
        type={'video'}
        heading1={'Private Jets'}
        heading2={'Rental in Dubai'}
        subheading={'Experience the extreme luxury with us'}
        posterurl={'/assets/privatejet/bannerimg.png'}
        btntext={'Book Now'}
        overlay={0}
      />

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
