import {
  ContactForm,
  HeroSection2,
  ListingComponent,
  Loader,
  ToursListingComponent,
} from '@/components';
import { Suspense } from 'react';

export const metadata = {
  title: 'Tours and Excursions',
  description:
    "Embark on unforgettable journeys and exciting adventures with Richy Life Club's premium tours and excursions service. Discover captivating destinations, cultural wonders, and thrilling experiences tailored to make your travel moments truly memorable.",
  keywords: [
    'Premium Tours',
    'Excursion Packages',
    'Adventure Travel',
    'Cultural Tours',
    'Guided Excursions',
    'Luxury Travel Experiences',
    'Discover New Destinations',
    'Exclusive Travel Packages',
    'Richy Life Club Tours',
    'richylife club excursions',
    'Guided Sightseeing Tours',
    'Adventure Vacation Packages',
    'Cultural Immersion Experiences',
    'Luxury Travel Destinations',
  ],
  openGraph: {
    title: 'Premium Tours and Excursions | Discover Unforgettable Adventures',
    description:
      "Embark on unforgettable journeys and exciting adventures with Richy Life Club's premium tours and excursions service. Discover captivating destinations, cultural wonders, and thrilling experiences tailored to make your travel moments truly memorable.",
    siteName: 'Richy Life Club',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/tours/bimage.avif`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/tours/bimage.avif`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function page() {
  return (
    <main className="pt-[150px]">
      <h1 className="sr-only">Tours and Excursions - Richy life Club</h1>
      <div className="hidden">
        <HeroSection2
          type={'image'}
          heading1={'Tours And'}
          heading2={'Excursions'}
          subheading={'Curating the best travel experiences'}
          posterurl={'/assets/tours/bannerimage.jpeg'}
          btntext={'Book your ride'}
          url={'/assets/tours/bimage.avif'}
          overlay={1}
        />
      </div>
      <div className="mx-auto max-w-[1200px]">
        <Suspense fallback={<Loader />}>
          <ToursListingComponent />
        </Suspense>
      </div>

      <div className="my-9 md:my-16 px-6">
        <ContactForm
          title={'Get In touch'}
          description={'Experience Elegance & Convenience'}
        />
      </div>
    </main>
  );
}
