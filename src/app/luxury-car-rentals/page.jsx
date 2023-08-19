import { HeroSection, ListingComponent, SectionHeading } from '@/components';
import Marquee from '@/components/marquee/Marquee';
import MasonryGrid from '@/components/yachtrental/PictureGallery';
import React from 'react';

const page = () => {
  const carLogos = [
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
    '/assets/petpage/bear.png',
  ];
  return (
    <main>
      <h1 className="sr-only ">Luxury Car Rentals - Richylife Club</h1>
      <HeroSection
        posterurl={'/assets/rentacar/banner.png'}
        type={'video'}
        alt="Luxury Car rentals"
        url={'/assets/home/hero.mp4'}
      />
      <div className="mx-auto max-w-[1200px]">
        <ListingComponent
          variant={'car'}
          title={'Crafting Driving Experiences'}
          description={
            'Choose from Our Handpicked Selection of Luxurious Cars for an Unforgettable Ride'
          }
        />
      </div>
      <div className="container mx-auto mt-10">
        <Marquee images={carLogos} />
      </div>
      <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <SectionHeading
          title={'Picture Gallery'}
          description={
            'Duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.'
          }
        />
        <MasonryGrid />
      </div>
    </main>
  );
};

export default page;
