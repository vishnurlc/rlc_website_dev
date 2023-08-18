import {
  HeroSection,
  ListingComponent,
  SectionHeading,
  YachtListing,
} from '@/components';
import Filter from '@/components/ui/filter/filter';
import MasonryGrid from '@/components/yachtrental/PictureGallery';
import React from 'react';

const page = () => {
  return (
    <main>
      <h1 className="sr-only ">Luxury Yacht Rentals - Richylife Club</h1>
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        alt="Luxury Yacht Rental"
        url={'/assets/home/hero.mp4'}
      />
      <div className="mx-auto max-w-[1200px]">
        <YachtListing />
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
