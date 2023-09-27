import {
  ContactForm,
  HeroSection2,
  PictureGallery,
  Whyus,
  YachtListing,
} from '@/components';
import Faq from '@/components/home/faq';

export const metadata = {
  title: 'Luxury Yacht Rental in Dubai | 100+ Luxury Yachts Options',
  description:
    "Immerse yourself in luxury and style with Richy life Club's ultimate yacht rental experience in Dubai. Explore our fleet of exclusive yachts for unforgettable charters and sea adventures",
  keywords: [
    'Luxury Yacht Rental Dubai',
    'Exclusive Yacht Charters',
    'Yacht Charter Services',
    'Private Yacht rentals',
    'Dubai Yacht Rentals',
    'Yacht Charter Destinations',
    'Yacht Rental Offers',
    'Yacht Vacation Dubai',
    'Luxury Yacht Events',
    'Yacht charter Dubai',
    'Yacht rental deals Dubai',
    'Yacht rental packages Dubai',
    'Yacht rental for events Dubai',
    'Yacht rental for weddings Dubai',
    'Yacht rental for parties Dubai',
    'Yacht rental for corporate events Dubai',
    'Yacht rental for photoshoots Dubai',
  ],
  openGraph: {
    title: 'Luxury Yacht Rental in Dubai | 100+ Luxury Yachts Options',
    description:
      "Immerse yourself in luxury and style with Richy life Club's ultimate yacht rental experience in Dubai. Explore our fleet of exclusive yachts for unforgettable charters and sea adventures",
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.WEB_URL}/assets/privateyachts/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.WEB_URL}/assets/privateyachts/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/yachts?populate=*`,
      {
        next: { revalidate: 40 },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('s', error);
    return {};
  }
}

export default async function page() {
  const yachts = await getData();
  return (
    <main>
      <h1 className="sr-only ">Luxury Yacht Rentals - Richy life Club</h1>
      <HeroSection2
        type={'image'}
        heading1={'Luxury Yacht'}
        heading2={'Rental in Dubai'}
        subheading={'Experience the sea breeze in luxury'}
        posterurl={'/assets/privateyachts/banner.png'}
        btntext={'Book your trip'}
        url={'/assets/privateyachts/banner.png'}
        overlay={1}
      />
      <div className="mx-auto max-w-[1200px]">
        <YachtListing data={yachts} variant={'yacht'} />
      </div>
      {/* <div className=" my-16 flex flex-col gap-9 md:gap-16">
        <PictureGallery
          title={'Picture Gallery'}
          description={
            'Join our global community on Instagram for an exclusive glimpse into a world where opulence knows no bounds.'
          }
        />
      </div> */}
      <div className="my-9 md:my-16 px-6 max-w-[1200px] mx-auto">
        <Whyus />
      </div>
      <Faq category={'yacht'} />
      <div className="my-9 md:my-16 px-6">
        <ContactForm
          title={'Set Sailing Now'}
          description={'Book your adventurous Journey with us'}
        />
      </div>
    </main>
  );
}
