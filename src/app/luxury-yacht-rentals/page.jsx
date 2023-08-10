import { HeroSection } from '@/components';
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
    </main>
  );
};

export default page;
