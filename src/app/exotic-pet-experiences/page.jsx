import { ContactForm, HeroSection2, PetExperience } from '@/components';
import React from 'react';

export const metadata = {
  title: 'Private Zoo Visit in Dubai',
  description:
    "Embark on a unique adventure with Richylife Club's Exotic Pet Experience. Book a private zoo visit in Dubai to see, touch, and play with exclusive animals up close.",
  keywords: [
    'Exotic Pet Experience',
    'Private Zoo Visit Dubai',
    'Exclusive Animal Encounters',
    'Animal Interaction',
    'Play with Exotic Animals',
    'Zoo Tour',
    'Dubai Animal Adventure',
    'Touch and Feel Animals',
    'Petting Zoo Dubai',
    'Animal Enthusiast',
    'Private Animal Sanctuary',
    'Animal Lovers',
    'Dubai Experiences',
    'Unique Adventure',
    'VIP Animal Encounters',
    'Exotic Animal Interaction',
    'Book Private Zoo',
    'Dubai UAE',
    'Richylife Club',
  ],

  openGraph: {
    title: 'Private Zoo Visit in Dubai',
    description:
      "Embark on a unique adventure with Richylife Club's Exotic Pet Experience. Book a private zoo visit in Dubai to see, touch, and play with exclusive animals up close.",
    siteName: 'Richylife Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/petpage/vippetbanner.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/petpage/vippetbanner.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
      <div className="my-9 md:my-16 px-6">
        <ContactForm title={'Get in touch with us'} />
      </div>
    </main>
  );
};

export default page;
