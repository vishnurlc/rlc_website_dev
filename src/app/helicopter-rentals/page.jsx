import { ContactForm, HeroSection2, Whyushelicopter } from '@/components';
import Faq from '@/components/home/faq';
import React from 'react';

export const metadata = {
  title: 'Helicopter Rentals Dubai',
  description:
    "Experience Dubai from a new perspective with Richy life Club's luxury helicopter rental. Enjoy VIP helicopter tours over Dubai&apos;s iconic landmarks and breathtaking views.",
  keywords: [
    'Helicopter Rental Dubai',
    'VIP Helicopter Tours',
    'Luxury Helicopter Rentals',
    'Helicopter Charter Dubai',
    'Aerial Tours Dubai',
    'Helicopter Sightseeing',
    'Dubai Landmarks',
    'Breathtaking Views',
    'Aerial Perspective',
    'Helicopter Adventure',
    'Dubai Skyline',
    'Private Helicopter Flights',
    'Iconic Landmarks',
    'Helicopter Excursions',
    'Dubai Aerial Experience',
    'Explore Dubai from Above',
    'Helicopter Ride Dubai',
    'VIP Sky Tours',
    'Richy life Club',
    'Dubai UAE',
  ],
  openGraph: {
    title: 'Luxury Helicopter Rental Dubai',
    description:
      "Experience Dubai from a new perspective with Richy life Club's luxury helicopter rental. Enjoy VIP helicopter tours over Dubai&apos;s iconic landmarks and breathtaking views.",
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/helicopter/banner.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/helicopter/banner.png`,
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
        heading1="Helicopters for"
        heading2="Rental in Dubai"
        subheading={'Experience the adventurous Journey'}
        btntext={'Book you ride'}
        url="/assets/helicopter/banner.png"
      />

      <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto">
        <Whyushelicopter />
      </div>
      <Faq category={'helicopter'} />
      <div className="my-9 md:my-16 px-6">
        <ContactForm title={'Get in touch with us'} />
      </div>
    </main>
  );
};

export default page;
