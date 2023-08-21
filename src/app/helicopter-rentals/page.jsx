import { ContactForm, HeroSection2 } from '@/components';
import React from 'react';

const page = () => {
  return (
    <main>
      <HeroSection2
        type="image"
        heading1="Helicopters for"
        heading2="Rental in Dubai"
        subheading={'Experience the adventurous Journey'}
        btntext={'Book you ride'}
        url="/assets/helicopter/banner.png"
      />

      <div className="my-9 md:my-16 px-6">
        <ContactForm title={'Get in touch with us'} />
      </div>
    </main>
  );
};

export default page;
