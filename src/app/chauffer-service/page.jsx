import {
  ContactForm,
  HeroSection,
  HeroSection2,
  SectionHeading,
} from '@/components';
import CardSq from '@/components/ui/card/CardSq';
import Image from 'next/image';
import React from 'react';

const page = () => {
  const data = [
    {
      title: 'Airport Transfer',
      image: '/assets/home/heroposter.png',
    },
    {
      title: 'Half/Full Day',
      image: '/assets/home/heroposter.png',
    },
    {
      title: 'Dubai City Tour',
      image: '/assets/home/heroposter.png',
    },
    {
      title: 'A-B Transfer',
      image: '/assets/home/heroposter.png',
    },
    {
      title: 'Events',
      image: '/assets/home/heroposter.png',
    },
  ];
  return (
    <main>
      <HeroSection2
        type="image"
        heading1="Luxury Chauffer"
        heading2="Services"
        subheading={'Your Voyage into Elegance and Comfort'}
        btntext={'Book Now'}
        url="/assets/chauffer/hero.png"
      />

      <div className="mt-10 max-w-[1200px] mx-auto px-5">
        <SectionHeading title={'Our Services'} description={''} />
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4 md:gap-6">
            {data.map((e, index) => (
              <CardSq key={index} title={e.title} />
            ))}
          </div>
        </div>
        <div className="my-9 md:my-16 ">
          <ContactForm
            title={'Get in Touch with Us'}
            description={'Get in Touch with Us'}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
