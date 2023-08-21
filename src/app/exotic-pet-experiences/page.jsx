import { ContactForm, HeroSection2, PetExperience } from '@/components';
import React from 'react';

const page = () => {
  return (
    <main>
      <HeroSection2
        type="image"
        heading1="Exotic Pet"
        heading2="Experiences"
        subheading={'Journey into the Extraordinary'}
        btntext={'Book an appointment'}
        url="/assets/petpage/vippetbanner.png"
      />
      <PetExperience />
      <div className="my-9 md:my-16">
        <ContactForm title={'Get in touch with us'} />
      </div>
    </main>
  );
};

export default page;
