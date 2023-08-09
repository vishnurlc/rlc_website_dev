import { HeroSection } from '@/components';
import React from 'react';

const page = () => {
  return (
    <main>
      <HeroSection
        posterurl={'/assets/home/heroposter.png'}
        type={'video'}
        url={'/assets/home/hero.mp4'}
      />
    </main>
  );
};

export default page;
