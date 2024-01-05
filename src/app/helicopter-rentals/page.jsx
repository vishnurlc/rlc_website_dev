import { ContactForm, HeroSection2, Whyushelicopter } from '@/components';
import PackageCard from '@/components/helicopter/PackageCard';
import Faq from '@/components/home/faq';

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
    'Richy Life Club',
    'richylife club',
    'Dubai UAE',
  ],
  openGraph: {
    title: 'Luxury Helicopter Rental Dubai',
    description:
      "Experience Dubai from a new perspective with Richy life Club's luxury helicopter rental. Enjoy VIP helicopter tours over Dubai&apos;s iconic landmarks and breathtaking views.",
    siteName: 'Richy life Club',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/helicopter/banner.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/helicopter/banner.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const data = [
  {
    image: '/assets/helicopter/1.webp',
    title: '12 Mins Helicopter Tour',
    price: '710',
  },
  {
    image: '/assets/helicopter/2.jpeg',
    title: '17 Mins Helicopter Tour',
    price: '945',
  },
  {
    image: '/assets/helicopter/3.jpeg',
    title: '22 Mins Helicopter Tour',
    price: '1299',
  },
  {
    image: '/assets/helicopter/4.jpeg',
    title: '30 Mins Helicopter Tour',
    price: '1770',
  },
];
const page = () => {
  return (
    <main className="pt-[108px] md:pt-[128px]">
      <div className="hidden ">
        <HeroSection2
          type="image"
          heading1="Helicopters Tours &"
          heading2="Transfers in Dubai"
          subheading={'Experience the adventurous Journey'}
          btntext={'Book you ride'}
          url="/assets/helicopter/banner.png"
        />
      </div>

      <div className=" my-9 md:my-16 px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 ">
        {data.map((item, index) => (
          <PackageCard data={item} key={index} />
        ))}
      </div>
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
