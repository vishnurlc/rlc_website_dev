import { HeroSection, ListingComponent } from '@/components';
import React from 'react';

const page = () => {
  return (
    <main>
      <h1 className="sr-only ">Luxury Yacht Rentals - Richylife Club</h1>
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'/assets/home/hero.mp4'}
      />
      <div className="mx-auto max-w-[1200px]">
        <ListingComponent />
      </div>
    </main>
  );
};

export default page;
