import { ContactForm, HeroSection2, PetExperience } from '@/components';
import React from 'react';

const page = () => {
  return (
    <main>
      <HeroSection2 />
      <PetExperience />
      <div className="my-9 md:my-16">
        <ContactForm title={'Get in touch with us'} />
      </div>
    </main>
  );
};

export default page;
